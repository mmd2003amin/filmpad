import React, { useState } from "react";
import { GET_FILMS } from "../graphql/queries";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import PosterDetails from "../components/modules/posterDetails";
import AboutDetails from "../components/modules/aboutDetails";
import { RiInformationLine } from "react-icons/ri";
import { IoChatbubblesOutline } from "react-icons/io5";
import MoreInformation from "../components/modules/MoreInformation";
import Comments from "../components/modules/Comments";
import SimilarDetails from "../components/modules/SimilarDetails";
import Loader from "../components/templates/Loader";

const Details = () => {
  const [more, setMore] = useState("اطلاعات بیشتر");
  const { data } = useQuery(GET_FILMS);
  const { id } = useParams();
  const film = data && data.films.find((film) => film.slug === id);

  return (
    <>
      {data ? (
        <div className="flex flex-col">
          <div className="h-full w-full">
            <img
              className="absolute top-0 right-0 opacity-40 w-full h-[35rem]"
              src={film.background}
              alt={film.title}
            />

            <div className="back-details absolute bottom-0 h-[25rem] w-full"></div>
            <div className="back-poster absolute top-0 right-0 h-[35rem] w-2/3"></div>

            <div className="centering flex-col md:flex-row justify-start md:items-start footer-width mt-10 mx-3 xs:mx-auto text-text relative">
              <PosterDetails data={film} />
              <AboutDetails data={film} />
            </div>
          </div>

          <div className="bg-box2 box-border mt-16 z-10">
            <div className="footer-width mx-auto centering justify-start">
              <div
                onClick={() => setMore("اطلاعات بیشتر")}
                className={`${
                  more === "اطلاعات بیشتر"
                    ? "text-primary border-b-2 border-primary"
                    : "text-text border-b-2 border-box2"
                } centering px-6 py-6 cursor-pointer`}
              >
                <RiInformationLine className="text-lg ml-1.5" />
                <p className="text-sm font-medium">اطلاعات بیشتر</p>
              </div>

              <div
                onClick={() => setMore("نظرات")}
                className={`${
                  more === "نظرات"
                    ? "text-primary border-b-2 border-primary"
                    : "text-text border-b-2 border-box2"
                } centering px-6 py-6 cursor-pointer`}
              >
                <IoChatbubblesOutline className="text-lg ml-1.5" />
                <p className="text-sm font-medium">نظرات</p>
              </div>
            </div>
          </div>

          <div>
            {more === "اطلاعات بیشتر" && <MoreInformation data={film} />}
            {more === "نظرات" && <Comments data={film} />}
          </div>

          <SimilarDetails film={film} />
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Details;
