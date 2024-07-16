"use client";

import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Cart, Menu, Search, ThemeSwitch } from "@/components";
import { useStateContext } from "@/context/StateContext";
import Link from "next/link";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

const Header = () => {
  const {
    toggleCart,
    setToggleCart,
    toggleMenu,
    setToggleMenu,
    totalQuantities,
    cartItems,
  } = useStateContext();

  return (
    <header className="header">
      <div className="header_container">
        <Link href="/" className="header_logo">
          GShop
        </Link>
        <div className="header_nav">
          <Link
            href="/library"
            className="special_underline cursor-pointer dark:text-white"
          >
            Games Library
          </Link>
          <p className="special_underline cursor-not-allowed dark:text-white">
            Signup
          </p>
          <Search />
        </div>
        <ul className="header_icons">
          <li className="group header_cart" onClick={() => setToggleCart(true)}>
            <AiOutlineShoppingCart className="header_cart_icon" />
            <span className="text-red text-xl">
              {cartItems.length >= 1 && totalQuantities}
            </span>
          </li>
          <li>
            <ThemeSwitch />
          </li>
          <li>
            <HiOutlineMenuAlt3
              className="header_menu_icon"
              onClick={() => setToggleMenu(true)}
            />
          </li>
        </ul>
        {toggleCart && <Cart />}
        {toggleMenu && <Menu />}
      </div>
    </header>
  );
};

export default Header;
