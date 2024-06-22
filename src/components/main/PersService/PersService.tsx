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
import persService_mobile from "/src/assets/persService_mobile.webp";
import persService_desktop from "/src/assets/persService_desktop.webp";
import { FlexDesktopContainer } from "../About/About.styles";

export default function PersService() {
  return (
    <Wrapper>
      <Section className="flex-normal">
        <OnlyDesktop>
          <Image src={persService_desktop} alt="Owners name on the suit" />
        </OnlyDesktop>
        <FlexDesktopContainer>
          <SectionTitle className="start">Personalized service</SectionTitle>
          <SectionDescription className="mb-5">
            Our commitment to personalized service lies at the heart of
            everything we do, setting us apart in the world of bespoke
            tailoring. From the moment you step into our atelier, you are
            welcomed by a dedicated team of experts who are passionate about
            helping you bring your sartorial vision to life. We understand that
            true luxury lies in the details, which is why we take the time to
            listen attentively to your needs, desires, and style preferences.
            Whether you&apos;re seeking a bespoke suit for a special occasion or
            refining your everyday wardrobe with custom shirts and trousers, our
            knowledgeable staff are here to guide you through every step of the
            process.
            <br />
            <br /> With a focus on individuality and craftsmanship, we offer a
            wide range of customization options, allowing you to choose from
            premium fabrics, select unique detailing, and create garments that
            are a true reflection of your personality and style. From initial
            consultations to final fittings, our personalized service ensures
            that every aspect of your garment is tailored to perfection,
            ensuring a fit that is both flattering and comfortable.
            <br />
            <br /> Beyond mere measurements and fittings, our personalized
            service extends to building lasting relationships with our clients,
            fostering trust, loyalty, and satisfaction
          </SectionDescription>
          <AppointmentButton>Book an appointment</AppointmentButton>
        </FlexDesktopContainer>
        <OnlyMobile>
          <Image src={persService_mobile} alt="Owners name on the suit" />
        </OnlyMobile>
      </Section>
    </Wrapper>
  );
}
