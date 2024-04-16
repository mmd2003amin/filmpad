import React from "react";
import { useStyleSubMobile } from "../../hooks/useStyleSub";

const CardSubMenuMoreFilterMobile = ({ data, name }) => {
  return (
    <div
      className={`absolute visible opacity-100 scale-100 duration-300 shadow-lg w-[95.5%] rounded-lg overflow-auto bg-[#131414] right-0 left-0 mx-auto 
      ${useStyleSubMobile(name)}`}
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

export default CardSubMenuMoreFilterMobile;
