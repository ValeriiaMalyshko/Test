import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://6438214ec1565cdd4d66f128.mockapi.io/",
  }),
  tagTypes: ["userApi"],
  endpoints: (builder) => ({
    fetchUsers: builder.query({
      query: () => `/users`,
      providesTags: ["userApi"],
    }),
    updateUser: builder.mutation({
      query: ({ id, followers }) => ({
        url: `/users/${id}`,
        method: "PUT",
        body: {
          followers,
        },
      }),
      invalidatesTags: ["userApi"],
    }),
  }),
});

export const { useFetchUsersQuery, useUpdateUserMutation } = userApi;
