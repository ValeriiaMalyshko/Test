import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://6438214ec1565cdd4d66f128.mockapi.io/",
  }),
  tagTypes: ["Users"],
  endpoints: (builder) => ({
    fetchUsers: builder.query({
      query: () => `/users`,
      providesTags: ["Users"],
    }),
    updateUser: builder.mutation({
      query: ({ id, follow, followers }) => ({
        url: `/users/${id}`,
        method: "PUT",
        body: {
          follow: follow,
          followers,
        },
      }),
      invalidatesTags: ["Users"],
    }),
  }),
});

export const { useFetchUsersQuery, useUpdateUserMutation } = userApi;