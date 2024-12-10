"use client";

import { useStateContext } from "@/context/StateContext";
import React from "react";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { IoClose } from "react-icons/io5";
import { RiHomeSmileFill } from "react-icons/ri";
import { PiGameControllerFill } from "react-icons/pi";
import { BsShieldLockFill } from "react-icons/bs";
import { PiPhoneCallFill } from "react-icons/pi";
import { LiaFileContractSolid } from "react-icons/lia";
import Link from "next/link";

const Menu = () => {
  const { toggleMenu, setToggleMenu } = useStateContext();

  return (
    <>
      {toggleMenu && <div className="toggle_menu_overlay" />}
      <div className="menu_container">
        <ul className="menu_header">
          <li className="section_nav_headings">Menu</li>
          <li className="section_close">
            <IoClose onClick={() => setToggleMenu(false)} />
          </li>
        </ul>

        <div className="m-5">
          <div className="menu_user_wrapper">
            <HiOutlineUserCircle className="menu_user_icon" />
            <h1 className="menu_user_name">
              Jitesh Mali <br />
              <span className="menu_user_profile">View Profile</span>
            </h1>
          </div>
          <Link
            href="/"
            onClick={() => setToggleMenu(false)}
            className="group menu_nav_links"
          >
            <RiHomeSmileFill className="menu_nav_icon" />
            <h1 className="menu_nav_name">Home</h1>
          </Link>
          <Link
            href="/library"
            onClick={() => setToggleMenu(false)}
            className="group menu_nav_links"
          >
            <PiGameControllerFill className="menu_nav_icon" />
            <h1 className="menu_nav_name">Games Libray</h1>
          </Link>
          <Link href="#" className="group menu_nav_links cursor-not-allowed">
            <BsShieldLockFill className="menu_nav_icon" />
            <h1 className="menu_nav_name">Login</h1>
          </Link>
          <Link href="#" className="group menu_nav_links cursor-not-allowed">
            <BsShieldLockFill className="menu_nav_icon" />
            <h1 className="menu_nav_name">Sign Up</h1>
          </Link>
          <Link href="#" className="group menu_nav_links cursor-not-allowed">
            <PiPhoneCallFill className="menu_nav_icon" />
            <h1 className="menu_nav_name">Contact Us</h1>
          </Link>
          <Link href="#" className="group menu_nav_links cursor-not-allowed">
            <LiaFileContractSolid className="menu_nav_icon" />
            <h1 className="menu_nav_name">Terms of use</h1>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Menu;
