import React, { useState } from "react";
import FeaturedSlider from "../components/templates/FeaturedSlider";
import Filters from "../components/templates/Filters";
import MobileFilters from "../components/templates/MobileFilters";
import GenreSection from "../components/templates/GenreSection";
import FilmsSection from "../components/templates/FilmsSection";

const MainPage = () => {
  const [genre, setGenre] = useState(false);
  const [moreFilters, setMoreFilters] = useState(false);
  const [subMenu, setSubMenu] = useState("");

  const closeHandler = () => {
    setGenre(false);
    setMoreFilters(false);
    setSubMenu("");
  };

  return (
    <div onClick={closeHandler}>
      <FeaturedSlider />
      <Filters
        genre={genre}
        setGenre={setGenre}
        moreFilters={moreFilters}
        setMoreFilters={setMoreFilters}
        setSubMenu={setSubMenu}
        subMenu={subMenu}
      />
      <MobileFilters />
      <div className="centering justify-between flex-col md:flex-row items-start footer-width mx-auto mt-14">
        <FilmsSection />
        <GenreSection />
      </div>
    </div>
  );
};

export default MainPage;
