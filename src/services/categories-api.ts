import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const categoriesApi = createApi({
  reducerPath: 'categoriesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3001/',
  }),
  tagTypes: ['Category'],
  endpoints: (builder) => ({
    getCategories: builder.query<any[], void>({
      query: () => 'categories',
      providesTags: ['Category'],
    }),
    getCategory: builder.query<any, any>({
      query: (id) => `categories/${id}`,
    }),
    addCategory: builder.mutation<any, any>({
      query: (category) => ({
        url: 'categories',
        method: 'POST',
        body: category,
      }),
      invalidatesTags: ['Category'],
    }),
    updateCategory: builder.mutation<any, any>({
      query: ({ id, ...rest }) => ({
        url: `categories/${id}`,
        method: 'PUT',
        body: { ...rest },
      }),
      invalidatesTags: ['Category'],
    }),
    deleteCategory: builder.mutation<any, any>({
      query: (id) => ({
        url: `categories/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Category'],
    }),
  }),
});


export const {
  useGetCategoryQuery,
  useGetCategoriesQuery,
  useAddCategoryMutation,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation,
} = categoriesApi;