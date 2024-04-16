import React from "react";
import { useStyleSub } from "../../hooks/useStyleSub";

const CardSubMenuMoreFilters = ({ data, name }) => {
  return (
    <div
      className={`shadow-lg rounded-md bg-box h-72 w-44 scale-100 opacity-100 visible duration-100 z-10 centering flex-col items-start overflow-y-auto absolute top-[75px] 
      ${useStyleSub(name)}`}
    >
      {data &&
        data.map((item) => (
          <div
            className="p-2 cursor-pointer hover:bg-box2 transition-all w-full"
            key={item.id}
          >
            {item.name}
          </div>
        ))}
    </div>
  );
};

export default CardSubMenuMoreFilters;
