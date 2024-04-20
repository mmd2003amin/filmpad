import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { GET_FILMS } from "../../graphql/queries";
import CardSearch from "../modules/CardSearch";
import NotSearched from "../modules/NotSearched";

const Search = ({ openSearch, setOpenSearch }) => {
  const [search, setSearch] = useState("");
  const { data } = useQuery(GET_FILMS);

  const result =
    search && data.films.filter((film) => film.title.includes(search));

  return (
    <div
      className={`${
        openSearch ? "opacity-100 visible" : "opacity-0 invisible"
      } fixed top-0 right-0 size-full bg-subMenu duration-300 z-50 overflow-auto`}
    >
      <div className="footer-width lg:w-[900px] centering mx-2 xs:mx-auto mt-20">
        <div className="bg-box2 relative rounded-[10px] text-sm text-text centering justify-between w-[84%] xs:w-[88%]">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-transparent py-4 outline-none focus:outline-primary outline-0 focus:outline-4 duration-200 size-full px-[14px] rounded-[10px]"
            type="text"
            placeholder="دنبال چیز خاصی میگردید؟"
          />
          <IoIosSearch className="size-7 absolute left-2.5" />
        </div>
        <button
          onClick={() => setOpenSearch(false)}
          className="w-[16%] xs:w-[12%]"
        >
          بستن
        </button>
      </div>

      <div className="footer-width lg:w-[900px] mx-auto mt-5">
        {result &&
          result.map((film) => (
            <CardSearch
              key={film.slug}
              data={film}
              setOpenSearch={setOpenSearch}
            />
          ))}

        {search && !result.length && (
          <h1 className="text-[16px] font-bold mt-3 flex justify-center xs:justify-start">
            چیزی پیدا نشد لطفا دوباره تلاش کنید!
          </h1>
        )}

        <NotSearched data={data} search={search} setSearch={setSearch} />
      </div>
    </div>
  );
};

export default Search;
