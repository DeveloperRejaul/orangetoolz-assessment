import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL, BASE_URL_2 } from '../constants/constants';

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
        credentials: 'include',
    }),
    endpoints: () => ({}),
});



export const dummyApi = createApi({
    reducerPath: 'dummyApi',
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL_2,
        credentials: 'include',
    }),
    endpoints: () => ({}),
});
