import { Schema, model, models } from "mongoose";

const OrderSchema = new Schema({
  orderid: {
    type: String,
    unique: [true, "Order already exists!"],
    required: [true, "Order ID id required"],
  },
  dateofbooking: {
    type: String,
    required: true,
  },
  originstation: {
    type: String,
    required: true,
  },
  deliverystation: {
    type: String,
    required: true,
  },
  noofpackages: {
    type: Number,
    required: true,
  },
  chargedweight: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  deliverytype: {
    type: String,
    required: true,
  },
});

const Order = models.Order || model("Order", OrderSchema);

export default Order;
