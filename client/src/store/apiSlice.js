import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseUri ='http://localhost:8090'

export const apiSlice = createApi({
    baseQuery: fetchBaseQuery({baseUrl: baseUri}),
    endpoints: builder =>({
        //getCategories
        getCategories : builder.query({
            query: () => '/api/categories',
            providesTags:["categories"]
        }),
        // get labels
        getLabels: builder.query({
            query:()=> '/api/label',
            providesTags:["transaction"]
        }),

        // add Transaction
        addTransaction : builder.mutation({
            // initialise: 'http://localhost:8090/api/transaction'
            query : (initialTransaction)=>({
                url : '/api/transaction',
                method : "POST",
                body: initialTransaction
            }),
            invalidatesTags:["transaction"]
        }),

        // delete record
        deleteTransaction : builder.mutation({
            query : (recordId) => ({
                // delete: 'http://localhost:8090/api/transaction'
                url : '/api/transaction',
                method : "DELETE",
                body : recordId
            }),
            invalidatesTags:["transaction"]
        })
    })
})

export default apiSlice;