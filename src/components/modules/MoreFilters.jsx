import React from "react";
import listMoreFilters from "../../constant/listMoreFilters";
import { MdKeyboardArrowDown } from "react-icons/md";
import { BsTriangleFill } from "react-icons/bs";
import useSubmenu from "../../hooks/useSubmenu";
import CardSubMenuMoreFilters from "./CardSubMenuMoreFilters";

const MoreFilters = ({ moreFilters, subMenu, setSubMenu }) => {
  const dataSubmenu = useSubmenu(subMenu);
  const year = ["از سال", "تا سال"];

  const showSubMenuHandler = (e) => {
    const text = e.target.innerText;
    e.stopPropagation();
    setSubMenu((prev) => (prev === text ? "" : text));
  };

  return (
    <div
      className={`${
        moreFilters
          ? "top-24 opacity-100 visible"
          : "top-28 opacity-0 invisible"
      } duration-300 w-full bg-box2 rounded-[30px] absolute right-0 centering justify-evenly mx-auto p-3`}
    >
      {listMoreFilters.slice(5, 9).map((item) => (
        <div
          onClick={showSubMenuHandler}
          key={item.id}
          className="more-filters"
        >
          <p>{item.name}</p>
          <MdKeyboardArrowDown
            className={`${
              subMenu === item.name && "rotate-180"
            } duration-200 text-lg`}
          />
        </div>
      ))}

      {year.map((item) => (
        <div
          key={item}
          onClick={showSubMenuHandler}
          className="p-2 relative centering more-filters"
        >
          <p>{item}</p>
          <MdKeyboardArrowDown
            className={`${
              subMenu === item && "rotate-180"
            } duration-200 text-lg`}
          />
        </div>
      ))}

      <BsTriangleFill className="text-box2 text-2xl absolute -top-4 left-[23%] z-30" />
      <CardSubMenuMoreFilters data={dataSubmenu} name={subMenu} />
    </div>
  );
};

export default MoreFilters;
