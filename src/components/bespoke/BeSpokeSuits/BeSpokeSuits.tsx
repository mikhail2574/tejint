"use client";
import { Section, SectionTitle, Wrapper } from "@/app/GlobalStyles";
import Image from "next/image";
import { Description, FabricImage, FabricList } from "./BeSpokeSuits.styles";
import suit_mobile from "/src/assets/suits/suit_mobile.webp";
import shirt_mobile from "/src/assets/suits/shirt_mobile.webp";
import trousers_mobile from "/src/assets/suits/trousers_mobile.webp";
import jacket_mobile from "/src/assets/suits/jacket_mobile.webp";
import vest_mobile from "/src/assets/suits/vest_mobile.webp";
import casual_mobile from "/src/assets/suits/casual_mobile.webp";
import overcoat_mobile from "/src/assets/suits/overcoat_mobile.webp";
import tuxedo_mobile from "/src/assets/suits/tuxedo_mobile.webp";
import accessories_mobile from "/src/assets/suits/accessories_mobile.webp";

export default function BeSpokeSuits() {
  return (
    <Section>
      <Wrapper>
        <SectionTitle>Bespoke tailoring</SectionTitle>
        <FabricList>
          <FabricImage>
            <Image src={suit_mobile} alt="suit" />
            <Description>Suit</Description>
          </FabricImage>
          <FabricImage>
            <Image src={shirt_mobile} alt="shirt" />
            <Description>Shirt</Description>
          </FabricImage>
          <FabricImage>
            <Image src={trousers_mobile} alt="trousers" />
            <Description>Trousers</Description>
          </FabricImage>
          <FabricImage>
            <Image src={jacket_mobile} alt="jacket" />
            <Description>Jacket</Description>
          </FabricImage>
          <FabricImage>
            <Image src={vest_mobile} alt="vest" />
            <Description>Vest</Description>
          </FabricImage>
          <FabricImage>
            <Image src={casual_mobile} alt="casual" />
            <Description>Casual</Description>
          </FabricImage>
          <FabricImage>
            <Image src={overcoat_mobile} alt="overcoat" />
            <Description>Overcoat</Description>
          </FabricImage>
          <FabricImage>
            <Image src={tuxedo_mobile} alt="tuxedo" />
            <Description>Tuxedo</Description>
          </FabricImage>
          <FabricImage>
            <Image src={accessories_mobile} alt="accessories" />
            <Description>Accessories</Description>
          </FabricImage>
        </FabricList>
      </Wrapper>
    </Section>
  );
}
