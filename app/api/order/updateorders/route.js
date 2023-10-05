import fs from "fs";
import csv from "csv-parser";
import Order from "@/models/order";
import { connectToDB } from "@/utils/database";

export const POST = async (req) => {
  try {
    await connectToDB();

    const results = [];
    fs.createReadStream("public/orders.csv")
      .pipe(csv())
      .on("data", (row) => {
        results.push(row);
      })
      .on("end", async () => {
        const operations = results.map((row) => ({
          updateOne: {
            filter: { orderid: row.orderid },
            update: { $set: row },
            upsert: true,
          },
        }));

        if (operations.length > 0) {
          await Order.bulkWrite(operations);
          console.log("CSV data imported and order details updated.");
        } else {
          console.log("No data to import.");
        }
      });
    return Response.json(
      { message: "CSV data imported and order details updated." },
      { status: 200 }
    );
  } catch (error) {
    return Response.json({ message: "Internal Server Error" }, { status: 500 });
  }
};
