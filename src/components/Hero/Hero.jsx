"use client";

import styles from "./Hero.module.scss";
import { Pagination, EffectFade, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { HeroSlide } from "./HeroSlide";
import img from "../../../public/chair.png";

const DUMMY_SLIDES = [
  {
    id: "s1",
    img: img,
    title: "Office furniture",
    text: `Deep v you probably haven't heard of them banh mi synth actually
    affogato.  Aesthetic lyft ethical drinking vinegar austint`,
  },
  {
    id: "s2",
    img: img,
    title: "Bedroom furniture",
    text: `Deep v you probably haven't heard of them banh mi synth actually
    affogato. Aesthetic lyft ethical drinking vinegar austint`,
  },
  {
    id: "s3",
    img: img,
    title: "Bathroom furniture",
    text: `Deep v you probably haven't heard of them banh mi synth actually
    affogato. Aesthetic lyft ethical drinking vinegar austint`,
  },
];

export const Hero = () => {
  return (
    <Swiper
      className={styles.hero}
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      modules={[EffectFade, Pagination, Autoplay]}
      effect="fade">
      {DUMMY_SLIDES.map((slide) => (
        <SwiperSlide key={slide.id} className={styles["hero-slide"]}>
          <HeroSlide img={slide.img} title={slide.title} text={slide.text} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
