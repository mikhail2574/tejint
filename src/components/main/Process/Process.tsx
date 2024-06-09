import {
  AppointmentButton,
  Section,
  SectionDescription,
  SectionTitle,
  Wrapper,
} from "@/app/GlobalStyles";
import { Card, CardDescription, CardList, CardTitle } from "./Process.styles";

export default function About() {
  return (
    <Wrapper>
      <Section>
        <SectionTitle>The process</SectionTitle>
        <CardList>
          <Card>
            <CardTitle>Ordering the suit</CardTitle>
            <CardDescription>
              <SectionDescription>
                The process begins with an initial consultation where the client
                discusses their style preferences, fabric choices, and design
                details with the tailor. During this consultation, precise
                measurements are taken to ensure a perfect fit. The client
                selects the fabric and design elements for their bespoke suit,
                and the tailor provides guidance and expertise to bring their
                vision to life.
              </SectionDescription>
            </CardDescription>
          </Card>
          <Card>
            <CardTitle>Fitting</CardTitle>
            <CardDescription>
              <SectionDescription>
                After the initial consultation, the client attends one or more
                fitting sessions where they try on a mock-up or
                &quot;basted&quot; version of the suit. During these fittings,
                the tailor assesses the fit and makes any necessary adjustments
                to ensure the suit drapes elegantly and flatters the
                client&apos;s body. The fittings are an essential part of the
                process, allowing the client to see the progress of their suit
                and provide feedback to the tailor.
              </SectionDescription>
            </CardDescription>
          </Card>
          <Card>
            <CardTitle>Receiving the order</CardTitle>
            <CardDescription>
              <SectionDescription>
                Once the final fitting has been completed and the suit meets the
                client&apos;s expectations, the bespoke suit is carefully
                constructed using the chosen fabric and design details. After
                the suit has been finalized, it is pressed, packaged, and
                delivered to the client. The client receives their bespoke suit,
                tailored to perfection and ready to wear, ensuring a unique and
                personalized garment that reflects their individual style and
                preferences.
              </SectionDescription>
            </CardDescription>
          </Card>
        </CardList>
      </Section>
    </Wrapper>
  );
}
