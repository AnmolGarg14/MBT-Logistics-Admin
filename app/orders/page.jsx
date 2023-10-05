"use client";

import { useState } from "react";
import OrderDataTable from "@/components/OrderDataTable";
import { useRouter } from "next/navigation";

const Orders = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a CSV file to upload.");
      return;
    }

    const formData = new FormData();
    formData.append("csvFile", file);

    try {
      const response = await fetch("/api/order/updateorders", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
      } else {
        console.error("Error uploading CSV:", response.statusText);
      }
    } catch (error) {
      console.error("Error uploading CSV:", error);
    }
  };

  return (
    <section className="pt-2">
      <div className="flex flex-col">
        <div className="flex pb-8">
          <div className="font-bold text-3xl">Orders</div>
          <div className="flex items-center pl-8">
            <input type="file" accept=".csv" onChange={handleFileChange} />
            <button
              onClick={handleUpload}
              className="text-xs -ml-5 bg-soft-color text-black hover:bg-gray-100 rounded-md items-center p-2 border border-black"
            >
              Import Orders
            </button>
          </div>
        </div>
        <div>
          <OrderDataTable />
        </div>
      </div>
    </section>
  );
};

export default Orders;
