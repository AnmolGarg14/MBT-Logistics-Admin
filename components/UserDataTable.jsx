"use client";

import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function UserDataTable() {
  const [allUsers, setAllUsers] = useState([]);

  const handleDelete = async (_id) => {
    const hasConfirmed = confirm("Are you sure you want to delete this User?");

    if (hasConfirmed) {
      try {
        await fetch(`/api/user/${_id.toString()}`, {
          method: "DELETE",
        });

        const filteredUsers = allUsers.filter((item) => item._id !== _id);

        setAllUsers(filteredUsers);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const actionColumn = {
    field: "action",
    headerName: "Action",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="flex gap-4">
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

  const fetchUsers = async () => {
    const response = await fetch("/api/user");
    const data = await response.json();
    setAllUsers(data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const columns = [
    { field: "_id", headerName: "ID", width: 250 },
    {
      field: "image",
      headerName: "Avatar",
      width: 100,
      renderCell: (params) => {
        return (
          <Image
            src={params.row.image}
            width={30}
            height={30}
            alt="avatar"
            className="rounded-full items-center"
          />
        );
      },
    },
    { field: "username", headerName: "Username", width: 160 },
    { field: "email", headerName: "Email", width: 300 },
  ];

  return (
    <div>
      <DataGrid
        rows={allUsers}
        columns={[...columns, actionColumn]}
        getRowId={(row) => row.email}
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
