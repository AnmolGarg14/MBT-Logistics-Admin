"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import Form from "@/components/Form";

const UpdateOrder = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const orderId = searchParams.get("id");

  const [order, setOrder] = useState({
    orderid: "",
    dateofbooking: "",
    originstation: "",
    deliverystation: "",
    noofpackages: "",
    chargedweight: "",
    status: "",
    deliverytype: "",
  });
  const [submitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const getOrderDetails = async () => {
      const response = await fetch(`/api/order/${orderId}`);
      const data = await response.json();

      setOrder({
        orderid: data.orderid,
        dateofbooking: data.dateofbooking,
        originstation: data.originstation,
        deliverystation: data.deliverystation,
        noofpackages: data.noofpackages,
        chargedweight: data.chargedweight,
        status: data.status,
        deliverytype: data.deliverytype,
      });
    };

    if (orderId) getOrderDetails();
  }, [orderId]);

  const updateOrder = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!orderId) return alert("Missing OrderId!");

    try {
      const response = await fetch(`/api/order/${orderId}`, {
        method: "PATCH",
        body: JSON.stringify({
          orderid: order.orderid,
          dateofbooking: order.dateofbooking,
          originstation: order.originstation,
          deliverystation: order.deliverystation,
          noofpackages: order.noofpackages,
          chargedweight: order.chargedweight,
          status: order.status,
          deliverytype: order.deliverytype,
        }),
      });

      if (response.ok) {
        router.push("/orders");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form
      order={order}
      setOrder={setOrder}
      submitting={submitting}
      handleSubmit={updateOrder}
    />
  );
};

export default UpdateOrder;
