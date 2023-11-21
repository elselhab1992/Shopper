/* eslint-disable no-unused-vars */
import "./SimilarProducts.css";
import products from "../../Data/new_collections";
import { Items } from "../index";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";

const SimilarProducts = () => {
  return (
    <section className="similar">
      <div className="similar-heading">
        <h3>other products</h3>
        <hr />
      </div>
      <div className="similar-container">
        <Swiper {...sliderSettings}>
          <SliderButtons />
          {products.map((product) => {
            const { id, name, image, new_price, old_price } = product;

            return (
              <SwiperSlide key={id} className="slide">
                <Items {...product} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default SimilarProducts;

const SliderButtons = () => {
  const swiper = useSwiper();

  return (
    <div className="swiper-btns">
      <button onClick={() => swiper.slidePrev()}>&lt;</button>
      <button onClick={() => swiper.slideNext()}>&gt;</button>
    </div>
  );
};

export const sliderSettings = {
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    480: {
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 2,
    },
    750: {
      slidesPerView: 3,
    },
    1100: {
      slidesPerView: 4,
    },
  },
};
