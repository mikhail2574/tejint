"use client";
import styled from "@emotion/styled";
import hero_mobile from "/src/assets/hero_mobile.webp";
import hero_desktop from "/src/assets/hero_desktop.webp";
import { Icon } from "@/components/common/Icon";

export const SectionContainer = styled.section`
  background-image: url(${hero_mobile.src});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  margin-bottom: 40px;

  @media screen and (min-width: 1440px) {
    background-image: url(${hero_desktop.src});
  }

  .socialLink {
    margin-left: 49px;
    margin-right: 20px;
  }

  .language {
    gap: 16px;
  }
`;

export const ImageFilterContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.52);
  position: relative;
  @media screen and (min-width: 1440px) {
    background-color: rgba(0, 0, 0, 0.34);
  }
`;

export const Header = styled.header`
  height: 50px;
  background-color: rgba(255, 255, 255, 0.5);
  display: flex;
  justify-content: space-between;
  padding: 5px 16px;
  margin-bottom: 178px;
  @media screen and (min-width: 1440px) {
    height: 94px;
  }
`;

export const Logo = styled(Icon)``;

export const DesktopNav = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 1440px) {
    display: none;
  }
`;

export const MobileBurger = styled.button`
  @media screen and (min-width: 1440px) {
    display: none;
  }
`;

export const BurgerIcon = styled(Icon)``;

export const MainTitle = styled.h1`
  display: none;
`;

export const MainTitleLogo = styled(Icon)`
  margin: 0 auto;
  margin-bottom: 8px;

  width: 148px !important;
  height: 80px !important;

  @media screen and (min-width: 1440px) {
    width: 237px !important;
    height: 130px !important;
  }
`;

export const MainSubtitle = styled.h2`
  font-weight: 400;
  font-size: 32px;
  line-height: 40px;
  text-align: center;
  color: white;
  margin-bottom: 16px;
  @media screen and (min-width: 1440px) {
    font-size: 48px;
    line-height: 80px;
  }
`;

export const MainDescription = styled.p`
  font-size: 24px;
  line-height: 28px;
  text-align: center;
  margin: 0 auto;
  width: 344px;
  color: white;
  margin-bottom: 262px;
  @media screen and (min-width: 1440px) {
    font-size: 32px;
    line-height: 80px;
    width: 100%;
    margin-bottom: 36px;
  }
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

  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out,
    border 0.3s ease-in-out;
  :hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }

  @media screen and (min-width: 1440px) {
    padding: 12px 32px;
    width: 221px;
    text-align: center;
    margin-bottom: 240px;
  }
`;

export const NavButtonsList = styled.ul`
  display: flex;
  gap: 32px;
  align-items: center;
`;

export const NavButtonItem = styled.li``;

export const NavButton = styled.a`
  font-size: 20px;
  line-height: 22.5px;
`;

export const StyledLogo = styled(Icon)`
  @media screen and (min-width: 1440px) {
    width: 53px !important;
    height: 75px !important;
  }
`;

export const HeaderSection = styled.nav`
  overflow: hidden;
  padding-top: 5px;
  display: flex;
  justify-content: space-between;
  @media screen and (min-width: 1440px) {
    border-bottom: 1px solid black;
  }
`;
