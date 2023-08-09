
import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

const Table = ({cols, data}) => {
  return (
    <Box sx={{height:500,}}>
    <DataGrid
    rows={data}
    columns={cols}
    initialState={{
        pagination:{
            paginationModel:{
                pageSize:10,
            }
        }
    }}
    pageSizeOptions={[5]}
    checkboxSelection
    disableRowSelectionOnClick
    autoHeight
    />
    </Box>
  );
};

export default Table;