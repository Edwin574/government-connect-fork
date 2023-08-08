import React from "react";
import { Box } from "@mui/material";
import { EmergencyData } from "../data/emergency";
import { columns } from "../data/emergency";
import { DataGrid } from "@mui/x-data-grid";

const Table = () => {
  return (
    <Box sx={{height:400,width:'100%'}}>
    <DataGrid
    rows={EmergencyData}
    columns={columns}
    initialState={{
        pagination:{
            paginationModel:{
                pageSize:5,
            }
        }
    }}
    pageSizeOptions={[5]}
    checkboxSelection
    disableRowSelectionOnClick
    />
    </Box>
  );
};

export default Table;
