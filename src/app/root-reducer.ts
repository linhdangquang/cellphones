import { combineReducers } from '@reduxjs/toolkit';
import cartReducer from '../features/cart/cartSlice';
import { categoriesApi } from '../services/categories-api';
import { productsApi } from '../services/products-api';

export const rootReducer = combineReducers({
  [productsApi.reducerPath]: productsApi.reducer,
  [categoriesApi.reducerPath]: categoriesApi.reducer,
  cart: cartReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
