import { BeSpoke } from "@/components/bespoke/BeSpoke";
import { BeSpokeSuits } from "@/components/bespoke/BeSpokeSuits";
import { Certificates } from "@/components/bespoke/Certificates";
import { Fabrics } from "@/components/bespoke/Fabrics";
import { Header } from "@/components/bespoke/Header";
import { Prices } from "@/components/bespoke/Prices";
import { Quality } from "@/components/bespoke/Quality";
import { Footer } from "@/components/main/Footer";
import { Form } from "@/components/main/Form";

export default function Home() {
  return (
    <main>
      <Header />
      <BeSpoke />
      <Fabrics />
      <Quality />
      <BeSpokeSuits />
      <Certificates />
      <Prices />
      <Form />
      <Footer />
    </main>
  );
}
