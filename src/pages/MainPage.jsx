import React from "react";
import FeaturedSlider from "../components/templates/FeaturedSlider";
import Filters from "../components/templates/Filters";
import MobileFilters from "../components/templates/MobileFilters";
import GenreSection from "../components/templates/GenreSection";
import FilmsSection from "../components/templates/FilmsSection";
import {
  closeGenre,
  closeMoreFilter,
  closeSubmenu,
} from "../features/close/closeSlice";
import { useDispatch } from "react-redux";

const MainPage = () => {
  const dispatch = useDispatch();

  const closeHandler = () => {
    dispatch(closeGenre(false));
    dispatch(closeMoreFilter(false));
    dispatch(closeSubmenu(""));
  };

  return (
    <div onClick={closeHandler}>
      <FeaturedSlider />
      <Filters />
      <MobileFilters />
      <div className="centering justify-between flex-col md:flex-row items-start footer-width mx-auto mt-14">
        <FilmsSection />
        <GenreSection />
      </div>
    </div>
  );
};

export default MainPage;
