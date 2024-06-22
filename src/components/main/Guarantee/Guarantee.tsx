import {
  AppointmentButton,
  OnlyDesktop,
  OnlyMobile,
  Section,
  SectionDescription,
  SectionTitle,
  Wrapper,
} from "@/app/GlobalStyles";
import Image from "next/image";
import guarantee_mobile from "/src/assets/guarantee_mobile.webp";
import guarantee_desktop from "/src/assets/guarantee_desktop.webp";
import { FlexDesktopContainer } from "../About/About.styles";

export default function Guarantee() {
  return (
    <Wrapper>
      <Section>
        <OnlyDesktop>
          <Image src={guarantee_desktop} alt="Owners name on the suit" />
        </OnlyDesktop>
        <FlexDesktopContainer>
          <SectionTitle className="start">Lifetime guarantee</SectionTitle>
          <SectionDescription className="mb-5">
            We stand behind the quality and fit of our bespoke garments with a
            lifetime guarantee. If you have lost weight or, on the contrary,
            gained a little weight, we will exchange your shirt or suit for
            another size free of charge.
            <br />
            Our commitment to craftsmanship extends beyond the initial purchase,
            ensuring that our clients continue to look and feel their best
            throughout life&apos;s changes.
          </SectionDescription>
          <AppointmentButton>Book an appointment</AppointmentButton>
        </FlexDesktopContainer>
        <OnlyMobile>
          <Image src={guarantee_mobile} alt="Owners name on the suit" />
        </OnlyMobile>
      </Section>
    </Wrapper>
  );
}
