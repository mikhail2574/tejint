import { About } from "@/components/main/About";
import { Advantages } from "@/components/main/Advantages";
import { Attention } from "@/components/main/Attention";
import { Contacts } from "@/components/main/Contacts";
import { Craftsmanship } from "@/components/main/Craftsmanship";
import { Footer } from "@/components/main/Footer";
import { Form } from "@/components/main/Form";
import Gallery from "@/components/main/Gallery/Gallery";
import { Guarantee } from "@/components/main/Guarantee";
import { Hero } from "@/components/main/Hero";
import PersService from "@/components/main/PersService/PersService";
import { Process } from "@/components/main/Process";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Advantages />
      <Gallery />
      <Craftsmanship />
      <PersService />
      <Attention />
      <Guarantee />
      <Process />
      <Contacts />
      <Form />
      <Footer />
    </main>
  );
}
