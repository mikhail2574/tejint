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
} from "./BeSpoke.styles";
import Image from "next/image";
import bespoke_mobile from "/src/assets/BeSpoke_mobile.webp";
import about_desktop from "/src/assets/about_desktop.webp";

export default function BeSpoke() {
  return (
    <Wrapper>
      <SectionContainer>
        <SectionTitle>Our bespoke tailoring</SectionTitle>
        <OnlyMobile>
          <Image
            src={bespoke_mobile}
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
            At Tejint, we specialize in providing unparalleled bespoke tailoring
            services that are tailored to suit the individual needs and
            preferences of each client. With a focus on superior craftsmanship,
            attention to detail, and personalized service, we ensure that every
            men&apos;s suit we create exceeds our clients&apos; expectations.
            <br />
            <br />
            Our experienced team of tailors takes pride in delivering impeccable
            fit and comfort with every bespoke suit, shirt, or trousers we
            craft. By taking precise measurements and utilizing traditional
            tailoring techniques, we guarantee garments that not only look
            exceptional but also feel effortless to wear.
            <br />
            <br /> When you choose Tejint, you gain access to a wide range of
            customization options, allowing you to create garments that truly
            reflect your personal style and preferences. From selecting premium
            fabrics to choosing design details and finishes, our bespoke
            tailoring service empowers you to express your individuality through
            your clothing.
            <br />
            <br /> Moreover, our commitment to personalized service ensures that
            every client receives the attention and care they deserve throughout
            the tailoring process. From the initial consultation to the final
            fitting, our team is dedicated to guiding you through every step and
            ensuring a seamless and enjoyable experience from start to finish.
            <br />
            <br />
            In summary, when you choose Tejint for your bespoke tailoring needs,
            you can trust that you are choosing excellence, quality, and
            personalized service. Experience the difference of bespoke tailoring
            with us and elevate your wardrobe to new heights of style and
            sophistication.
          </SectionDescription>
          <AppointmentButton>Book an appointment</AppointmentButton>
        </FlexDesktopContainer>
      </SectionContainer>
    </Wrapper>
  );
}
