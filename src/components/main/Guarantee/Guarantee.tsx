import {
  AppointmentButton,
  Section,
  SectionDescription,
  SectionTitle,
  Wrapper,
} from "@/app/GlobalStyles";
import Image from "next/image";
import guarantee_mobile from "/src/assets/guarantee_mobile.webp";

export default function Guarantee() {
  return (
    <Wrapper>
      <Section>
        <SectionTitle>Lifetime guarantee</SectionTitle>
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
        <Image src={guarantee_mobile} alt="Owners name on the suit" />
      </Section>
    </Wrapper>
  );
}
