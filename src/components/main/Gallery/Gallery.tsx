"use client";
import Image from "next/image";
import { SectionTitle, Wrapper, Section } from "@/app/GlobalStyles";
import { TextOnImage, TextOnImageContainer } from "./Gallery.styles";
import "swiper/css";
import Swiper from "swiper";
import { useEffect } from "react";
import mobile_photo_1 from "/src/assets/gallery/gallery_mobile_1.webp";

export default function Gallery() {
  useEffect(() => {
    const swiper = new Swiper(".swiper", {
      speed: 400,
      spaceBetween: 100,
    });
  }, []);

  return (
    <Section>
      <Wrapper>
        <SectionTitle>Gallery</SectionTitle>
        <div className="swiper mb-10">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <Image src={mobile_photo_1} alt="elite blue suit" />
            </div>
            <div className="swiper-slide">
              <Image src={mobile_photo_1} alt="elite blue suit" />
            </div>
            <div className="swiper-slide">
              <Image src={mobile_photo_1} alt="elite blue suit" />
            </div>
          </div>
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </div>
        <TextOnImageContainer>
          <TextOnImage>
            &quot;Bespoke tailoring: Where every stitch weaves a story of
            timeless elegance, crafted with precision and
            <br /> passion to adorn the individuality of each wearer.&quot;
          </TextOnImage>
        </TextOnImageContainer>
      </Wrapper>
    </Section>
  );
}
