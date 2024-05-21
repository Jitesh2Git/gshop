"use client";

import { useStateContext } from "@/context/StateContext";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoClose } from "react-icons/io5";

const Cart = () => {
  const { setToggleCart, cartItems, totalPrice, onRemove } = useStateContext();

  return (
    <div
      className="flex flex-col fixed h-[100%] bg-bgcol right-0 top-0
    w-[600px] z-[999] shadow-md shadow-[#cbd5e1] max-md:w-full
    overflow-hidden"
    >
      <ul
        className="flex justify-between items-center mb-3
      p-8 border-2 border-x-0 border-t-0 border-red/20 max-sm:px-5 
      max-sm:py-4"
      >
        <li className="text-xl font-bold">Shopping Cart</li>
        <li
          className="cursor-pointer p-2 text-xl rounded-3xl hover:text-red
         hover:bg-[#e2e8f0]"
        >
          <IoClose onClick={() => setToggleCart(false)} />
        </li>
      </ul>
      {cartItems.length < 1 && (
        <>
          <div className="p-2 h-[65%] text-center font-bold">
            <p>Your Cart Is Empty</p>
          </div>
          <div
            className="flex flex-col border-2 border-x-0
        border-b-0 border-red/20 w-full pb-5"
          >
            <ul
              className="flex justify-between items-center
        p-7 text-3xl"
            >
              <li className="text-[#64748b]">SubTotal:</li>
              <li className="text-red">$0.00</li>
            </ul>
            <button
              className="px-10 border-2 py-4 mx-auto rounded-xl
        hover:text-red cursor-not-allowed"
            >
              Checkout
            </button>
          </div>
        </>
      )}
      {cartItems.length >= 1 && (
        <div
          className="overflow-y-scroll scrollbar-w-2 m-2 h-[65%]
          scrollbar scrollbar-thumb-red hover:scrollbar-thumb-[#9f9f9f]"
        >
          {cartItems?.map((item) => (
            <div
              key={item._id}
              className="mx-3 border border-b-red rounded-t-xl 
              flex items-center gap-5 p-3 hover:bg-[#e4e4e4] 
              border-x-0 border-t-0 relative"
            >
              <Link href={`/game/${item.slug.current}`}>
                <Image
                  src={urlForImage(item?.image)}
                  alt="cart game img"
                  width={264}
                  height={352}
                  className="w-[120px] h-[130px] rounded-xl object-cover 
                  hover:outline outline-2 outline-[#000] max-sm:max-w-[100px]"
                />
              </Link>
              <div className="flex flex-col gap-2 max-sm:text-wrap">
                <h1 className="text-lg font-bold max-sm:text-[16px]">
                  {item.name}
                </h1>
                <p className="text-lg text-red max-sm:text-sm">
                  Price: ${item.price}
                </p>
                <p className="text-lg max-sm:text-sm">
                  Quantity: {item.quantity}
                </p>
              </div>
              <p
                className="absolute right-3 bottom-2 cursor-pointer
              text-[#ff6b6b] underline underline-offset-2 
              hover:text-red italic max-sm:text-sm"
                onClick={() => onRemove(item)}
              >
                remove
              </p>
            </div>
          ))}
        </div>
      )}
      {cartItems.length >= 1 && (
        <div
          className="flex flex-col border-2 border-x-0
        border-b-0 border-red/20 w-full pb-5"
        >
          <ul
            className="flex justify-between items-center
        p-7 text-3xl max-sm:p-5"
          >
            <li className="text-[#64748b] max-sm:text-[25px]">SubTotal:</li>
            <li className="text-red max-sm:text-[25px]">${totalPrice}</li>
          </ul>
          <button
            className="px-10 border-2 py-4 mx-auto rounded-xl
        hover:text-red cursor-not-allowed"
          >
            Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
