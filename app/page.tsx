import { ReactElement } from "react";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contacts from "@/components/Contacts";
import Footer from "@/components/Footer";

const Home = (): ReactElement => {
  return (
    <main className="text-neutral-200">
      <Navbar />
      <section className="w-full max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8 py-6 md:py-12">
        <Hero />
        <Projects />
        <About />
        <Contacts />
      </section>
      <Footer />
    </main>
  );
}

export default Home