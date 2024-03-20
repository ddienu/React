import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWQyZTVmYjVhNzA1MDVmYTUyOWFjMWQiLCJlbWFpbCI6InJvY2tkYW5AaG90bWFpbC5jb20iLCJpYXQiOjE3MTA5MTg3MTAsImV4cCI6MTcxMDkyMjMxMH0.OCZW-GH2A-wmDiOm6Mj2zCdkUzIMOBK-LWmUqIzbvOE";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ 
    baseUrl: "http://localhost:9090",
    prepareHeaders: (headers) => {
        headers.set('Authorization', `Bearer ${token}`);
        return headers;
      },
 }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "/user",
      providesTags: ["Users"], //=> Función que se ejecuta al hacer un llamado en conjunto con el invalidat
      transformResponse: response => response.sort((a, b) => b._id - a._id), //=> Transforma y reordena
    }),
    createUser: builder.mutation({
      query: (newUser) => ({
        url: '/user',
        method: "POST",
        body: newUser,
      }),
    }),
  }),
});

export const { useGetUsersQuery, useCreateUserMutation } = apiSlice;
