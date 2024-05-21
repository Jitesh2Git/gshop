"use client";

import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import { Cart, Menu, Search } from "@/components";
import { useStateContext } from "@/context/StateContext";
import Link from "next/link";

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
    <header
      className="flex justify-between items-center py-6 px-10 shadow 
    shadow-red/20 max-sm:px-8"
    >
      <Link
        href="/"
        className="text-[40px] text-red font-bold cursor-pointer
        max-sm:text-[35px]"
      >
        GShop
      </Link>
      <div className="flex items-center gap-16 text-xl max-lg:hidden">
        <Link href="/library" className="special_underline cursor-pointer">
          Games Library
        </Link>
        <p className="special_underline cursor-not-allowed">Signup</p>
        <Search />
      </div>
      <ul className="flex items-center gap-10 text-[40px] max-sm:gap-4">
        <li
          className="group flex items-center shadow-md shadow-[#cbd5e1] p-2 
        rounded-lg cursor-pointer text-2xl gap-2
        max-sm:text-xl max-sm:ml-2"
          onClick={() => setToggleCart(true)}
        >
          <AiOutlineShoppingCart className="group-hover:text-red " />
          <span className="text-red text-2xl max-sm:text-xl">
            {cartItems.length >= 1 && totalQuantities}
          </span>
        </li>
        <li>
          <RxHamburgerMenu
            className="shadow-md shadow-[#cbd5e1] p-2 rounded-lg
             hover:text-red cursor-pointer"
            onClick={() => setToggleMenu(true)}
          />
        </li>
      </ul>
      {toggleCart && <Cart />}
      {toggleMenu && <Menu />}
    </header>
  );
};

export default Header;
