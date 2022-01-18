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
      query: ({ email, fullName, password, username }) => ({
        headers: { "Content-Type": "application/json" },
        body: {
          email,
          fullName,
          password,
          username,
        },
        method: "POST",
        url: "/signup",
      }),
    }),
  }),
});

export const authMiddleware = (...args: any[]): any => {
  console.log(args);
};
