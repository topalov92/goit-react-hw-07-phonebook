import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const contactsApi = createApi({
  reducerPath: 'contacts',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://6246a261739ac8459190cad1.mockapi.io' }),
    tagTypes: ['Contact'],
    endpoints: (builder) => ({
    getContact: builder.query({
        query: () => `/contacts`,
        providesTags:['Contact']
    }),
    addContact: builder.mutation({
        query: (newContact) => ({
            url: `/contacts`,
            method: "POST",
            body: newContact,
        }),
        invalidatesTags: ['Contact'],
    }),
    deleteContact: builder.mutation({
        query: (id) => ({
            url: `/contacts/${id}`,
            method: "DELETE",            
        }),
        invalidatesTags:['Contact']
    }),
  }),
})

export const { useGetContactQuery, useAddContactMutation, useDeleteContactMutation } = contactsApi