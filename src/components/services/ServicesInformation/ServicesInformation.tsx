import {
  AppointmentButton,
  OnlyDesktop,
  OnlyMobile,
  SectionTitle,
  Wrapper,
} from "@/app/GlobalStyles";
import {
  FlexDesktopContainer,
  SectionContainer,
  SectionDescription,
  SubTitle,
} from "./ServicesInformation.styles";
import Image from "next/image";
import services1_mobile from "/src/assets/services_1_mobile.webp";
import services2_mobile from "/src/assets/services_2_mobile.webp";
import about_desktop from "/src/assets/about_desktop.webp";

export default function ServicesInformation() {
  return (
    <Wrapper>
      <SectionContainer>
        <SectionTitle>Services</SectionTitle>
        <OnlyMobile>
          <Image
            src={services1_mobile}
            alt="warehouse of clothing"
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
        <SubTitle>Dry cleaning</SubTitle>
        <FlexDesktopContainer>
          <SectionDescription className="mb-10">
            At Tejint we go above and beyond to ensure your garments maintain
            their pristine condition even after alteration or creation.
            That&apos;s why we offer professional dry cleaning services to keep
            your bespoke pieces looking as impeccable as the day you received
            them.
          </SectionDescription>
          <OnlyMobile>
            <Image
              src={services2_mobile}
              alt="warehouse of clothing"
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
          <SubTitle>Offsite fitting</SubTitle>
          <SectionDescription className="mb-10">
            Experience the convenience of offsite fittings with Tejint. Our
            tailored services extend beyond the atelier, ensuring a seamless and
            personalized fitting experience wherever you are.This service is
            free of charge.
          </SectionDescription>
        </FlexDesktopContainer>
      </SectionContainer>
    </Wrapper>
  );
}
