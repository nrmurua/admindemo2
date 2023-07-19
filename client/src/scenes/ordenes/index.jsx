import React, { useState } from 'react';
import { DataGrid } from "@mui/x-data-grid";
import { useGetOrdenesQuery } from "state/api";
import Header from "components/Header";
import { useTheme } from '@emotion/react';
import { Box } from '@mui/system';
import DataGridCustomToolbar from "components/DataGridCustomToolbar"
import PopUpButton from 'components/PopUpButton';
import PopUpOrdenes from 'components/PopUpMovimientos';

export const Ordenes = () => {
    const theme = useTheme();
 
    const [page, setPage] = useState(0);
    const [pageSize, setPageSize] = useState(20);
    const [sort, setSort] = useState({});
    const [search, setSearch] = useState("");

    const[searchInput, setSearchInput] = useState("");

    const { data, isLoading } = useGetOrdenesQuery({
        page,
        pageSize,
        sort: JSON.stringify(sort),
        search, 
    });

    console.log('data', data);
    
    const columns = [
        {
            field: "_id",
            headerName: "ID Orden",
            flex: 1,
        },
        {
            field: "rut_cliente",
            headerName: "Cliente",
            flex: 1,
        },
        {
            field: "fecha_ingreso",
            headerName: "Fecha de Ingreso",
            flex: 1,
        },
        {
            field: "fecha_entrega",
            headerName: "Fecha de Entrega",
            flex: 1,
        },
        {
            field: "productos",
            headerName: "Cantidad de Productos",
            flex: 0.5,
            sortable: false,
            renderCell: (params) => params.value.length,
        },
        {
            field: "estado",
            headerName: "Estado de pedido",
            flex: 1,
        },
        {
            field: "valor",
            headerName: "Valor",
            flex: 1,
        },
    ];

  return (
    <Box m="1.5rem 2.5rem">
        <Header title="Ordenes" subtitle="Lista completa de pedidos/ordenes de compras" />
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
            <PopUpButton title="Agregar una nueva orden de compra">
                <PopUpOrdenes />
            </PopUpButton>
            <DataGrid 
                loading={isLoading || !data}
                getRow={(row) => row._id}
                rows={(data && data.ordenes) || []}
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
                    toolbar: {searchInput, setSearchInput, setSearch}
                }}
            />
        </Box>
    </Box>
  )
}

export default Ordenes;