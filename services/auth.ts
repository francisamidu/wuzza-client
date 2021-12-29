import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { User } from "../types";

export const authApi = createApi({
  reducerPath: "auth",
  baseQuery: fetchBaseQuery({
    baseUrl: `http://localhost:5000/auth`,
  }),
  endpoints: (builder) => ({
    login: builder.mutation<Partial<User>, any>({
      query: ({ username, password }) => ({
        headers: { "Content-Type": "application/json" },
        body: {
          username,
          password,
        },
        method: "POST",
        url: "/login",
      }),
    }),
    logout: builder.mutation<Partial<User>, any>({
      query: ({ accessToken, refreshToken }) => ({
        headers: { "Content-Type": "application/json" },
        body: {
          accessToken,
          refreshToken,
        },
        method: "POST",
        url: "/logout",
      }),
    }),
    signup: builder.mutation<Partial<User>, any>({
      query: ({ email, password }) => ({
        headers: { "Content-Type": "application/json" },
        body: {
          email,
          password,
        },
        method: "POST",
        url: "/signup",
      }),
    }),
  }),
});

export const { useLoginMutation, useLogoutMutation, useSignupMutation } =
  authApi;
