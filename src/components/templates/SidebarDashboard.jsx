import React from "react";
import pagesDashboard from "../../constant/pagesDashboard";
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";

const SidebarDashboard = ({ page, setPage, openSide, setOpenSide }) => {
  return (
    <div
      className={`fixed top-0 lg:right-0 h-full w-80 bg-box2 text-text shadow-2xl z-50 font-regular overflow-auto duration-500 ${
        openSide ? "right-0" : "-right-80"
      }`}
    >
      <div className="centering lg:block justify-between px-3">
        <Link
          to="/"
          className="lg:mx-auto centering justify-start lg:px-5 mt-12 mb-10"
        >
          <img className="size-24" src="/icon.png" alt="icon" />
          <h1 className="font-black text-lg mr-0.5">فیلم پد</h1>
        </Link>

        <IoClose onClick={() => setOpenSide(false)} className="size-9 lg:hidden rounded-[8px] bg-[#14253e]" />
      </div>

      <div>
        {pagesDashboard.map((item) => (
          <div
            key={item.id}
            onClick={() => setPage(item.name)}
            className={`relative cursor-pointer duration-500 py-[15px] px-8 font-medium text-sm mb-3 centering justify-start ${
              page === item.name && "items-sidebar-dashboard"
            }`}
          >
            <span className="ml-6 text-2xl">{item.icon}</span>
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SidebarDashboard;
