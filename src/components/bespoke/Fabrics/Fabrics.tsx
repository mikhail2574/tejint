"use client";
import { Section, SectionTitle, Wrapper } from "@/app/GlobalStyles";
import Image from "next/image";
import { FabricImage, FabricList } from "./Fabrics.styles";
import fabric_1_mobile from "/src/assets/fabrics/fabrics_1_mobile.webp";
import fabric_2_mobile from "/src/assets/fabrics/fabrics_2_mobile.webp";
import fabric_3_mobile from "/src/assets/fabrics/fabrics_3_mobile.webp";
import fabric_4_mobile from "/src/assets/fabrics/fabrics_4_mobile.webp";
import fabric_5_mobile from "/src/assets/fabrics/fabrics_5_mobile.webp";
import fabric_6_mobile from "/src/assets/fabrics/fabrics_6_mobile.webp";
import fabric_7_mobile from "/src/assets/fabrics/fabrics_7_mobile.webp";
import fabric_8_mobile from "/src/assets/fabrics/fabrics_8_mobile.webp";

export default function Fabrics() {
  return (
    <Section>
      <Wrapper>
        <SectionTitle>Fabrics</SectionTitle>
        <FabricList>
          <FabricImage>
            <Image src={fabric_1_mobile} alt="scabal" />
          </FabricImage>
          <FabricImage>
            <Image src={fabric_2_mobile} alt="ermengildo zegna" />
          </FabricImage>
          <FabricImage>
            <Image src={fabric_3_mobile} alt="drago" />
          </FabricImage>
          <FabricImage>
            <Image src={fabric_4_mobile} alt="charles clayton" />
          </FabricImage>
          <FabricImage>
            <Image src={fabric_5_mobile} alt="loro piana" />
          </FabricImage>
          <FabricImage>
            <Image src={fabric_6_mobile} alt="cloth dormeuil" />
          </FabricImage>
          <FabricImage>
            <Image src={fabric_7_mobile} alt="holland and sherry" />
          </FabricImage>
          <FabricImage>
            <Image src={fabric_8_mobile} alt="tessitura monti" />
          </FabricImage>
        </FabricList>
      </Wrapper>
    </Section>
  );
}
