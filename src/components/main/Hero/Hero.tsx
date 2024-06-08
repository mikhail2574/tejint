import { Wrapper } from "@/app/GlobalStyles";
import {
  SectionContainer,
  Header,
  Logo,
  DesktopNav,
  MobileBurger,
  MainTitle,
  MainTitleLogo,
  MainSubtitle,
  MainDescription,
  HeroButton,
  ImageFilterContainer,
} from "./Hero.styles";
import { Icon } from "@/components/common/Icon";

export default function Hero() {
  return (
    <SectionContainer>
      <ImageFilterContainer>
        <Header>
          <Logo name="logo" size={40}></Logo>
          <DesktopNav>desktop nav</DesktopNav>
          <MobileBurger>
            <Icon name="burger" size={24} />
          </MobileBurger>
        </Header>
        <Wrapper>
          <MainTitle>TEJINT</MainTitle>
          <MainTitleLogo name="logo2" width={148} height={80}></MainTitleLogo>
          <MainSubtitle>Bespoke tailoring</MainSubtitle>
          <MainDescription>
            Crafting elegance, tailoring perfection: your journey begins here
          </MainDescription>
          <HeroButton>Book an appointment</HeroButton>
        </Wrapper>
      </ImageFilterContainer>
    </SectionContainer>
  );
}
