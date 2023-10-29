"use client";

import Image from "next/image";
import styles from "./Collection.module.scss";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export const Collection = () => {
  return (
    <Swiper
      className={styles.collection}
      modules={[Autoplay]}
      spaceBetween={30}
      slidesPerView={5}
      loop={true}
      breakpoints={{
        200: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        576: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1200: {
          slidesPerView: 5,
          spaceBetween: 50,
        },
      }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}>
      <SwiperSlide className={styles.slide}>
        <Image
          src="/collections/coll1.jpg"
          alt="collections photo"
          width={350}
          height={350}
          loading="lazy"
        />
        <div className={styles.content}>
          <h3 className={styles.title}>Truffaut literally trust</h3>
          <div className={styles.divider}></div>
          <p className={styles.text}>Living room furntiture | Chair</p>
        </div>
      </SwiperSlide>
      <SwiperSlide className={styles.slide}>
        <Image
          src="/collections/coll2.jpg"
          alt="collections photo"
          width={350}
          height={350}
          loading="lazy"
        />
        <div className={styles.content}>
          <h3 className={styles.title}>Truffaut literally trust</h3>
          <div className={styles.divider}></div>
          <p className={styles.text}>Living room furntiture | Chair</p>
        </div>
      </SwiperSlide>
      <SwiperSlide className={styles.slide}>
        <Image
          src="/collections/coll3.jpg"
          alt="collections photo"
          width={350}
          height={350}
          loading="lazy"
        />
        <div className={styles.content}>
          <h3 className={styles.title}>Truffaut literally trust</h3>
          <div className={styles.divider}></div>
          <p className={styles.text}>Living room furntiture | Chair</p>
        </div>
      </SwiperSlide>
      <SwiperSlide className={styles.slide}>
        <Image
          src="/collections/coll4.jpg"
          alt="collections photo"
          width={350}
          height={350}
          loading="lazy"
        />
        <div className={styles.content}>
          <h3 className={styles.title}>Truffaut literally trust</h3>
          <div className={styles.divider}></div>
          <p className={styles.text}>Living room furntiture | Chair</p>
        </div>
      </SwiperSlide>
      <SwiperSlide className={styles.slide}>
        <Image
          src="/collections/coll5.jpg"
          alt="collections photo"
          width={350}
          height={350}
          loading="lazy"
        />
        <div className={styles.content}>
          <h3 className={styles.title}>Truffaut literally trust</h3>
          <div className={styles.divider}></div>
          <p className={styles.text}>Living room furntiture | Chair</p>
        </div>
      </SwiperSlide>
      <SwiperSlide className={styles.slide}>
        <Image
          src="/collections/coll6.jpg"
          alt="collections photo"
          width={350}
          height={350}
          loading="lazy"
        />
        <div className={styles.content}>
          <h3 className={styles.title}>Truffaut literally trust</h3>
          <div className={styles.divider}></div>
          <p className={styles.text}>Living room furntiture | Chair</p>
        </div>
      </SwiperSlide>
      <SwiperSlide className={styles.slide}>
        <Image
          src="/collections/coll7.jpg"
          alt="collections photo"
          width={350}
          height={350}
          loading="lazy"
        />
        <div className={styles.content}>
          <h3 className={styles.title}>Truffaut literally trust</h3>
          <div className={styles.divider}></div>
          <p className={styles.text}>Living room furntiture | Chair</p>
        </div>
      </SwiperSlide>
      <SwiperSlide className={styles.slide}>
        <Image
          src="/collections/coll8.jpg"
          alt="collections photo"
          width={350}
          height={350}
          loading="lazy"
        />
        <div className={styles.content}>
          <h3 className={styles.title}>Truffaut literally trust</h3>
          <div className={styles.divider}></div>
          <p className={styles.text}>Living room furntiture | Chair</p>
        </div>
      </SwiperSlide>
      <SwiperSlide className={styles.slide}>
        <Image
          src="/collections/coll9.jpg"
          alt="collections photo"
          width={350}
          height={350}
          loading="lazy"
        />
        <div className={styles.content}>
          <h3 className={styles.title}>Truffaut literally trust</h3>
          <div className={styles.divider}></div>
          <p className={styles.text}>Living room furntiture | Chair</p>
        </div>
      </SwiperSlide>
      <SwiperSlide className={styles.slide}>
        <Image
          src="/collections/coll10.jpg"
          alt="collections photo"
          width={350}
          height={350}
          loading="lazy"
        />
        <div className={styles.content}>
          <h3 className={styles.title}>Truffaut literally trust</h3>
          <div className={styles.divider}></div>
          <p className={styles.text}>Living room furntiture | Chair</p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
