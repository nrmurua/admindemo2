import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
    reducerPath: "adminApi",
    tagTypes: ["User", "Movimientos", "Clientes", "Bodegas"],
    endpoints: (build) => ({
        getUser: build.query({
            query: (id) => `general/user/${id}`,
            providesTags: ["User"]
        }),
        getMovimientos: build.query({
            query: ({ page, pageSize, sort, search }) => ({
                url: "client/movimientos",
                method: "GET",
                params: { page, pageSize, sort, search },
            }),
            providesTags: ["Movimientos"],
        }),
        getClientes: build.query({
            query: ({ page, pageSize, sort, search }) => ({
                url: "client/clientes",
                method: "GET",
                params: { page, pageSize, sort, search },
            }),
            providesTags: ["Clientes"],
        }),
        getOrdenes: build.query({
            query: ({ page, pageSize, sort, search }) => ({
                url: "client/ordenes",
                method: "GET",
                params: { page, pageSize, sort, search },
            }),
            providesTags: ["Ordenes"],
        }),
        getBodegasByEmpresa: build.query({
            query: ( empresaId ) => ({
                url: "/client/bodegas",
                method: "GET",
                params: { empresaId },
            }),
            providesTags: ["Bodegas"],
        })
    }),
});

export const { 
    useGetUserQuery,
    useGetMovimientosQuery,
    useGetClientesQuery,
    useGetOrdenesQuery,
    useGetBodegasByEmpresaQuery,
} = api;