import { Rating } from "@smastrom/react-rating";
import axios from "axios";
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "@smastrom/react-rating/style.css";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Testimonials = () => {
  const [reviews, setReviews] = useState();
  useEffect(() => {
    let ignore = false;
    const getReviews = async () => {
      const result = await axios.get("./reviews.json");
      if (!ignore) {
        if (result) {
          setReviews(result.data);
        }
      }
    };
    getReviews();
    return () => {
      ignore = true;
    };
  }, []);
  return (
    <>
      <section>
        <SectionTitle
          heading={"Testimonials"}
          subHeading={"What Our Clients Say"}
        />
        <div>
          <Swiper
            navigation={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            modules={[Navigation, Autoplay]}
            className="mySwiper w-5/6"
          >
            {reviews?.map((review) => {
              const { _id: id, rating, name, details } = review || {};
              return (
                <SwiperSlide key={id}>
                  <div className="flex flex-col items-center my-16 mx-24">
                    <Rating
                      className="mx-auto"
                      style={{ maxWidth: 180 }}
                      value={rating}
                      readOnly
                    />
                    <p className="my-8">{details}</p>
                    <p className="uppercase text-orange-400 text-center text-2xl">
                      {name}
                    </p>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
