import { Head } from "$fresh/runtime.ts";
import Header from "../components/Header.tsx";
import Hero from "../components/Hero.tsx";
import Description from "../components/Description.tsx";
import Footer from "../components/Footer.tsx";
import Works from "../components/Works.tsx";
import Skills from "../components/Skills.tsx";
import Contact from "../islands/Contact.tsx";
import Scroll from "../islands/Scroll.tsx";
export default function Home() {
  return (
    <>
      <Head>
        <title>Stead08のポートフォリオ</title>
      </Head>
      <div class="flex justify-center">
        <Header active="/" />
      </div>
      <div class="mx-auto max-w-screen-lg px-2 pt-10 md:pb-[25.5rem]">
        <Scroll />
        <div class="space-y-10">
          <Hero />
          <Description />
          <Works />
          <Skills />
          <Contact />
        </div>
      </div>
      <div className="flex justify-center">
        <Footer />
      </div>
    </>
  );
}
