"use client";

import styles from "./Hero.module.scss";
import { Pagination, EffectFade, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { HeroSlide } from "./HeroSlide";

const DUMMY_SLIDES = [
  {
    id: "s1",
    img: "/chair.png",
    title: "Office furniture",
    text: `Deep v you probably haven't heard of them banh mi synth actually
    affogato.  Aesthetic lyft ethical drinking vinegar austint`,
  },
  {
    id: "s2",
    img: "/chair.png",
    title: "Bedroom furniture",
    text: `Deep v you probably haven't heard of them banh mi synth actually
    affogato. Aesthetic lyft ethical drinking vinegar austint`,
  },
  {
    id: "s3",
    img: "/chair.png",
    title: "Bathroom furniture",
    text: `Deep v you probably haven't heard of them banh mi synth actually
    affogato. Aesthetic lyft ethical drinking vinegar austint`,
  },
];

export const Hero = () => {
  return (
    <Swiper
      className={styles.hero}
      modules={[Pagination]}
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
