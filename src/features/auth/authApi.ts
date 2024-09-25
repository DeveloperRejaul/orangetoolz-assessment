import {  dummyApi } from '../../core/rtk/api';

export const authApi = dummyApi.injectEndpoints({
    overrideExisting: true,
    endpoints: (builder) => ({
        // handle login request
        login: builder.mutation({
            query: (data) =>{
                return {
                    headers: { 'Content-Type': 'application/json' },
                    url: 'auth/login',
                    method: 'POST',
                    body : JSON.stringify(data),
                };
            },
        }),
    }),
});

export const {
    useLoginMutation,
} = authApi;
