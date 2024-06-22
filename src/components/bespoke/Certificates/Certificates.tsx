import {
  AppointmentButton,
  OnlyDesktop,
  OnlyMobile,
  SectionTitle,
  Wrapper,
} from "@/app/GlobalStyles";
import {
  FlexDesktopContainer,
  FormContainer,
  FormInput,
  FormInputContainer,
  FormTitle,
  Label,
  OrderButton,
  SectionContainer,
  SectionDescription,
  StyledWrapper,
} from "./Certificates.style";
import Image from "next/image";
import certificate_mobile from "/src/assets/certificate_mobile.webp";
import about_desktop from "/src/assets/about_desktop.webp";

export default function Certificates() {
  return (
    <>
      <Wrapper>
        <SectionContainer>
          <FlexDesktopContainer>
            <SectionTitle>Gift Certificate</SectionTitle>
            <OnlyMobile>
              <Image
                src={certificate_mobile}
                alt="gift card for friend"
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
            <SectionDescription>
              Gift certificates for tailoring is unlimited freedom.
              <br />
              Stylish men&apos;s clothing, tailored to order, is the dream of
              every man. A certificate for tailoring suits will help you realize
              this dream. By giving such a certificate, you will solve two
              problems at once: you will get rid of the need to search and
              choose a worthy gift, and you will also receive a guarantee that
              the recipient will certainly like such a gift.
            </SectionDescription>
          </FlexDesktopContainer>
        </SectionContainer>
      </Wrapper>
      <FormContainer className="mt-10">
        <StyledWrapper>
          <FormTitle>Order certificate</FormTitle>
          <FormInputContainer>
            <Label>Name</Label>
            <FormInput name="name" type="text" />
          </FormInputContainer>
          <FormInputContainer>
            <Label>Contact number</Label>
            <FormInput name="number" type="phone" />
          </FormInputContainer>
          <FormInputContainer>
            <Label>Amount</Label>
            <FormInput name="amount" type="number" />
          </FormInputContainer>
        </StyledWrapper>
        <OrderButton>Order</OrderButton>
      </FormContainer>
    </>
  );
}
