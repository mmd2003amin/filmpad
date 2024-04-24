import { useState } from "react";
import { LuPlus } from "react-icons/lu";
import MobileGenre from "./MobileGenre";
import MobileSerial from "./MobileSerial";
import { Link } from "react-router-dom";

const MobileMenu = ({ openMenu, setOpenMenu }) => {
  const [openSubMenuGenre, setOpenSubMenuGenre] = useState(false);
  const [openSubMenuSerial, setOpenSubMenuSerial] = useState(false);
  const loginUser = localStorage.getItem("user") || [];

  return (
    <div
      className={`w-[70%] h-full z-50 bg-box overflow-scroll duration-500 lg:hidden fixed top-0 ${
        openMenu ? "right-0" : "-right-[70%]"
      }`}
    >
      <div className="my-5 centering">
        <img className="size-10" src="/icon.png" alt="icon" />
        <h1 className="font-black mr-0.5">فیلم پد</h1>
      </div>

      <ul className="list-items-menu w-full text-[#ccc] mb-4 text-[14px] z-20">
        <li onClick={() => setOpenSubMenuGenre(!openSubMenuGenre)}>
          <span>فیلم‌خارجی</span>
          <LuPlus className="text-[#c9d0d0] text-[16px]" />
        </li>
        <MobileGenre openSubMenuGenre={openSubMenuGenre} />
        <li>فیلم‌ایرانی</li>
        <li onClick={() => setOpenSubMenuSerial(!openSubMenuSerial)}>
          <span>سریال</span>
          <LuPlus className="text-[#c9d0d0] text-[16px]" />
        </li>
        <MobileSerial openSubMenuSerial={openSubMenuSerial} />
        <li>انیمیشن و کارتون</li>
        <li>دوبله‌فارسی</li>
        <li>انیمه</li>
        <li>بزودی</li>
      </ul>

      <div className="bg-[#0f1c2e] mt-5 w-[70%] py-2 flex fixed bottom-0 buttons-menu">
        <div
          className={`${
            loginUser.length ? "hidden" : "centering"
          } w-full justify-around m-2.5 gap-2.5`}
        >
          <Link onClick={() => setOpenMenu(false)} to="/login">
            ورود
          </Link>
          <Link onClick={() => setOpenMenu(false)} to="/register">
            عضویت
          </Link>
        </div>

        <div
          className={`${
            loginUser.length ? "centering" : "hidden"
          } w-11/12 mx-auto m-2.5`}
        >
          <Link to="/dashboard">پنل کاربری</Link>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
