import React from "react";
import itemsMainDashboard from "../../constant/itemsMainDashboard";
import AboutMainDashboard from "../modules/aboutMainDashboard";
import { useQuery } from "@apollo/client";
import { GET_FILMS } from "../../graphql/queries";
import CardFilmDashboard from "../modules/cardFilmDashboard";

const MainDashboard = () => {
  const { data } = useQuery(GET_FILMS);

  return (
    <div className="text-text font-regular">
      <div className="grid grid-cols-1 md:grid-cols-2 1200:grid-cols-4 justify-between px-2 md:px-8 mt-12">
        {itemsMainDashboard.map((item) => (
          <div
            key={item.id}
            className="relative py-9 px-6 bg-box2 mx-2 mb-9 rounded-[10px] shadow-boxDashboard"
          >
            <span className="absolute -top-[25px] right-5">{item.icon}</span>
            <p className="text-[15px] font-normal">{item.name}</p>
            <p className="mt-4">0</p>
          </div>
        ))}
      </div>

      <div className="centering flex-col lg:flex-row mt-10 px-4 md:px-10">
        <div className="w-full lg:w-1/2 rounded-md bg-box2 lg:ml-2 mb-10 lg:mb-0 h-[24rem]">
          <h1 className="text-[17px] font-bold p-4 border-b border-[#13243d]">
            اطلاعات کلی
          </h1>
          <AboutMainDashboard />
        </div>
        <div className="w-full lg:w-1/2 rounded-md bg-box2 lg:mr-2 h-[24rem]">
          <h1 className="text-[17px] font-bold p-4 border-b border-[#13243d]">
            وضعیت تیکت ها
          </h1>
          <div className="centering flex-col mx-auto my-8">
            <img src="/ticket.png" alt="ticket" className="w-40" />
            <h1 className="text-lg font-semibold mb-2">شما تیکتی ندارید</h1>
            <p className="text-sm font-normal opacity-60 w-11/12 text-center">
              درصورتی که نیاز به پشتیبانی دارید تیکت ارسال کنید.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-4 md:mx-10 rounded-[10px] bg-box2 mt-12">
        <h1 className="text-[17px] font-bold p-4 border-b border-[#13243d]">
          لیست تماشا
        </h1>

        <div className="centering flex-wrap mx-auto justify-between mt-6">
          {data &&
            data.films
              .slice(0, 6)
              .map((film) => <CardFilmDashboard key={film.title} film={film} />)}
        </div>
      </div>
    </div>
  );
};

export default MainDashboard;
