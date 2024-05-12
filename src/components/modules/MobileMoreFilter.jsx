import React from "react";
import listMoreFilters from "../../constant/listMoreFilters";
import { Switch } from "pretty-checkbox-react";
import { IoCloseSharp } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { closeSubmenu } from "../../features/close/closeSlice";
import { doubleF, subtitleF } from "../../features/filters/filtersSlice";
import { allMovies } from "../../features/products/productsSlice";
import { filterHandler } from "../../utils/filterHandler";
import { GET_FILMS } from "../../graphql/queries";
import { useQuery } from "@apollo/client";

//submenus
import Country from "./subMenuMoreFilter/country";
import ShowWith from "./subMenuMoreFilter/showWith";
import Ages from "./subMenuMoreFilter/ages";
import IMDbSub from "./subMenuMoreFilter/IMDb";
import OfTheYearSub from "./subMenuMoreFilter/ofTheYear";
import UntilTheYearSub from "./subMenuMoreFilter/untilTheYear";
import GenreFilter from "./subMenuMoreFilter/GenreFilter";
import Type from "./subMenuMoreFilter/Type";
import useCloseDispatch, {
  useCloseDispatchAll,
} from "../../hooks/useCloseDispatch";

const MobileMoreFilter = ({ mobileMoreFilter, setMobileMoreFilter }) => {
  const { data } = useQuery(GET_FILMS);
  const state = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const year = [
    {
      id: "تا سال",
      name: state.untilTheYear ? state.untilTheYear : "تا سال",
    },
    {
      id: "از سال",
      name: state.ofTheYear ? state.ofTheYear : "از سال",
    },
  ];

  const showSubMenuHandler = (e) => {
    const text = e.target.innerText;
    useCloseDispatch(e.target.id, dispatch);

    e.stopPropagation();
    dispatch(closeSubmenu(text));
  };

  const searchHandler = () => {
    const filter = filterHandler({ films: data, filters: state });
    dispatch(allMovies(filter));
  };

  return (
    <div
      onClick={() => useCloseDispatchAll()}
      className={`bg-filters-mobile h-[100vh] w-[100vw] fixed top-0 right-0 text-text p-5 overflow-auto duration-300 lg:hidden ${
        mobileMoreFilter
          ? "opacity-100 visible z-50"
          : "opacity-0 -z-10 invisible"
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
              key={item.id}
              id={item.id}
              onClick={showSubMenuHandler}
              className="more-filters-mobile mx-1"
            >
              <h1 className="w-full text-end py-5" id={item.id}>
                {item.name}
              </h1>
              <MdKeyboardArrowDown className="text-xl" />
            </div>
          ))}
        </div>

        <div className="more-filters-mobile">
          <p className="ml-2">دوبله</p>
          <Switch
            shape="fill"
            color="warning"
            className="text-xl mt-7"
            onClick={() => dispatch(doubleF(!state.doubleF))}
          />
        </div>

        <div className="more-filters-mobile">
          <p className="ml-2">زیرنویس</p>
          <Switch
            shape="fill"
            color="warning"
            className="text-xl mt-7"
            onClick={() => dispatch(subtitleF(!state.subtitleF))}
          />
        </div>

        {listMoreFilters().map((item) => (
          <div
            onClick={showSubMenuHandler}
            id={item.dataset}
            key={item.id}
            className="more-filters-mobile"
          >
            <h1 className="w-full text-end py-5" id={item.dataset}>
              {item.name}
            </h1>
            <MdKeyboardArrowDown className="text-xl" />
          </div>
        ))}

        <div
          onClick={searchHandler}
          className="more-filters-mobile text-black font-regular font-semibold h-16 justify-center bg-primary"
        >
          جستجو
        </div>
      </div>

      <Country />
      <ShowWith />
      <Ages />
      <IMDbSub />
      <OfTheYearSub />
      <UntilTheYearSub />
      <GenreFilter />
      <Type />
    </div>
  );
};

export default MobileMoreFilter;
