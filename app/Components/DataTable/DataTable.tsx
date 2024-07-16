import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import "./datatable.scss";
import Link from "next/link";
import Image from "next/image";
import deleteIcon from "../../../public/assets/delete.svg";
import viewIcon from "../../../public/assets/view.svg";
type Props = {
  columns: GridColDef[];
  rows: object[];
  slug: string;
};

const DataTable = (props: Props) => {
  // const handleDelete = (id: any) => {
 
 
  // };

  const actionColumn: GridColDef = {
    field: "action",
    headerName: "Action",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="action">
          <Link href={`/${props.slug}/${params.row.id}`}>
            <Image
              className="mx-2"
              src={viewIcon}
              alt="View"
              width={50}
              height={50}
            />
          </Link>
          <div className="delete" >
            <Image
              className="mx-2"
              src={deleteIcon}
              alt="delete"
              width={50}
              height={50}
            />
          </div>
        </div>
      );
    },
  };

  return (
    <div className="dataTable">
      <DataGrid
        className="dataGrid"
        rows={props.rows}
        columns={[...props.columns, actionColumn]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableDensitySelector
        disableColumnSelector
      />
    </div>
  );
};

export default DataTable;
