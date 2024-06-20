"use client";
import React from "react";
import { useRouter } from "next/navigation";
const OrderProduct = () => {
  const router = useRouter();
  const handleClick = () => {
    console.log("Order placed successfully");
    router.push("/");
  };
  return (
    <>
      <h1>Order Product</h1>
      <button
        className="px-4 py-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mb-5 mt-2 ml-3"
        onClick={handleClick}
      >
        Place order
      </button>
    </>
  );
};

export default OrderProduct;
