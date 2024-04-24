import { ReactElement } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contacts from "@/components/Contacts";
import Footer from "@/components/Footer";

const Home = (): ReactElement => {
  return (
    <main className="w-screen h-screen bg-black text-neutral-100 grid place-content-center">
      <Navbar />
      <section className="text-neutral-100 w-full max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8">
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