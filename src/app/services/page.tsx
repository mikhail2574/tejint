import { Header } from "@/components/bespoke/Header";
import { Footer } from "@/components/main/Footer";
import { Form } from "@/components/main/Form";
import { ServicesInformation } from "@/components/services/ServicesInformation";

export default function Home() {
  return (
    <main>
      <Header />
      <ServicesInformation />
      <Form />
      <Footer />
    </main>
  );
}
