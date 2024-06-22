import { OnlyDesktop, OnlyMobile, Section, Wrapper } from "@/app/GlobalStyles";
import {
  BackgroundWrapper,
  FormForm,
  BgFilterWrapper,
  FormInput,
  FormSubmit,
  FormTitle,
  FormInfoContainer,
  FormSelect,
  InputContainer,
} from "./Form.styles";

export default function Form() {
  return (
    <Section id="form">
      <BackgroundWrapper>
        <BgFilterWrapper>
          <Wrapper>
            <FormTitle>Book an appointment</FormTitle>
            <FormForm>
              <OnlyMobile>
                <FormInfoContainer>
                  <FormInput placeholder="Title" />
                  <FormInput placeholder="First name*" required />
                  <FormInput placeholder="Last name*" required />
                  <FormInput placeholder="Contact number*" required />
                  <FormInput placeholder="Email address*" required />
                  <FormSelect>
                    <option disabled selected value="">
                      Select the city
                    </option>
                    <option value="kyiv">Kyiv</option>
                    <option value="dubai">Dubai</option>
                    <option value="london">London</option>
                  </FormSelect>
                </FormInfoContainer>
              </OnlyMobile>
              <OnlyDesktop>
                <FormInfoContainer>
                  <InputContainer>
                    <label>Title</label>
                    <FormInput />
                  </InputContainer>
                  <InputContainer>
                    <label>First name*</label>
                    <FormInput required />
                  </InputContainer>
                  <InputContainer>
                    <label>Last name*</label>
                    <FormInput required />
                  </InputContainer>
                  <InputContainer>
                    <label>Contact number*</label>
                    <FormInput required />
                  </InputContainer>
                  <InputContainer>
                    <label>Email address*</label>
                    <FormInput required />
                  </InputContainer>
                  <InputContainer>
                    <label>City</label>
                    <FormSelect>
                      <option disabled selected value="">
                        Select the city
                      </option>
                      <option value="kyiv">Kyiv</option>
                      <option value="dubai">Dubai</option>
                      <option value="london">London</option>
                    </FormSelect>
                  </InputContainer>
                </FormInfoContainer>
              </OnlyDesktop>
              <FormSubmit>Book an appointment</FormSubmit>
            </FormForm>
          </Wrapper>
        </BgFilterWrapper>
      </BackgroundWrapper>
    </Section>
  );
}
