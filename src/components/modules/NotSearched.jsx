import React from "react";
import { IoIosSearch } from "react-icons/io";

const NotSearched = ({ data, search, setSearch }) => {
  return (
    <>
      {!search && (
        <div className="footer-width lg:w-[900px] mx-3 xs:mx-auto">
          <h1 className="text-[16px] font-bold mb-2">ترند ها</h1>
          <div>
            {data.films.slice(2, 9).map((film) => (
              <div
                className="centering justify-start border-b border-text px-2 py-2"
                key={film.slug}
              >
                <IoIosSearch />
                <p
                  onClick={(e) => setSearch(e.target.innerText)}
                  className="cursor-pointer mr-1 text-sm"
                >
                  {film.title.split(" ").slice(4).join(" ")}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default NotSearched;
