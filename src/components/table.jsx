
import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

const Table = ({cols, data}) => {
  return (
    <Box sx={{height:400,width:'100%'}}>
    <DataGrid
    rows={data}
    columns={cols}
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