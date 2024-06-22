"use client";
import Image from "next/image";
import { SectionTitle, Section } from "@/app/GlobalStyles";
import {
  StyledWrapper,
  TextOnImage,
  TextOnImageContainer,
} from "./Gallery.styles";
import "swiper/css";
import "swiper/swiper-bundle.css";
import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import { useEffect } from "react";
import mobile_photo_1 from "/src/assets/gallery/gallery_1_mobile.webp";
import mobile_photo_2 from "/src/assets/gallery/gallery_2_mobile.webp";
import mobile_photo_3 from "/src/assets/gallery/gallery_3_mobile.webp";
import mobile_photo_4 from "/src/assets/gallery/gallery_4_mobile.webp";
import mobile_photo_5 from "/src/assets/gallery/gallery_5_mobile.webp";
import mobile_photo_6 from "/src/assets/gallery/gallery_6_mobile.webp";
import mobile_photo_7 from "/src/assets/gallery/gallery_7_mobile.webp";
import mobile_photo_8 from "/src/assets/gallery/gallery_8_mobile.webp";
import mobile_photo_9 from "/src/assets/gallery/gallery_9_mobile.webp";
import mobile_photo_10 from "/src/assets/gallery/gallery_10_mobile.webp";
import mobile_photo_11 from "/src/assets/gallery/gallery_11_mobile.webp";
import { Icon } from "@/components/common/Icon";

export default function Gallery() {
  useEffect(() => {
    Swiper.use([Navigation]);
    const swiper = new Swiper(".swiper", {
      speed: 400,
      spaceBetween: 100,
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        1440: {
          slidesPerView: 4,
          spaceBetween: 20,
          centeredSlides: true,
          initialSlide: 7,
        },
      },
    });
  }, []);

  return (
    <>
      <Section id="gallery">
        <StyledWrapper>
          <SectionTitle>Gallery</SectionTitle>
          <div className="swiper-container">
            <div className="swiper mb-10">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <Image src={mobile_photo_1} alt="elite blue suit 1" />
                </div>
                <div className="swiper-slide">
                  <Image src={mobile_photo_2} alt="elite blue suit 2" />
                </div>
                <div className="swiper-slide">
                  <Image src={mobile_photo_3} alt="elite blue suit 3" />
                </div>
                <div className="swiper-slide">
                  <Image src={mobile_photo_4} alt="elite blue suit 4" />
                </div>
                <div className="swiper-slide">
                  <Image src={mobile_photo_5} alt="elite blue suit 5" />
                </div>
                <div className="swiper-slide">
                  <Image src={mobile_photo_6} alt="elite blue suit 6" />
                </div>
                <div className="swiper-slide">
                  <Image src={mobile_photo_7} alt="elite blue suit 7" />
                </div>
                <div className="swiper-slide">
                  <Image src={mobile_photo_8} alt="elite blue suit 8" />
                </div>
                <div className="swiper-slide">
                  <Image src={mobile_photo_9} alt="elite blue suit 9" />
                </div>
                <div className="swiper-slide">
                  <Image src={mobile_photo_10} alt="elite blue suit 10" />
                </div>
                <div className="swiper-slide">
                  <Image src={mobile_photo_11} alt="elite blue suit 11" />
                </div>
              </div>
            </div>
            <div className="swiper-button-prev gallery-control">
              <Icon name="arrow-left" width={64} />
            </div>
            <div className="swiper-button-next gallery-control"></div>
          </div>
        </StyledWrapper>
      </Section>
      <TextOnImageContainer>
        <TextOnImage>
          &quot;Bespoke tailoring: Where every stitch weaves a story of timeless
          elegance, crafted with precision and
          <br /> passion to adorn the individuality of each wearer.&quot;
        </TextOnImage>
      </TextOnImageContainer>
    </>
  );
}
