import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiHouseSlice = createApi({
  reducerPath: "houseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://restapinodejs.vercel.app",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getHouses: builder.query({
      query: () => "/house",
      providesTags: ["Houses"], //=> Función que se ejecuta al hacer un llamado en conjunto con el invalidate
      // transformResponse: (response) =>
      //   response.sort((a, b) =>
      //     a.name[0].toUpperCase() < b.name[0].toUpperCase()
      //       ? -1
      //       : a.name[0].toUpperCase() > b.name[0].toUpperCase()
      //       ? 1
      //       : 0
      //   ),
    }),
    getHouseById: builder.query({
      query: (_id) => "/house/" + _id,
      providesTags: ["House"],
    }),
    createHouse: builder.mutation({
      query: (newHouse) => ({
        url: "/house",
        method: "POST",
        body: newHouse,
      }),
      invalidatesTags: ["Houses"],
    }),
    updateHouse: builder.mutation({
      query: (house) => ({
        url: `/house/${house._id}`,
        method: "PUT",
        body: house,
      }),
      invalidatesTags: ["Houses", "House"],
    }),
    removeUser: builder.mutation({
      query: (_id) => ({
        url: `/house/${_id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Houses"],
    }),
  }),
});

export const {
    useGetHousesQuery,
    useGetHouseByIdQuery,
    useCreateHouseMutation,
    useUpdateHouseMutation,
    useRemoveHouseMutation,
  } = apiHouseSlice;
