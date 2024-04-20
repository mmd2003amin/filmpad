import React, { useState } from "react";

const listItems = ["قبلی", "1", "2", "3", "4", "بعدی"];

const Pagination = () => {
  const [page, setPage] = useState(1);

  const paginationHandler = (e) => {
    const name = e.target.innerText;

    if (name === "بعدی") {
      if (page < 4) {
        setPage((page) => ++page);
      }
    } else if (name === "قبلی") {
      if (page > 1) {
        setPage((page) => --page);
      }
    } else {
      setPage(+name);
    }
  };

  return (
    <div className="bg-box2 p-2.5 my-5 rounded-md w-full centering">
      <div className="w-full lg:w-1/2 centering justify-around">
        {listItems.map((item) => (
          <div
            key={item}
            onClick={paginationHandler}
            className={`text-text centering cursor-pointer mx-0.5 px-6 size-9 text-sm rounded-[3px] hover:bg-primary hover:text-black duration-300 ${
              +item === page ? "bg-primary" : "bg-box"
            }`}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pagination;
