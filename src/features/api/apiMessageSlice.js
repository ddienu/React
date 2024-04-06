import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiMessageSlice = createApi({
    reducerPath: "apiMensaje",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://restapinodejs.vercel.app"
    }),
    endpoints: (builder) => ({
        getMessages: builder.query({
            query: () => "/message"
        }),
        createMessage : builder.mutation({
            query: (newMessage) => ({
                url: "/message",
                method: "POST",
                body: newMessage
            })
        })
    })
})

export const { useGetMessagesQuery, useCreateMessageMutation} = apiMessageSlice;