"use client";
import { Wrapper } from "@/app/GlobalStyles";
import {
  DesktopNav,
  MobileBurger,
  NavButtonItem,
  NavButton,
  NavButtonsList,
  StyledLogo,
  HeaderSection,
} from "./Header.styles";
import { Icon } from "@/components/common/Icon";
import { Burger } from "@/components/main/Burger";

export default function Header() {
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
    <Wrapper>
      <HeaderSection className="mb-5">
        <a href="/">
          <StyledLogo name="logo" size={40}></StyledLogo>
        </a>
        <DesktopNav>
          <NavButtonsList>
            <NavButtonItem>
              <NavButton href="/">Home</NavButton>
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
              <NavButton href="/#contacts">Contact us</NavButton>
            </NavButtonItem>
          </NavButtonsList>
          <NavButton className="socialLink" href="www.instagram.com">
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
        <Burger />
      </HeaderSection>
    </Wrapper>
  );
}
