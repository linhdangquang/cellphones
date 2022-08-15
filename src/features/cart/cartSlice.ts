import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IProduct } from '../../types/product';
import { toast } from 'react-toastify';


export interface CartItem extends IProduct {
  quantity: number;
}

export interface Cart {
  products: CartItem[];
  total: number;
  totalItems: number;
}


const initialState: Cart = {
  products: [],
  total: 0,
  totalItems: 0,
};

const productInCartFn = (product: IProduct, cart: Cart) => {
  return cart.products.find(item => item.id === product.id);
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IProduct>) => {
      const product = action.payload;
      const productInCart = productInCartFn(product, state);
      if (productInCart) {
        productInCart.quantity += 1;
        toast.success('Sản phẩm đã được cộng thêm vào giỏ hàng');
      } else {
        state.products.push({ ...product, quantity: 1 });
        toast.success(`${product.name} đã được thêm vào giỏ hàng`);
      }
      state.totalItems += 1;
      state.total += product.saleOffPrice || product.originalPrice;
    },
    increaseQuantityItem: (state, action: PayloadAction<CartItem>) => {
      const product = action.payload;
      const productInCart = productInCartFn(product, state);
      if (productInCart) {
        productInCart.quantity += 1;
      }
      state.totalItems += 1;
      state.total += product.saleOffPrice || product.originalPrice;
    },
    decreaseQuantityItem: (state, action: PayloadAction<CartItem>) => {
      const product = action.payload;
      const productInCart = productInCartFn(product, state);
      if (productInCart) {
        productInCart.quantity -= 1;
        if (productInCart.quantity === 0) {
          state.products = state.products.filter((p) => p.id !== product.id);
          toast.info(`${product.name} đã được xóa khỏi giỏ hàng`);
        }
      }
      state.totalItems -= 1;
      state.total -= product.saleOffPrice || product.originalPrice;
    },
    removeItemFromCart: (state, action: PayloadAction<CartItem>) => {
      const product = action.payload;
      state.products = state.products.filter((p) => p.id !== product.id);
      state.totalItems = state.totalItems - product.quantity;
      state.total -= product.saleOffPrice * product.quantity || product.originalPrice * product.quantity;
      toast.info(`${product.name} đã được xóa khỏi giỏ hàng`);
    },
  },
});

export const {
  addToCart,
  decreaseQuantityItem,
  increaseQuantityItem,
  removeItemFromCart,
} = cartSlice.actions;

export default cartSlice.reducer;
