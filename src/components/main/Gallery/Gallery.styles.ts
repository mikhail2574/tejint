"use client";
import styled from "@emotion/styled";
import text_on_image_mobile from "/src/assets/gallery/text_on_image_mobile.webp";
import arrow_left from "/src/assets/formkit_arrowleft.svg";
import arrow_right from "/src/assets/formkit_arrowright.svg";
import gallery_desktop from "/src/assets/gallery_desktop.webp";
import { Wrapper } from "@/app/GlobalStyles";

export const StyledWrapper = styled(Wrapper)`
  .swiper-container {
    position: relative;
    width: 100%;
    margin-bottom: 190px;
  }
  .swiper-button-prev,
  .swiper-button-next {
    position: absolute;
    top: auto;
    bottom: -92px !important; /* Расположение от нижнего края */
    z-index: 10;
    width: 44px;
    height: 44px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    background-repeat: no-repeat;
  }
  .swiper-button-prev::after,
  .swiper-button-next::after {
    content: "";
  }
  .swiper-button-prev {
    left: 78px !important;
    background-image: url(${arrow_left.src});
    width: 64px;
  }
  .swiper-button-next {
    right: 78px !important;
    background-image: url(${arrow_right.src});
    width: 64px;
  }
`;

export const TextOnImageContainer = styled.div`
  background-image: url(${text_on_image_mobile.src});
  padding: 26px 0;
  @media screen and (min-width: 1440px) {
    background-image: url(${gallery_desktop.src});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    margin-bottom: 100px;
  }
`;

export const TextOnImage = styled.p`
  font-size: 16px;
  line-height: 22px;
  color: white;
  text-align: center;
  @media screen and (min-width: 1440px) {
    font-size: 40px;
    line-height: 36px;
    padding: 80px 188px;
  }
`;
