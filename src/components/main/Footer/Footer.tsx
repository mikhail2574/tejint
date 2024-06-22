import { OnlyDesktop, OnlyMobile, Section, Wrapper } from "@/app/GlobalStyles";
import footer_logo from "/src/assets/footer_logo_mobile.webp";
import footer_desktop from "/src/assets/footer_desktop.webp";
import Image from "next/image";
import {
  FooterSect,
  LogoContainer,
  NavContainer,
  NavItem,
} from "./Footer.styles";

export default function Footer() {
  return (
    <Section>
      <Wrapper>
        <FooterSect>
          <NavContainer className="main">
            <NavContainer>
              <NavItem>About the company</NavItem>
              <NavItem>Bespoke</NavItem>
              <NavItem>Fabrics</NavItem>
            </NavContainer>
            <NavContainer>
              <NavItem>Gallery</NavItem>
              <NavItem>Services</NavItem>
              <NavItem>Book an appointment</NavItem>
            </NavContainer>
            <NavContainer>
              <NavItem>Address</NavItem>
              <NavItem>Opening hours</NavItem>
              <NavItem>Contact</NavItem>
            </NavContainer>
          </NavContainer>
          <LogoContainer>
            <OnlyMobile>
              <Image src={footer_logo} alt="big logo" />
            </OnlyMobile>
            <OnlyDesktop>
              <Image src={footer_desktop} alt="big logo" />
            </OnlyDesktop>
          </LogoContainer>
        </FooterSect>
      </Wrapper>
    </Section>
  );
}
