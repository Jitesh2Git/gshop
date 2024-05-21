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
      {toggleMenu && (
        <div
          className="fixed inset-0 bg-[#000] bg-opacity-60 
          z-[998]"
        />
      )}
      <div
        className="fixed bg-bgcol h-[100%] right-0 top-0 w-[600px] 
        z-[999] max-md:w-full"
      >
        <ul
          className="border border-b-[#94a3b8]
      border-t-0 border-x-0 flex justify-between 
      items-center p-8"
        >
          <li className="text-xl font-bold">Menu</li>
          <li
            className="cursor-pointer p-2 text-xl 
          rounded-3xl hover:text-red
          hover:bg-[#e2e8f0]"
          >
            <IoClose onClick={() => setToggleMenu(false)} />
          </li>
        </ul>

        <div className="m-5">
          <div
            className="flex items-center gap-5
          border border-t-0 border-x-0
          border-b-[#cbd5e1] py-3 mr-3"
          >
            <HiOutlineUserCircle
              className="text-4xl p-1
          bg bg-[#cbd5e1] rounded-3xl"
            />
            <h1 className="text-xl font-bold">
              Jitesh Mali <br />
              <span
                className="hover:underline cursor-not-allowed
        text-[#94a3b8] text-[15px]"
              >
                View Profile
              </span>
            </h1>
          </div>
          <Link
            href="/"
            onClick={() => setToggleMenu(false)}
            className="flex items-center gap-5 rounded-xl
        border-2 border-[#cbd5e1] p-4 mt-4
        hover:text-[#fff] hover:bg-red"
          >
            <RiHomeSmileFill className="text-2xl" />
            <h1 className="text-sm font-bold">Home</h1>
          </Link>
          <Link
            href="/library"
            onClick={() => setToggleMenu(false)}
            className="flex items-center gap-5 rounded-xl
        border-2 border-[#cbd5e1] p-4 mt-4
        hover:text-[#fff] hover:bg-red"
          >
            <PiGameControllerFill className="text-2xl" />
            <h1 className="text-sm font-bold">Games Libray</h1>
          </Link>
          <Link
            href="#"
            className="flex items-center gap-5 rounded-xl
        border-2 border-[#cbd5e1] p-4 mt-4
        hover:text-[#fff] hover:bg-red cursor-not-allowed"
          >
            <BsShieldLockFill className="text-2xl" />
            <h1 className="text-sm font-bold">Login</h1>
          </Link>
          <Link
            href="#"
            className="flex items-center gap-5 rounded-xl
        border-2 border-[#cbd5e1] p-4 mt-4
        hover:text-[#fff] hover:bg-red cursor-not-allowed"
          >
            <BsShieldLockFill className="text-2xl" />
            <h1 className="text-sm font-bold">Sign Up</h1>
          </Link>
          <Link
            href="#"
            className="flex items-center gap-5 rounded-xl
        border-2 border-[#cbd5e1] p-4 mt-4
        hover:text-[#fff] hover:bg-red cursor-not-allowed"
          >
            <PiPhoneCallFill className="text-2xl" />
            <h1 className="text-sm font-bold">Contact Us</h1>
          </Link>
          <Link
            href="#"
            className="flex items-center gap-5 rounded-xl
        border-2 border-[#cbd5e1] p-4 mt-4
        hover:text-[#fff] hover:bg-red cursor-not-allowed"
          >
            <LiaFileContractSolid className="text-2xl" />
            <h1 className="text-sm font-bold">Terms of use</h1>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Menu;
