import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

type Product = {
    id: number;
    name: string;
    category: string;
    description: string;
    image: string;
    price: number;
    count: number;
}[];
export const productApi = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/' }),
    tagTypes: ['Product'],
    endpoints: (builder) => ({
        getProduct: builder.query<Product, string>({
            query: (name) => `${name}`,
        }),
    }),
});

export const { useGetProductQuery } = productApi;
