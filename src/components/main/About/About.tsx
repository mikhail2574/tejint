import {
  AppointmentButton,
  OnlyDesktop,
  OnlyMobile,
  SectionDescription,
  SectionTitle,
  Wrapper,
} from "@/app/GlobalStyles";
import { FlexDesktopContainer, SectionContainer } from "./About.styles";
import Image from "next/image";
import about_mobile from "/src/assets/about_mobile.webp";
import about_desktop from "/src/assets/about_desktop.webp";

export default function About() {
  return (
    <Wrapper>
      <SectionContainer>
        <FlexDesktopContainer>
          <SectionTitle className="start">About us</SectionTitle>
          <SectionDescription>
            With more than 15 years of experience in the art of bespoke
            tailoring, Tejint stands as a testament to dedication and
            craftsmanship. Since our inception, we have been committed to
            providing our clients with impeccable service and exquisite garments
            tailored to perfection. From precise measurements to
            <br /> personalized fittings, we ensure that every client receives
            the attention and care they deserve, making their sartorial journey
            with us truly exceptional.
          </SectionDescription>
          <AppointmentButton>Book an appointment</AppointmentButton>
        </FlexDesktopContainer>
        <OnlyMobile>
          <Image
            src={about_mobile}
            alt="Measure of clothing size"
            className="mb-10"
          />
        </OnlyMobile>
        <OnlyDesktop>
          <Image
            src={about_desktop}
            alt="Measure of clothing size"
            className="mb-10"
            height={630}
          />
        </OnlyDesktop>
      </SectionContainer>
    </Wrapper>
  );
}
