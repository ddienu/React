import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWQyZTVmYjVhNzA1MDVmYTUyOWFjMWQiLCJlbWFpbCI6InJvY2tkYW5AaG90bWFpbC5jb20iLCJpYXQiOjE3MTA5Njk2MzN9.mJy3lBAbAgnDAC1VDjnlhidbtVYynKe80oeK1LK3mEM";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:9090",
    prepareHeaders: (headers) => {
      headers.set("Authorization", `Bearer ${token}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "/user",
      providesTags: ["Users"], //=> Función que se ejecuta al hacer un llamado en conjunto con el invalidate
      transformResponse: (response) =>
        response.sort((a, b) =>
          a.name[0].toUpperCase() < b.name[0].toUpperCase()
            ? -1
            : a.name[0].toUpperCase() > b.name[0].toUpperCase()
            ? 1
            : 0
        ), //=> Transforma y reordena
    }),
    getUserById : builder.query({
      query: (_id) => "/user/" + _id,
      providesTags: ["User"],
    }),
    createUser: builder.mutation({
      query: (newUser) => ({
        url: "/user",
        method: "POST",
        body: newUser,
      }),
      invalidatesTags: ["Users"],
    }),
    updateUser : builder.mutation({
      query:( user) => ({
        url : `/user/${user._id}`,
        method: 'PUT',
        body: user
      }),
      invalidatesTags: ['Users', 'User']
    }),
    removeUser : builder.mutation({
      query: (_id) => ({
        url: `/user/${_id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Users']
    })
  }),
});

export const { useGetUsersQuery, 
               useGetUserByIdQuery, 
               useCreateUserMutation, 
               useUpdateUserMutation, 
               useRemoveUserMutation } = apiSlice;
