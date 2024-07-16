"use client";
import { useState } from "react";
import "./Products.scss";
import DataTable from "../../Components/DataTable/DataTable";
import Add from "../../Components/Add/Add";
import { GridColDef } from "@mui/x-data-grid";
import { products } from "../../data";
import Image from "next/image";
const columns: any[] = [
  { id: 1, field: "id", headerName: "ID", width: 90 },
  {
    id: 2,
    field: "img",
    headerName: "Image",
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
    field: "title",
    type: "string",
    headerName: "Title",
    width: 250,
  },
  {
    id: 4,
    field: "color",
    type: "string",
    headerName: "Color",
    width: 150,
  },
  {
    id: 5,
    field: "price",
    type: "string",
    headerName: "Price",
    width: 200,
  },
  {
    id: 6,
    field: "producer",
    headerName: "Producer",
    type: "string",
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
    field: "inStock",
    headerName: "In Stock",
    width: 150,
    type: "boolean",
  },
];

const Products = () => {
  const [open, setOpen] = useState(false);

  // console.log(products)

  return (
    <div className="products mx-4">
      <div className="info">
        <h1>Products</h1>
        <button className="btn btn-light p-2" onClick={() => setOpen(true)}>
          Add New Products
        </button>
      </div>
      <DataTable slug="products" columns={columns} rows={products} />
      {/* TEST THE API */}

      {/* {isLoading ? (
        "Loading..."
      ) : (
        <DataTable slug="products" columns={columns} rows={data} />
      )} */}
      {open && <Add slug="product" columns={columns} setOpen={setOpen} />}
    </div>
  );
};

export default Products;
