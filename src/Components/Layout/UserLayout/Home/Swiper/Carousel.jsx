import React, { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

const Carousel = () => {
  const carouselData = useMemo(() => [
    {
      imgUrl: "https://source.unsplash.com/300x200",
      clickLink: "",
    },
    {
      imgUrl: "https://source.unsplash.com/300x200",
      clickLink: "",
    },
    {
      imgUrl: "https://source.unsplash.com/300x200",
      clickLink: "",
    },
    {
      imgUrl: "https://source.unsplash.com/300x200",
      clickLink: "",
    },
  ], []);

  return (
    <div className="dark:bg-semi-dark dark:text-secondary-text-dark">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {carouselData.map((cover, idx) => (
          <SwiperSlide key={idx} className="rounded-lg dark:bg-semi-dark">
            <div className="h-[350px] w-[940px] lg:w-full rounded-lg dark:bg-semi-dark">
              <Link to={cover.clickLink}>
                <img
                  src={cover.imgUrl}
                  className="w-full object-cover rounded-lg mx-auto dark:bg-semi-dark"
                  alt={`Carousel image ${idx + 1}`}
                />
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
