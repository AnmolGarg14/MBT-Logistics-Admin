"use client";

import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function OrderDataTable() {
  const [allOrders, setAllOrders] = useState([]);

  const fetchOrders = async () => {
    const response = await fetch("/api/order");
    const data = await response.json();
    setAllOrders(data);
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const handleDelete = async (_id) => {
    const hasConfirmed = confirm(
      "Are you sure you want to delete this consignment?"
    );

    if (hasConfirmed) {
      try {
        await fetch(`/api/order/${_id.toString()}`, {
          method: "DELETE",
        });

        const filteredOrders = allOrders.filter((item) => item._id !== _id);

        setAllOrders(filteredOrders);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const actionColumn = {
    field: "action",
    headerName: "Action",
    width: 100,
    renderCell: (params) => {
      return (
        <div className="flex gap-4">
          <Link
            href={`/update-order?id=${params.row._id}`}
            className="cursor-pointer"
          >
            <Image src="/view.svg" width={20} height={20} alt="actionicon" />
          </Link>
          <div
            className="cursor-pointer"
            onClick={() => handleDelete(params.row._id)}
          >
            <Image src="/delete.svg" width={20} height={20} alt="actionicon" />
          </div>
        </div>
      );
    },
  };

  const columns = [
    { field: "orderid", headerName: "LR Number", width: 130 },
    { field: "status", headerName: "Status", width: 130 },
    { field: "dateofbooking", headerName: "Date of Booking", width: 160 },
    { field: "originstation", headerName: "From", width: 160 },
    { field: "deliverystation", headerName: "To", width: 160 },
    { field: "noofpackages", headerName: "No. of Packages", width: 180 },
    { field: "chargedweight", headerName: "Chg. Weight", width: 150 },
    { field: "deliverytype", headerName: "Delivery Type", width: 160 },
  ];

  return (
    <div>
      <DataGrid
        rows={allOrders}
        columns={[...columns, actionColumn]}
        getRowId={(row) => row.orderid}
        className="bg-white p-5"
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
        pageSizeOptions={[10]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableDensitySelector
        disableColumnSelector
      />
    </div>
  );
}
