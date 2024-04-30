import React from "react";
import FilmsSection from "../components/templates/FilmsSection";
import GenreSection from "../components/templates/GenreSection";

const filterPage = () => {
  return (
    <div className="centering justify-between flex-col md:flex-row items-start footer-width mx-auto mt-14">
      <FilmsSection />
      <GenreSection />
    </div>
  );
};

export default filterPage;
