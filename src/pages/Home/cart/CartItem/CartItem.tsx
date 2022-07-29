import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import React from 'react';
import { useAppDispatch } from '../../../../app/hooks';
import {
  CartItem,
  decreaseQuantityItem,
  increaseQuantityItem,
  removeItemFromCart,
} from '../../../../features/cart/cartSlice';
import { formatVND } from '../../../../utils/formatVND';
import {
  Container,
  HandleButton,
  InputContainer,
  ItemImage,
  ItemInfo,
  ItemPrice,
  ItemPriceRegular,
  ItemPriceSale,
  ItemTitle,
  QuantityNumber,
  RemoveButton,
  RemoveIcon,
  TitleContainer,
} from './cart-item.styles';

type Props = {
  product: CartItem;
};

const CartItemContainer = ({ product }: Props) => {
  const dispatch = useAppDispatch();

  const removeItem = () => {
    dispatch(removeItemFromCart(product));
  };

  const decreaseQuantity = () => {
    dispatch(decreaseQuantityItem(product));
  }
  const increaseQuantity = () => {
    dispatch(increaseQuantityItem(product));
  }
  return (
    <>
      <Container>
        <ItemImage>
          <img src={product.image} alt={product.name} />
        </ItemImage>
        <ItemInfo>
          <TitleContainer>
            <ItemTitle>{product.name}</ItemTitle>
            <RemoveButton onClick={removeItem}>
              <RemoveIcon />
            </RemoveButton>
          </TitleContainer>
          <ItemPrice>
            <ItemPriceSale>{formatVND(product.saleOffPrice)}</ItemPriceSale>
            <ItemPriceRegular>
              {formatVND(product.originalPrice)}
            </ItemPriceRegular>
          </ItemPrice>
          <div style={{ display: 'flex', gap: '5px' }}>
            <div style={{  display: 'flex', alignItems: 'center' }}>Chọn số lượng:</div>
            <InputContainer>
              <HandleButton onClick={decreaseQuantity}>
                <MinusOutlined  style={{fontSize: '14px'}}/>
              </HandleButton>
              <QuantityNumber>
                {product.quantity}
              </QuantityNumber>
              <HandleButton onClick={increaseQuantity}>
                <PlusOutlined  style={{fontSize: '14px'}}/>
              </HandleButton>
            </InputContainer>
          </div>
        </ItemInfo>
      </Container>
    </>
  );
};

export default CartItemContainer;
