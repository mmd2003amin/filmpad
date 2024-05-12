import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { type } from "../../../features/filters/filtersSlice";
import { closeType } from "../../../features/close/closeSlice";
const data = [
  { id: 1, name: "همه", id: "همه" },
  { id: 2, name: "فیلم", id: "فیلم" },
  { id: 3, name: "سریال", id: "سریال" },
];

const Type = () => {
  const filterState = useSelector((state) => state.filter);
  const closeState = useSelector((state) => state.close);

  const dispatch = useDispatch();

  const dispatchHandler = (e) => {
    const item = e.target.innerText;
    dispatch(type(item));
    dispatch(closeType(false));
    e.stopPropagation();
  };
  return (
    <>
      <div className="hidden lg:flex bg-box p-2.5 rounded-[20px] h-14 centering justify-around w-3/12">
        {data.map((i) => (
          <button
            key={i.id}
            onClick={() => dispatch(type(i.name))}
            className={`${filterState.type === i.name && "movie-filter"} w-2/6`}
          >
            {i.name}
          </button>
        ))}
      </div>

      {/* Mobile */}
      <div
        className={`submenu-moreFilter-mobile top-[352px] h-fit ${
          closeState.type
            ? "opacity-100 visible scale-100"
            : "opacity-0 invisible scale-50"
        }`}
      >
        {data.map((item) => (
          <div
            className="p-2 cursor-pointer hover:bg-box2 transition-all w-full"
            key={item.id}
            onClick={dispatchHandler}
          >
            {item.name}
          </div>
        ))}
      </div>
    </>
  );
};

export default Type;
