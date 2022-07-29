import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IProduct } from '../types/product';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3001/',
  }),
  tagTypes: ['Product'],
  endpoints: (builder) => ({
    getProducts: builder.query<any[], void>({
      query: () => 'products',
      providesTags: ['Product'],
    }),
    getProduct: builder.query<IProduct, any>({
      query: (id) => `products/${id}`,
      providesTags: ['Product'],
    }),
    addProduct: builder.mutation<any, any>({
      query: (product) => ({
        url: 'products',
        method: 'POST',
        body: { ...product, status: true },
      }),
      invalidatesTags: ['Product'],
    }),
    updateProduct: builder.mutation<any, any>({
      query: ({ id, ...rest }) => ({
        url: `products/${id}`,
        method: 'PUT',
        body: { ...rest, status: true },
      }),
      invalidatesTags: ['Product'],
    }),
    deleteProduct: builder.mutation<any, any>({
      query: (id) => ({
        url: `products/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Product'],
    }),
    changeStatusProduct: builder.mutation<any, any>({
      query: (data) => ({
        url: `products/${data.id}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['Product'],
    }),
  }),
});

export const {
  useGetProductQuery,
  useGetProductsQuery,
  useAddProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
  useChangeStatusProductMutation,
} = productsApi;
