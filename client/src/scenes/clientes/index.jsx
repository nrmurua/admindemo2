import React, { useState } from 'react';
import { DataGrid } from "@mui/x-data-grid";
import { useGetClientesQuery } from "state/api";
import Header from "components/Header";
import PopUpClient from "components/PopUpClient";
import PopUpButton from "components/PopUpButton";
import { useTheme } from '@emotion/react';
import { Box } from '@mui/system';
import DataGridCustomToolbar from "components/DataGridCustomToolbar"

export const Cliente = () => {
    const theme = useTheme();
 
    const [page, setPage] = useState(0);
    const [pageSize, setPageSize] = useState(20);
    const [sort, setSort] = useState({});
    const [search, setSearch] = useState("");

    const[searchInput, setSearchInput] = useState("");

    const { data, isLoading } = useGetClientesQuery({
        page,
        pageSize,
        sort: JSON.stringify(sort),
        search, 
    });

    console.log('data', data);
    
    const columns = [
        {
            field: "rut",
            headerName: "Rut",
            flex: 1,
        },
        {
            field: "nombre",
            headerName: "Nombre",
            flex: 1,
        },
        {
            field: "correo",
            headerName: "Correo",
            flex: 1,
        },
        {
            field: "telefono",
            headerName: "Telefono ",
            flex: 1,
        },
        {
            field: "direccion",
            headerName: "Direccion",
            flex: 1,
        },
        {
            field: "pedidos",
            headerName: "Total pedidos",
            flex: 0.5,
            sortable: false,
            renderCell: (params) => params.value.length,
        },
    ];

  return (
    <Box m="1.5rem 2.5rem">
        <Header title="CLIENTES" subtitle="Lista completa de Clientes asociados" />
        <Box height="80vh"
            sx={{
                "& .MuiDataGrid-root": {
                    border: "none",
                },
                "& .MuiDataGrid-cell": {
                    borderBottom: "none",
                },
                "& .MuiDataGrid-columnHeaders": {
                    backgroundColor: theme.palette.background.alt,
                    color: theme.palette.secondary[100],
                    borderBottom: "none",
                },
                "& .MuiDataGrid-virtualScroller": {
                    backgroundColor: theme.palette.primary.light,
                },
                "& .MuiDataGrid-footerContainer": {
                    backgroundColor: theme.palette.background.alt,
                    color:theme.palette.secondary[100],
                    borderTop: "none",
                },
                "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                    color: `${theme.palette.secondary[200]} !important`,
                },
            }}
        >
            <PopUpButton title="Agregar nuevo cliente">
                <PopUpClient />
            </PopUpButton>

            <DataGrid 
                loading={isLoading || !data}
                getRow={(row) => row._id}
                rows={(data && data.clientes) || []}
                columns={columns}
                rowCount={(data && data.total) || 0}
                rowsPerPageOptions={[20, 50, 100]}
                getRowId={(row) => row._id}
                pagination
                page={page}
                pageSize={pageSize}
                paginationMode="server"
                sortingMode="server"
                onPaginationModelChange={(newPage) => setPage(newPage)}
                onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                onSortModelChange={(newSortModel) => setSort(...newSortModel)}
                components={{ Toolbar: DataGridCustomToolbar }}
                componentsProps={{
                    toolbar: {searchInput, setSearchInput ,setSearch},
                }}
            />
        </Box>
    </Box>
  )
}

export default Cliente;