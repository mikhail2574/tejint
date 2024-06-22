import { Wrapper } from "@/app/GlobalStyles";
import {
  BurgerButton,
  BurgerContainer,
  FlexContainer,
  FlexItem,
  FlexItemItem,
} from "./Burger.styles";

export default function Burger() {
  return (
    <BurgerContainer id="checkColor" className="disabled">
      <Wrapper>
        <FlexContainer>
          <FlexItem>
            <FlexItemItem>
              <BurgerButton>ENG</BurgerButton>
            </FlexItemItem>
            <FlexItemItem>
              <BurgerButton>UA</BurgerButton>
            </FlexItemItem>
          </FlexItem>
          <FlexItem>
            <FlexItemItem>
              <BurgerButton href="/#gallery">Gallery</BurgerButton>
            </FlexItemItem>
            <FlexItemItem>
              <BurgerButton href="/services">Services</BurgerButton>
            </FlexItemItem>
            <FlexItemItem>
              <BurgerButton href="/bespoke">Bespoke</BurgerButton>
            </FlexItemItem>
            <FlexItemItem>
              <BurgerButton href="#form">Contact us</BurgerButton>
            </FlexItemItem>
          </FlexItem>
        </FlexContainer>
      </Wrapper>
    </BurgerContainer>
  );
}
