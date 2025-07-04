import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

type Actions = {
    id: number;
    title: string;
    description: string;
    image: string;
    promocode: string;
    percent: number;
}[];
export const actionsApi = createApi({
    reducerPath: 'actionsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/' }),
    endpoints: (builder) => ({
        actionsAll: builder.query<Actions, string>({
            query: (name) => `${name}`,
        }),
        actionId: builder.query<Actions, string>({
            query: (id) => `actions/${id}`,
        }),
    }),
});

export const { useActionsAllQuery, useActionIdQuery } = actionsApi;
