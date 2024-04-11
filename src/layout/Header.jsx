import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa6";
import MobileMenu from "../components/templates/MobileMenu";
import GenreSubMenu from "../components/templates/GenreSubMenu";
import SerialSubMenu from "../components/templates/SerialSubMenu";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="bg-darker text-text font-regular centering h-20">
      <div className="px-2 w-full xs:w-[34rem] md:w-[45rem] lg:w-[60rem] 1200:w-[71rem] 1400:w-[82.5rem] mx-auto centering justify-between">
        <IoMenu
          className="text-4xl lg:hidden z-10"
          onClick={() => setOpenMenu(true)}
        />

        <div className="absolute lg:sticky w-32 left-0 right-0 mx-auto centering">
          <img className="size-10" src="/icon.png" alt="icon" />
          <h1 className="font-black mr-0.5">فیلم پد</h1>
        </div>

        <ul className="hidden lg:flex centering list-items-header w-[80%] mx-5 text-[15px]">
          <li className="relative group">
            <span>فیلم‌خارجی</span>
            <MdKeyboardArrowDown className="text-[#c9d0d0] text-[16px] group-hover:rotate-180 duration-300" />
            <GenreSubMenu />
          </li>
          <li>فیلم‌ایرانی</li>
          <li className="relative group">
            <span>سریال</span>
            <MdKeyboardArrowDown className="text-[#c9d0d0] text-[16px] group-hover:rotate-180 duration-300" />
            <SerialSubMenu />
          </li>
          <li>انیمیشن و کارتون</li>
          <li>دوبله‌فارسی</li>
          <li>انیمه</li>
          <li>بزودی</li>
        </ul>

        <div className="centering gap-2.5 mr-16 z-10">
          <div className="font-semibold relative lg:hidden">
            <FaRegBell className="text-[#EEC932] text-[21px]" />
            <span className="absolute -top-2 -right-2 bg-[#EEC932] text-[#1B1B1B] rounded-full size-[15px] text-[10px] centering">
              0
            </span>
          </div>

          <div className="lg:bg-[#0D1726] h-[50px] lg:min-w-[50px] w-auto centering rounded-[15px] border border-transparent text-[#cce1ff] cursor-pointer">
            <IoIosSearch className="text-[21px]" />
          </div>

          <div className="hidden lg:flex centering text-[14px] border border-transparent rounded-[15px] h-[50px] min-w-[122px] w-auto bg-primary text-black font-semibold px-5 transition-all hover:bg-[#00ff3b] cursor-pointer">
            ورود / عضویت
          </div>
        </div>
      </div>

      <div
        onClick={() => setOpenMenu(false)}
        className={`${
          openMenu ? "opacity-100 z-10" : "opacity-0 -z-10"
        } duration-150 fixed w-full h-full float_menu_holder`}
      ></div>

      <MobileMenu openMenu={openMenu} />
    </div>
  );
};

export default Header;
