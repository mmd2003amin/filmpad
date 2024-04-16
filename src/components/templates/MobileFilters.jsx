import React, { useState } from "react";
import MobileMoreFilter from "../modules/MobileMoreFilter";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoFilterSharp } from "react-icons/io5";

const MobileFilters = () => {
  const [mobileMoreFilter, setMobileMoreFilter] = useState(false);
  console.log(mobileMoreFilter);
  return (
    <>
      <div
        onClick={() => setMobileMoreFilter(true)}
        className="centering justify-between lg:hidden p-6 border-box2 border text-text h-14 footer-width mx-auto rounded-[20px] text-[15px] -mt-8 -mb-5"
      >
        <MdKeyboardArrowDown className="bg-box2 size-7 rounded-full" />
        <h1>جستجوی پیشرفته</h1>
        <IoFilterSharp className="bg-primary text-black p-1 size-7 rounded-full" />
      </div>

      <MobileMoreFilter
        mobileMoreFilter={mobileMoreFilter}
        setMobileMoreFilter={setMobileMoreFilter}
      />
    </>
  );
};

export default MobileFilters;
