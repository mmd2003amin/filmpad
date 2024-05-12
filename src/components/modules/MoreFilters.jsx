import React from "react";
import listMoreFilters from "../../constant/listMoreFilters";
import { BsTriangleFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { closeSubmenu } from "../../features/close/closeSlice";

//submenus
import Country from "./subMenuMoreFilter/country";
import ShowWith from "./subMenuMoreFilter/showWith";
import Ages from "./subMenuMoreFilter/ages";
import IMDbSub from "./subMenuMoreFilter/IMDb";
import OfTheYearSub from "./subMenuMoreFilter/ofTheYear";
import UntilTheYearSub from "./subMenuMoreFilter/untilTheYear";
import useCloseDispatch, {
  useCloseDispatchAll,
} from "../../hooks/useCloseDispatch";

const MoreFilters = () => {
  const dispatch = useDispatch();
  const filterState = useSelector((state) => state.filter);
  const closeState = useSelector((state) => state.close);

  const year = [
    {
      id: "از سال",
      name: filterState.ofTheYear ? filterState.ofTheYear : "از سال",
    },
    {
      id: "تا سال",
      name: filterState.untilTheYear ? filterState.untilTheYear : "تا سال",
    },
  ];

  const showSubMenuHandler = (e) => {
    const name = e.target.innerText;
    useCloseDispatch(e.target.id, dispatch);

    e.stopPropagation();
    dispatch(closeSubmenu(name));
  };

  return (
    <div
      onClick={(e) => useCloseDispatchAll(e, dispatch)}
      className={`${
        closeState.moreFilter
          ? "top-24 opacity-100 visible"
          : "top-28 opacity-0 invisible"
      } duration-300 w-full bg-box2 shadow-xl rounded-[30px] absolute right-0 centering justify-evenly mx-auto p-3`}
    >
      {listMoreFilters()
        .slice(2)
        .map((item) => (
          <div
            key={item.dataset}
            id={item.dataset}
            onClick={showSubMenuHandler}
            className="more-filters"
          >
            <p id={item.dataset}>{item.name}</p>
          </div>
        ))}

      {year.map((item) => (
        <div
          id={item.id}
          key={item.name}
          onClick={showSubMenuHandler}
          className="p-2 relative centering more-filters"
        >
          <p id={item.id}>{item.name}</p>
        </div>
      ))}

      <BsTriangleFill className="text-box2 text-2xl absolute -top-4 left-[23%] z-30" />
      <Country />
      <ShowWith />
      <Ages />
      <IMDbSub />
      <OfTheYearSub />
      <UntilTheYearSub />
    </div>
  );
};

export default MoreFilters;
