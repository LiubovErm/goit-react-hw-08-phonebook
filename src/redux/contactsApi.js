import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const contactsApi = createApi({
    reducerPath: 'contactsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://6381eda99842ca8d3c9cdf3e.mockapi.io',
    }),
    tagTypes: ['contacts'],
    endpoints: builder => ({
        getContacts: builder.query({
            query: () => '/contacts',
            providesTags: ['contacts'],
        }),

        addContact: builder.mutation({
            query: values => ({
                url: '/contacts',
                method: 'POST',
                body: values,
            }),
            invalidatesTags: ['contacts'],
        }),

        deleteContact: builder.mutation({
            query: contactId => ({
                url: `/contacts/${contactId}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['contacts'],
        }),

        updateContact: builder.mutation({
            query: ({ id, ...contact }) => ({
                url: `/contacts/${id}`,
                method: 'PUT',
                body: contact,
            }),
            invalidatesTags: ['contacts'],
        }),

        getContactById: builder.query({
            query: id => ({
               url: `/contacts/${id}`,
               method: 'GET',
            }),
            providesTags: ['Contacts'],
    }),
    }),
})

export const {
    useGetContactsQuery,
    useAddContactMutation,
    useDeleteContactMutation,
    useGetContactByIdQuery,
    useUpdateContactMutation,
} = contactsApi;