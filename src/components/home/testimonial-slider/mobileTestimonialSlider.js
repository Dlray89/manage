import React  from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation } from "swiper/core";
import { testimonials } from "../../../data/testimonialData";
import { Avatar } from "@material-ui/core";

import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";

SwiperCore.use([Pagination, Navigation]);

const MobileTestimonialSlider = () => {
  return (
    <div className="testimonial">
      <h3 className="testimonial__title">What they've said</h3>
      {" "}
      <Swiper
        navigation={true}
   
        pagination={{
          "clickable":true
        }}
        className="testimonial__mySwiper">
        {testimonials.map((item) => (
          <SwiperSlide className="testimonial__mySwiper--swiperBox">
            <div className="testimonial__mySwiper--swiperBox__details">
              <section className="testimonial__mySwiper--swiperBox__details--avatar-box">
                {" "}
                <Avatar src={item.img} style={{width:'20%', height:'20%', margin:'0 auto'}} />
              </section>
              <section className="testimonial__mySwiper--swiperBox__details--name-box">
                <h4>{item.name}</h4>
              </section>
              <section className="testimonial__mySwiper--swiperBox__details--review-box">
                <p>{item.review}</p>
              </section>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="testimonial__getStarted-btn">
      <div className='btn'>Get Started</div>
      </div>
    </div>
  );
};

export default MobileTestimonialSlider;
