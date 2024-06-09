import {
  AppointmentButton,
  Section,
  SectionDescription,
  SectionTitle,
  Wrapper,
} from "@/app/GlobalStyles";
import Image from "next/image";
import attention_mobile from "/src/assets/attention_mobile.webp";

export default function Attention() {
  return (
    <Wrapper>
      <Section>
        <SectionTitle>Attention to detail</SectionTitle>
        <SectionDescription className="mb-5">
          At Tejint, we pride ourselves on our unwavering commitment to
          attention to detail, a cornerstone of our bespoke tailoring
          philosophy. From the initial consultation to the final fitting, every
          aspect of our process is meticulously executed to ensure the highest
          standards of craftsmanship and quality. Our skilled artisans
          painstakingly handcraft each garment with precision and care, paying
          close attention to every stitch, seam, and finishing detail. It is
          this dedication to perfection that sets our creations apart, elevating
          them from mere clothing to works of art. We understand that it&apos;s
          the small details that make all the difference, which is why we offer
          a wide range of customization options to suit your individual
          preferences. Whether it&apos;s selecting the perfect fabric, choosing
          unique buttons and linings, or adding personalized monograms, we
          ensure that every garment is tailored to reflect your unique style and
          personality.
        </SectionDescription>
        <AppointmentButton>Book an appointment</AppointmentButton>
        <Image src={attention_mobile} alt="Owners name on the suit" />
      </Section>
    </Wrapper>
  );
}
