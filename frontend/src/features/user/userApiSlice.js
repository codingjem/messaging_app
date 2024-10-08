import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const baseUrl = import.meta.env.VITE_BASE_URL;

export const userApiSlice = createApi({
    reducerPath: "user",
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
    endpoints: (builder) => ({
        createUser: builder.mutation({
            query: (newUser) => ({
                url: "/user/createUser",
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: newUser,
            }),
        }),
        loginUser: builder.mutation(({ email, password }) => ({
            url: "user/loginUser/",
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: { email, password },
        })),
    }),
});

export const { useCreateUserMutation, useLoginUserMutation } = userApiSlice;
