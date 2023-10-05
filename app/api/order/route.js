import Order from "@/models/order";
import { connectToDB } from "@/utils/database";

export const GET = async (request) => {
  try {
    await connectToDB();

    const order = await Order.find({});
    if (!order) return new Response("Orders Not Found", { status: 404 });

    return new Response(JSON.stringify(order), { status: 200 });
  } catch (error) {
    return new Response("Internal Server Error", { status: 500 });
  }
};
