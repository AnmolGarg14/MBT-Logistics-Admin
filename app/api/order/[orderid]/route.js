import Order from "@/models/order";
import { connectToDB } from "@/utils/database";

export const GET = async (request, { params }) => {
  //   const { orderid } = await request.json();
  //   console.log(params);

  try {
    await connectToDB();

    const order = await Order.findById(params.orderid);
    if (!order) return new Response("Order Not Found", { status: 404 });

    return new Response(JSON.stringify(order), { status: 200 });
  } catch (error) {
    return new Response("Internal Server Error", { status: 500 });
  }
};

export const PATCH = async (request, { params }) => {
  const {
    orderid,
    dateofbooking,
    originstation,
    deliverystation,
    noofpackages,
    chargedweight,
    status,
    deliverytype,
  } = await request.json();

  try {
    await connectToDB();

    // Find the existing prompt by ID
    const existingOrder = await Order.findById(params.orderid);

    if (!existingOrder) {
      return new Response("Order not found", { status: 404 });
    }

    // Update the prompt with new data
    existingOrder.orderid = orderid;
    existingOrder.dateofbooking = dateofbooking;
    existingOrder.originstation = originstation;
    existingOrder.deliverystation = deliverystation;
    existingOrder.noofpackages = noofpackages;
    existingOrder.chargedweight = chargedweight;
    existingOrder.status = status;
    existingOrder.deliverytype = deliverytype;

    await existingOrder.save();

    return new Response("Successfully updated the Order", { status: 200 });
  } catch (error) {
    return new Response("Error Updating Order", { status: 500 });
  }
};

export const DELETE = async (request, { params: { orderid } }) => {
  try {
    await connectToDB();

    // Find the prompt by ID and remove it
    await Order.findByIdAndRemove(orderid);

    return new Response("Order deleted successfully", { status: 200 });
  } catch (error) {
    return new Response("Error deleting order", { status: 500 });
  }
};
