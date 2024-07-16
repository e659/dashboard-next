"use client";
import { GridColDef } from "@mui/x-data-grid";
import DataTable from "../../Components/DataTable/DataTable";
import "./Users.scss";
import { useState } from "react";
import Add from "../../Components/Add/Add";
import { userRows } from "../../data";
import Image from "next/image";
// import { useQuery } from "@tanstack/react-query";

const columns: any[] = [
  { id: 1, field: "id", headerName: "ID", width: 90 },
  {
    id: 2,
    field: "img",
    headerName: "Avatar",
    width: 100,
    renderCell: (params: any) => {
      return (
        <Image
          className="mx-2"
          src={params.row.img || "/noavatar.png"}
          alt="View"
          width={50}
          height={50}
        />
      );
    },
  },
  {
    id: 3,
    field: "firstName",
    type: "string",
    headerName: "First name",
    width: 150,
  },
  {
    id: 4,
    field: "lastName",
    type: "string",
    headerName: "Last name",
    width: 150,
  },
  {
    id: 5,
    field: "email",
    type: "string",
    headerName: "Email",
    width: 200,
  },
  {
    id: 6,
    field: "phone",
    type: "string",
    headerName: "Phone",
    width: 200,
  },
  {
    id: 7,
    field: "createdAt",
    headerName: "Created At",
    width: 200,
    type: "string",
  },
  {
    id: 8,
    field: "verified",
    headerName: "Verified",
    width: 150,
    type: "boolean",
  },
];

const Users = () => {
  const [open, setOpen] = useState(false);

  // TEST THE API

  // const { isLoading, data } = useQuery({
  //   queryKey: ["allusers"],
  //   queryFn: () =>
  //     fetch("http://localhost:8800/api/users").then(
  //       (res) => res.json()
  //     ),
  // });

  return (
    <div className="users mx-4">
      <div className="info">
        <h1>Users</h1>
        <button className="btn btn-light" onClick={() => setOpen(true)}>
          Add New User
        </button>
      </div>
      <DataTable slug="users" columns={columns} rows={userRows} />
      {/* TEST THE API */}

      {/* {isLoading ? (
        "Loading..."
      ) : (
        <DataTable slug="users" columns={columns} rows={data} />
      )} */}
      {open && <Add slug="user" columns={columns} setOpen={setOpen} />}
    </div>
  );
};

export default Users;
