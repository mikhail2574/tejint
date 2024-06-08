"use client";
import styled from "@emotion/styled";
import hero_mobile from "/src/assets/hero_mobile.webp";
import { Icon } from "@/components/common/Icon";

export const SectionContainer = styled.section`
  background-image: url(${hero_mobile.src});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  margin-bottom: 40px;
`;

export const ImageFilterContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.52);
`;

export const Header = styled.header`
  height: 50px;
  background-color: rgba(255, 255, 255, 0.5);
  display: flex;
  justify-content: space-between;
  padding: 5px 16px;
  margin-bottom: 178px;
`;

export const Logo = styled(Icon)``;

export const DesktopNav = styled.div`
  @media screen and (max-width: 375px) {
    display: none;
  }
`;

export const MobileBurger = styled.button``;

export const BurgerIcon = styled(Icon)``;

export const MainTitle = styled.h1`
  display: none;
`;

export const MainTitleLogo = styled(Icon)`
  margin: 0 auto;
  margin-bottom: 8px;
`;

export const MainSubtitle = styled.h2`
  font-weight: 400;
  font-size: 32px;
  line-height: 40px;
  text-align: center;
  color: white;
  margin-bottom: 16px;
`;

export const MainDescription = styled.p`
  font-size: 24px;
  line-height: 28px;
  text-align: center;
  margin: 0 auto;
  width: 344px;
  color: white;
  margin-bottom: 262px;
`;

export const HeroButton = styled.button`
  padding: 18px 93px;
  width: 100%;
  border: 1px solid white;
  color: white;
  font-size: 16px;
  line-height: 24px;
  font-weight: 700;
  margin: 0 auto;
  letter-spacing: 0.5px;
  margin-bottom: 66px;
`;
