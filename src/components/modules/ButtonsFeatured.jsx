import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const ButtonsFeatured = () => {
  return (
    <>
      <div className="button-next-slide buttons-slider-header left-0">
        <IoIosArrowBack />
      </div>
      <div className="button-prev-slide buttons-slider-header right-0">
        <IoIosArrowForward />
      </div>
    </>
  );
};

export default ButtonsFeatured;
