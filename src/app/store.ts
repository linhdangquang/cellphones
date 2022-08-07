import { categoriesApi } from './../services/categories-api';
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { productsApi } from '../services/products-api';
import { RootState } from './root-reducer';
import { rootReducer } from './root-reducer';
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware, categoriesApi.middleware),
  devTools: process.env.NODE_ENV !== 'production',
});

export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
