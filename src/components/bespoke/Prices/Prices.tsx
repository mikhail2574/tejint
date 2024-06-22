import {
  AppointmentButton,
  OnlyDesktop,
  OnlyMobile,
  SectionTitle,
  Wrapper,
} from "@/app/GlobalStyles";
import {
  FlexDesktopContainer,
  Price,
  PriceBrown,
  PriceItem,
  PriceList,
  SectionContainer,
  SectionDescription,
} from "./Prices.styles";
import Image from "next/image";
import price_mobile from "/src/assets/price_mobile.webp";
import about_desktop from "/src/assets/about_desktop.webp";

export default function About() {
  return (
    <Wrapper>
      <SectionContainer className="mt-10">
        <FlexDesktopContainer>
          <SectionTitle>Prices</SectionTitle>
          <OnlyMobile>
            <Image
              src={price_mobile}
              alt="cutting the material for clothings"
              className="mb-10"
            />
          </OnlyMobile>
          <OnlyDesktop>
            <Image
              src={about_desktop}
              alt="cutting the material for clothings"
              className="mb-10"
              height={630}
            />
          </OnlyDesktop>
          <SectionDescription>
            Each person is an individual. It is obvious that everyone has basic
            preferences, starting from the style of a suit, a shirt, finishing
            with the desired fabric or even a jewelry insert. These are the
            criteria that affect the cost. The destination is also taken into
            account. For example, the price of a wedding suit for the groom will
            be higher than the cost of casual trousers and a jacket. On average,
            we provide tailoring services for men&apos;s clothing at the
            following prices:
          </SectionDescription>
          <PriceList>
            <PriceItem>
              <Price>
                Suits - from
                <PriceBrown> $1,100</PriceBrown>
              </Price>
            </PriceItem>
            <PriceItem>
              <Price>
                Cufflinks - from
                <PriceBrown> $100</PriceBrown>
              </Price>
            </PriceItem>
            <PriceItem>
              <Price>
                Shirts - from
                <PriceBrown> $150</PriceBrown>
              </Price>
            </PriceItem>
            <PriceItem>
              <Price>
                Belts - from
                <PriceBrown> $100</PriceBrown>
              </Price>
            </PriceItem>
            <PriceItem>
              <Price>
                Ties - from
                <PriceBrown> $75</PriceBrown>
              </Price>
            </PriceItem>
            <PriceItem>
              <Price>
                Scarves - from
                <PriceBrown> $100</PriceBrown>
              </Price>
            </PriceItem>
          </PriceList>
        </FlexDesktopContainer>
      </SectionContainer>
    </Wrapper>
  );
}
