import React from "react";
import { useQuery } from "@apollo/client";
import { GET_FILMS } from "../../graphql/queries";
import preView from "../../helper/preView";
import CardFeatured from "../modules/CardFeatured";
import ButtonsFeatured from "../modules/ButtonsFeatured";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import Loader from "./Loader";

const FeaturedSlider = () => {
  const { data } = useQuery(GET_FILMS);

  return (
    <div className="bg-darker py-10 mb-[60px] text-text z-10">
      {data ? (
        <>
          <Swiper
            className="footer-width mx-auto relative"
            slidesPerView={preView()}
            navigation={{
              nextEl: ".button-next-slide",
              prevEl: ".button-prev-slide",
            }}
            modules={[Navigation]}
          >
            {data &&
              data.films.map((film) => (
                <SwiperSlide key={film.title} className="p-2 relative">
                  <CardFeatured data={film} />
                </SwiperSlide>
              ))}

            <ButtonsFeatured />
          </Swiper>
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default FeaturedSlider;
