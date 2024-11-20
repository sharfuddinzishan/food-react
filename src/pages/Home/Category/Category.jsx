import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <>
      <section>
        <SectionTitle
          heading={"Order Online"}
          subHeading={"From 11:00am to 10:00pm"}
        />
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          // centeredSlides={true}
          spaceBetween={65}
          slidesPerView={4}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          // onSlideChange={() => console.log("slide change")}
          // onSwiper={(swiper) => console.log(swiper)}
          className="mySwiper mb-24"
        >
          <SwiperSlide>
            <img src={slide1} alt="" />
            <h3 className="text-white text-4xl uppercase text-center -mt-16">
              Salad
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide2} alt="" />
            <h3 className="text-white text-4xl uppercase text-center -mt-16">
              Pizzas
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide3} alt="" />
            <h3 className="text-white text-4xl uppercase text-center -mt-16">
              Soups
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide4} alt="" />
            <h3 className="text-white text-4xl uppercase text-center -mt-16">
              Deserts
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide5} alt="" />
            <h3 className="text-white text-4xl uppercase text-center -mt-16">
              Salad
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide2} alt="" />
            <h3 className="text-white text-4xl uppercase text-center -mt-16">
              Pizzas
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide3} alt="" />
            <h3 className="text-white text-4xl uppercase text-center -mt-16">
              Soups
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide4} alt="" />
            <h3 className="text-white text-4xl uppercase text-center -mt-16">
              Deserts
            </h3>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
};

export default Category;
