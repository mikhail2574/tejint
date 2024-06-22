"use client";
import { Wrapper } from "@/app/GlobalStyles";
import {
  SectionContainer,
  Header,
  Logo,
  DesktopNav,
  MobileBurger,
  MainTitle,
  MainTitleLogo,
  MainSubtitle,
  MainDescription,
  HeroButton,
  ImageFilterContainer,
  NavButtonItem,
  NavButton,
  NavButtonsList,
  StyledLogo,
} from "./Hero.styles";
import { Icon } from "@/components/common/Icon";
import { Burger } from "../Burger";

export default function Hero() {
  const switchBurger = () => {
    const container = document.getElementById("checkColor");
    if (container) {
      if (container.classList.contains("disabled")) {
        container.classList.remove("disabled");
      } else {
        container.classList.add("disabled");
      }
    }
    return 0;
  };

  return (
    <SectionContainer>
      <ImageFilterContainer id="containerColor">
        <Header>
          <a href="/">
            <StyledLogo name="logo" size={40}></StyledLogo>
          </a>
          <DesktopNav>
            <NavButtonsList>
              <NavButtonItem>
                <NavButton>Home</NavButton>
              </NavButtonItem>
              <NavButtonItem>
                <NavButton href="/bespoke">Bespoke</NavButton>
              </NavButtonItem>
              <NavButtonItem>
                <NavButton href="/services">Services</NavButton>
              </NavButtonItem>
              <NavButtonItem>
                <NavButton href="/#gallery">Gallery</NavButton>
              </NavButtonItem>
              <NavButtonItem>
                <NavButton href="#contacts">Contact us</NavButton>
              </NavButtonItem>
            </NavButtonsList>
            <NavButton className="socialLink">
              <Icon name="instagram" size={24} />
            </NavButton>
            <NavButtonsList className="language">
              <NavButtonItem>
                <NavButton>ENG</NavButton>
              </NavButtonItem>
              <NavButtonItem>
                <NavButton>UA</NavButton>
              </NavButtonItem>
            </NavButtonsList>
          </DesktopNav>
          <MobileBurger onClick={switchBurger}>
            <Icon name="burger" size={24} />
          </MobileBurger>
        </Header>
        <Burger />
        <Wrapper>
          <MainTitle>TEJINT</MainTitle>
          <MainTitleLogo name="logo2"></MainTitleLogo>
          <MainSubtitle>Bespoke tailoring</MainSubtitle>
          <MainDescription>
            Crafting elegance, tailoring perfection: your journey begins here
          </MainDescription>
          <HeroButton href="#form">Book an appointment</HeroButton>
        </Wrapper>
      </ImageFilterContainer>
    </SectionContainer>
  );
}
