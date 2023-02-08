import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IContact } from "../models/IContact";

export const contactApi = createApi({
  reducerPath: "contactApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://r-contact-backend.onrender.com/api",
  }),
  tagTypes: ["Contact"],
  endpoints: (build) => ({
    fetchAllContacts: build.query<IContact[], number>({
      query: (limit: number = 5) => ({
        url: `/users`,
        params: {
          _limit: limit,
        }
      }),
      providesTags: (result) => ["Contact"],
    }),
    createContact: build.mutation<IContact, IContact>({
      query: (post) => ({
        url: `/users`,
        method: "POST",
        body: post,
      }),
      invalidatesTags: ["Contact"],
    }),
    updateContact: build.mutation<IContact, IContact>({
      query: (post) => ({
        url: `/users/${post._id}`,
        method: "PUT",
        body: post,
      }),
      invalidatesTags: ["Contact"],
    }),
    deleteContact: build.mutation<IContact, IContact>({
      query: (post) => ({
        url: `/users/${post._id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Contact"],
    }),
  }),
});
