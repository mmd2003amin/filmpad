import React, { useState } from "react";
import authorization from "../utils/authorization";
import SidebarDashboard from "../components/templates/SidebarDashboard";
import MainDashboard from "../components/templates/MainDashboard";
import { FaRegBell, FaRegUser } from "react-icons/fa";
import { MdMenu } from "react-icons/md";
import Notifications from "../components/templates/Notifications";
import WatchList from "../components/templates/WatchList";
import AllComments from "../components/templates/AllComments";
import { LuLayoutDashboard } from "react-icons/lu";
import MovieRequest from "../components/templates/MovieRequest";

const Dashboard = () => {
  const [page, setPage] = useState("داشبورد");
  const [openSide, setOpenSide] = useState(false);

  authorization();

  return (
    <div className="flex justify-between">
      <div>
        <SidebarDashboard
          page={page}
          setPage={setPage}
          openSide={openSide}
          setOpenSide={setOpenSide}
        />
      </div>

      <div className="w-full lg:w-calc mt-10">
        <div className="centering justify-between px-4 md:px-10 items-head-dashboard">
          <FaRegUser />
          <div className="centering">
            <FaRegBell onClick={() => setPage("اعلانات")} />
            <LuLayoutDashboard
              className="mx-2"
              onClick={() => setPage("داشبورد")}
            />
            <MdMenu className="lg:hidden" onClick={() => setOpenSide(true)} />
          </div>
        </div>

        <div>
          {page === "داشبورد" && <MainDashboard />}
          {page === "اعلانات" && <Notifications />}
          {page === "لیست تماشا" && <WatchList />}
          {page === "دیدگاه های شما" && <AllComments />}
          {page === "خروج از حساب کاربری" && localStorage.clear()}
          {page === "درخواست فیلم و سریال" && <MovieRequest />}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
