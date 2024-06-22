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
} from "./Quality.styles";
import Image from "next/image";
import quality_mobile from "/src/assets/quality_mobile.webp";
import about_desktop from "/src/assets/about_desktop.webp";

export default function Quality() {
  return (
    <Wrapper>
      <SectionContainer>
        <SectionTitle>Quality</SectionTitle>
        <OnlyMobile>
          <Image
            src={quality_mobile}
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
        <FlexDesktopContainer>
          <SectionDescription>
            At Tejint, we pride ourselves on sourcing only the finest fabrics
            from renowned mills around the world for our bespoke tailoring
            services. Our curated selection includes prestigious brands such as
            Charles Clayton, Scabal, Loro Piana, Fintes, Dormeuil, Holland &
            Sherry, and Ermenegildo Zegna. Each fabric is carefully chosen for
            its superior quality, luxurious texture, and impeccable
            craftsmanship, ensuring that every garment we create exudes elegance
            and sophistication. Whether you prefer the sumptuous feel of
            cashmere, the lightweight breathability of linen, or the timeless
            appeal of wool, our extensive range of fabrics offers something to
            suit every style and occasion. Experience the unparalleled luxury of
            bespoke tailoring with our exquisite selection of fabrics at Tejint.
          </SectionDescription>
          <AppointmentButton>Book an appointment</AppointmentButton>
        </FlexDesktopContainer>
      </SectionContainer>
    </Wrapper>
  );
}
