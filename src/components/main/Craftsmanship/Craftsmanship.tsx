import {
  AppointmentButton,
  Section,
  SectionDescription,
  SectionTitle,
  Wrapper,
} from "@/app/GlobalStyles";
import Image from "next/image";
import craftmanship_mobile from "/src/assets/craftsmanship_mobile.webp";

export default function Craftsmanship() {
  return (
    <Wrapper>
      <Section>
        <SectionTitle>Craftsmanship</SectionTitle>
        <SectionDescription className="mb-5">
          In the world of bespoke tailoring, craftsmanship reigns supreme. At
          the core of our artistry lies a dedication to unparalleled
          craftsmanship, a commitment to excellence that sets us apart in an age
          of mass production and fleeting trends.
          <br />
          <br />
          Each garment we create is a testament to the centuries-old tradition
          of tailoring, where precision, skill, and attention to detail converge
          to form masterpieces of sartorial elegance. From the moment fabric is
          selected to the final stitch, every aspect of the tailoring process is
          executed with meticulous care and unwavering passion.
          <br />
          <br />
          Our skilled artisans, with years of experience honing their craft,
          imbue each garment with a sense of artistry and refinement that simply
          cannot be replicated by machines. Their hands work tirelessly to
          transform raw materials into bespoke creations that exude
          sophistication and character.
        </SectionDescription>
        <AppointmentButton>Book an appointment</AppointmentButton>
        <Image src={craftmanship_mobile} alt="touch the black suit" />
      </Section>
    </Wrapper>
  );
}
