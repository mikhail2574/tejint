import {
  AppointmentButton,
  OnlyDesktop,
  OnlyMobile,
  Section,
  SectionDescription,
  SectionTitle,
  Wrapper,
} from "@/app/GlobalStyles";
import {
  ContactsItem,
  ContactsList,
  FlexItem,
  LocationContainer,
  SocialMediaItem,
  SocialMediaList,
  TextContainer,
} from "./Contacts.styles";
import Image from "next/image";
import contacts_mobile from "/src/assets/contacts_mobile.webp";
import contacts_desktop from "/src/assets/contacts_desktop.webp";
import { Icon } from "@/components/common/Icon";
import { DesktopNav, MobileBurger } from "../Hero/Hero.styles";

export default function Contacts() {
  return (
    <Wrapper>
      <DesktopNav>
        <SectionTitle className="m-auto big-margin">Contacts</SectionTitle>
      </DesktopNav>
      <Section id="contacts">
        <MobileBurger>
          <SectionTitle>Contacts</SectionTitle>
        </MobileBurger>
        <ContactsList>
          <ContactsItem className="loc1">
            <FlexItem>
              <LocationContainer>
                <Icon name="location" size={24} />
                <TextContainer>
                  <SectionDescription className="font-bold big-line-height">
                    Location:
                  </SectionDescription>
                  <SectionDescription>Kyiv, Ukraine</SectionDescription>
                  <SectionDescription className="no-width-limit">
                    <DesktopNav>Olesya Gonchara, 15/3 Street</DesktopNav>
                    <MobileBurger>
                      Olesya Gonchara
                      <br /> 15/3 Street
                    </MobileBurger>
                  </SectionDescription>
                </TextContainer>
              </LocationContainer>
              <LocationContainer>
                <Icon name="phone" size={24} />
                <TextContainer>
                  <SectionDescription className="font-bold big-line-height">
                    Contact number:
                  </SectionDescription>
                </TextContainer>
              </LocationContainer>
            </FlexItem>
            <FlexItem>
              <LocationContainer>
                <Icon name="time" size={24} />
                <TextContainer>
                  <SectionDescription className="font-bold big-line-height">
                    Working Hours:
                  </SectionDescription>
                  <OnlyMobile>
                    <SectionDescription>Monday - Friday:</SectionDescription>
                    <SectionDescription>09:30 am - 19:30 pm</SectionDescription>
                    <SectionDescription>Saturday - Sunday:</SectionDescription>
                    <SectionDescription>
                      10:00 am - 17: 00 pm
                    </SectionDescription>
                  </OnlyMobile>
                  <OnlyDesktop>
                    <SectionDescription>
                      Monday - Friday: 09:30 am - 19:30 pm
                    </SectionDescription>
                    <SectionDescription>
                      Saturday - Sunday: 10:00 am - 17: 00 pm
                    </SectionDescription>
                  </OnlyDesktop>
                </TextContainer>
              </LocationContainer>
            </FlexItem>
          </ContactsItem>
          <ContactsItem className="loc2">
            <FlexItem>
              <LocationContainer>
                <Icon name="location" size={24} />
                <TextContainer>
                  <SectionDescription className="font-bold big-line-height">
                    Location:
                  </SectionDescription>
                  <SectionDescription>Dubai, UAE</SectionDescription>
                </TextContainer>
              </LocationContainer>
            </FlexItem>
            <FlexItem>
              <LocationContainer>
                <Icon name="phone" size={24} />
                <TextContainer>
                  <SectionDescription className="font-bold big-line-height">
                    Contact number:
                  </SectionDescription>
                  <SectionDescription>
                    <a href="tel:971563460039">+971 56 346 0039</a>
                  </SectionDescription>
                  <SectionDescription>
                    <a href="tel:971565644265">+971 56 564 4265</a>
                  </SectionDescription>
                </TextContainer>
              </LocationContainer>
            </FlexItem>
          </ContactsItem>
          <ContactsItem className="loc3">
            <FlexItem>
              <LocationContainer>
                <Icon name="location" size={24} />
                <TextContainer>
                  <SectionDescription className="font-bold big-line-height">
                    Location:
                  </SectionDescription>
                  <SectionDescription>London, England</SectionDescription>
                </TextContainer>
              </LocationContainer>
            </FlexItem>
            <FlexItem>
              <FlexItem>
                <LocationContainer>
                  <Icon name="phone" size={24} />
                  <TextContainer>
                    <SectionDescription className="font-bold big-line-height">
                      Contact number:
                    </SectionDescription>
                    <SectionDescription>
                      <a href="tel:447379004094">+447379004094</a>
                    </SectionDescription>
                  </TextContainer>
                </LocationContainer>
              </FlexItem>
            </FlexItem>
          </ContactsItem>
          <ContactsItem className="loc4">
            <DesktopNav className="contacts">
              <SectionDescription className="mb-4 font-bold">
                Our social media:
              </SectionDescription>
              <SocialMediaList>
                <SocialMediaItem>
                  <a href="#">
                    <Icon name="instagram" />
                  </a>
                </SocialMediaItem>
                <SocialMediaItem>
                  <a href="#">
                    <Icon name="facebook" />
                  </a>
                </SocialMediaItem>
              </SocialMediaList>
            </DesktopNav>
          </ContactsItem>
        </ContactsList>
        <MobileBurger>
          <SectionDescription className="mb-4 mt-2 font-bold">
            Our social media:
          </SectionDescription>
          <SocialMediaList>
            <SocialMediaItem>
              <a href="#">
                <Icon name="instagram" />
              </a>
            </SocialMediaItem>
            <SocialMediaItem>
              <a href="#">
                <Icon name="facebook" />
              </a>
            </SocialMediaItem>
          </SocialMediaList>
        </MobileBurger>
        <MobileBurger>
          <Image src={contacts_mobile} alt="view of clothing shop" />
        </MobileBurger>
        <DesktopNav>
          <Image src={contacts_desktop} alt="view of clothing shop" />
        </DesktopNav>
      </Section>
    </Wrapper>
  );
}
