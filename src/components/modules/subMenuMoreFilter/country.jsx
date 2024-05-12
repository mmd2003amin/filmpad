import React from "react";
import { GET_COUNTRIES } from "../../../graphql/queries";
import { useQuery } from "@apollo/client";
import { useDispatch, useSelector } from "react-redux";
import { country } from "../../../features/filters/filtersSlice";
import { closeCountry } from "../../../features/close/closeSlice";

const Country = () => {
  const countries = useQuery(GET_COUNTRIES);
  const state = useSelector((state) => state.close.country);
  const dispatch = useDispatch();

  const dispatchHandler = (e) => {
    const item = e.target.innerText;
    dispatch(country(item));
    dispatch(closeCountry(false))
    e.stopPropagation();
  };

  return (
    <>
      <div
        className={`submenu-moreFilter right-[4%] pt-[68px] ${
          state
            ? "opacity-100 visible scale-100"
            : "opacity-0 invisible scale-50"
        }`}
      >
        {countries.data &&
          countries.data.countries.map((item) => (
            <div
              className="p-2 cursor-pointer hover:bg-box2 transition-all w-full"
              key={item.name}
              onClick={dispatchHandler}
            >
              {item.name}
            </div>
          ))}
      </div>

      {/* Mobile */}
      <div
        className={`submenu-moreFilter-mobile top-[496px] ${
          state
            ? "opacity-100 visible scale-100"
            : "opacity-0 invisible scale-50"
        }`}
      >
        {countries.data &&
          countries.data.countries.map((item) => (
            <div
              className="p-2 cursor-pointer hover:bg-box2 transition-all w-full"
              key={item.name}
              onClick={dispatchHandler}
            >
              {item.name}
            </div>
          ))}
      </div>
    </>
  );
};

export default Country;
