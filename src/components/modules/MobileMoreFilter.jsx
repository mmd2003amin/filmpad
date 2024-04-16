import React, { useState } from "react";
import listMoreFilters from "../../constant/listMoreFilters";
import { Switch } from "pretty-checkbox-react";
import { IoCloseSharp } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
import useSubmenu from "../../hooks/useSubmenu";
import CardSubMenuMoreFilterMobile from "./CardSubMenuMoreFilterMobile";

const MobileMoreFilter = ({ mobileMoreFilter, setMobileMoreFilter }) => {
  const [name, setName] = useState("");
  const dataSubmenu = useSubmenu(name);
  const year = ["از سال", "تا سال"];

  const showSubMenuHandler = (e) => {
    const text = e.target.innerText;
    e.stopPropagation();
    setName((prev) => (prev === text ? "" : text));
  };

  return (
    <div
      onClick={() => setName("")}
      className={`float_menu_holder h-[100vh] w-[100vw] fixed top-0 right-0 text-text p-5 overflow-auto duration-300 lg:hidden ${
        mobileMoreFilter ? "opacity-100 visible z-50" : "opacity-0 -z-10 invisible"
      }`}
    >
      <div className="w-full centering justify-between mx-auto">
        <h1 className="text-[16px]">جستجوی پیشرفته</h1>
        <IoCloseSharp
          onClick={() => setMobileMoreFilter(false)}
          className="bg-[#131414] size-8 p-2 rounded-[10px]"
        />
      </div>

      <div dir="ltr" className="w-full centering flex-col mx-auto mt-6">
        <div className="w-full centering">
          {year.map((item) => (
            <div
              key={item}
              onClick={showSubMenuHandler}
              className="more-filters-mobile mx-1"
            >
              <h1 className="w-full text-end py-5">{item}</h1>
              <MdKeyboardArrowDown className="text-xl" />
            </div>
          ))}
        </div>

        {listMoreFilters.map((item) => (
          <div
            onClick={showSubMenuHandler}
            key={item.id}
            className="more-filters-mobile"
          >
            <h1 className="w-full text-end py-5">{item.name}</h1>

            {item.name.includes("دوبله") ||
            item.name.includes("زیرنویس") ||
            item.name.includes("پخش آنلاین") ? (
              <Switch shape="fill" color="warning" className="text-xl mt-7" />
            ) : (
              <MdKeyboardArrowDown className="text-xl" />
            )}
          </div>
        ))}

        <div className="more-filters-mobile text-black font-regular font-semibold h-16 justify-center bg-primary">
          جستجو
        </div>
      </div>
      <CardSubMenuMoreFilterMobile data={dataSubmenu} name={name} />
    </div>
  );
};

export default MobileMoreFilter;
