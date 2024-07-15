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
    <div className="cart">
      <ul className="cart_header">
        <li className="section_nav_headings">Shopping Cart</li>
        <li className="section_close">
          <IoClose onClick={() => setToggleCart(false)} />
        </li>
      </ul>
      {cartItems.length < 1 ? (
        <>
          <div className="cart_empty_message">
            <p>Your Cart Is Empty</p>
          </div>
          <div className="cart_empty_container">
            <ul className="cart_item_price_container">
              <li className="cart_subtotal">SubTotal:</li>
              <li className="text-red">$0.00</li>
            </ul>
            <button className="cart_checkout">Checkout</button>
          </div>
        </>
      ) : (
        <>
          <div className="cart_items_conatiner">
            {cartItems?.map((item) => (
              <div key={item._id} className="cart_items_wrapper">
                <Link href={`/game/${item.slug.current}`}>
                  <Image
                    src={urlForImage(item?.image)}
                    alt="cart game img"
                    width={264}
                    height={352}
                    className="cart_item_image"
                  />
                </Link>
                <div className="cart_item_wrapper">
                  <h1 className="cart_item_name">{item.name}</h1>
                  <p className="cart_item_price">Price: ${item.price}</p>
                  <p className="cart_item_quantity">
                    Quantity: {item.quantity}
                  </p>
                </div>
                <p className="cart_item_remove" onClick={() => onRemove(item)}>
                  remove
                </p>
              </div>
            ))}
          </div>
          <div className="cart_footer">
            <ul className="cart_item_price_container max-sm:p-5">
              <li className="cart_subtotal max-sm:text-[25px]">SubTotal:</li>
              <li className="text-red max-sm:text-[25px]">${totalPrice}</li>
            </ul>
            <button className="cart_checkout">Checkout</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
