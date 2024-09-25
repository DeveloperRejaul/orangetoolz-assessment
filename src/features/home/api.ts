import { api } from './../../core/rtk/api';

export const homeApi = api.injectEndpoints({
    overrideExisting: true,
    endpoints: (builder) => ({
        getUsers: builder.query({
            query: () => 'users',
        }),
        deleteUser: builder.mutation({
            query: (id) => {
                return {
                    url:'users/' + id,
                    method: 'DELETE',
                };
            },
            async onQueryStarted(id, { dispatch, queryFulfilled }) {
                let cacheData;
                try {
                  await queryFulfilled;

                  cacheData = dispatch(
                    homeApi.util.updateQueryData('getUsers', {}, (draft) => {
                      return  draft.filter((d) => d.id !== id);
                    })
                  );
                } catch (error) {
                  cacheData?.undo();
                  console.log(error);
                }
              },
        }),
    }),
});

export const {
    useGetUsersQuery,
    useDeleteUserMutation,
} = homeApi;
