import { Wrapper } from "@/app/GlobalStyles";
import {
  AdvantagesList,
  AdvantageItem,
  AdvantageNumber,
  AdvantageImage,
  AdvantageDescription,
} from "./Advantages.styles";

export default function Advantages() {
  return (
    <Wrapper>
      <AdvantagesList>
        <AdvantageItem>
          <AdvantageImage>
            <AdvantageNumber>1</AdvantageNumber>
          </AdvantageImage>
          <AdvantageDescription>Quality</AdvantageDescription>
        </AdvantageItem>
        <AdvantageItem>
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
  );
}
