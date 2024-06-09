import {
  AppointmentButton,
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
import { Icon } from "@/components/common/Icon";

export default function Contacts() {
  return (
    <Wrapper>
      <Section>
        <ContactsList>
          <ContactsItem>
            <FlexItem>
              <LocationContainer>
                <Icon name="location" size={24} />
                <TextContainer>
                  <SectionDescription className="font-bold">
                    Location:
                  </SectionDescription>
                  <SectionDescription>Kyiv, Ukraine</SectionDescription>
                  <SectionDescription>
                    Olesya Gonchara
                    <br /> 15/3 Street
                  </SectionDescription>
                </TextContainer>
              </LocationContainer>
              <LocationContainer>
                <Icon name="phone" size={24} />
                <TextContainer>
                  <SectionDescription className="font-bold">
                    Contact number:
                  </SectionDescription>
                </TextContainer>
              </LocationContainer>
            </FlexItem>
            <FlexItem>
              <LocationContainer>
                <Icon name="time" size={24} />
                <TextContainer>
                  <SectionDescription className="font-bold">
                    Working Hours:
                  </SectionDescription>
                  <SectionDescription>Monday - Friday:</SectionDescription>
                  <SectionDescription>09:30 am - 19:30 pm</SectionDescription>
                  <SectionDescription>Saturday - Sunday:</SectionDescription>
                  <SectionDescription>10:00 am - 17: 00 pm</SectionDescription>
                </TextContainer>
              </LocationContainer>
            </FlexItem>
          </ContactsItem>
          <ContactsItem>
            <FlexItem>
              <LocationContainer>
                <Icon name="location" size={24} />
                <TextContainer>
                  <SectionDescription className="font-bold">
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
                  <SectionDescription className="font-bold">
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
          <ContactsItem>
            <FlexItem>
              <LocationContainer>
                <Icon name="location" size={24} />
                <TextContainer>
                  <SectionDescription className="font-bold">
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
                    <SectionDescription className="font-bold">
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
        </ContactsList>
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
        <Image src={contacts_mobile} alt="view of clothing shop" />
      </Section>
    </Wrapper>
  );
}
