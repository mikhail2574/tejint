import { Section, Wrapper } from "@/app/GlobalStyles";
import {
  BackgroundWrapper,
  FormForm,
  BgFilterWrapper,
  FormInput,
  FormSubmit,
  FormTitle,
  FormInfoContainer,
  FormSelect,
} from "./Form.styles";

export default function Form() {
  return (
    <Section id="form">
      <BackgroundWrapper>
        <BgFilterWrapper>
          <Wrapper>
            <FormTitle>Book an appointmnet</FormTitle>
            <FormForm>
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
              <FormSubmit>Book an appointment</FormSubmit>
            </FormForm>
          </Wrapper>
        </BgFilterWrapper>
      </BackgroundWrapper>
    </Section>
  );
}
