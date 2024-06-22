import { SectionTitle, Wrapper } from "@/app/GlobalStyles";
import {
  AdvantagesList,
  AdvantageItem,
  AdvantageNumber,
  AdvantageImage,
  AdvantageDescription,
  BackgroundFilter,
} from "./Advantages.styles";

export default function Advantages() {
  return (
    <BackgroundFilter>
      <Wrapper>
        <SectionTitle className="big-margin pt-12">Our advantages</SectionTitle>
        <AdvantagesList>
          <AdvantageItem>
            <AdvantageImage>
              <AdvantageNumber>1</AdvantageNumber>
            </AdvantageImage>
            <AdvantageDescription>Quality</AdvantageDescription>
          </AdvantageItem>
          <AdvantageItem className="extended">
            <AdvantageImage>
              <AdvantageNumber>2</AdvantageNumber>
            </AdvantageImage>
            <AdvantageDescription>Lifetime guarantee</AdvantageDescription>
          </AdvantageItem>
          <AdvantageItem>
            <AdvantageImage>
              <AdvantageNumber>3</AdvantageNumber>
            </AdvantageImage>
            <AdvantageDescription>Individuality</AdvantageDescription>
          </AdvantageItem>
        </AdvantagesList>
      </Wrapper>
    </BackgroundFilter>
  );
}
