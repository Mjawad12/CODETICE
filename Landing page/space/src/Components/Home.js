import React from "react";
import Hero from "./Hero";
import Navbar from "./Navbar";
import LogosSec from "./LogosSec";
import Telescopes from "./Telescopes";
import RadioAstornomy from "./RadioAstornomy";
import NightSky from "./NightSky";
import Footer from "./Footer";

export default function Home() {
  return (
    <section className="home">
      <Navbar />
      <Hero />
      <LogosSec />

      <div className="Main">
        <div className="MainWrapper">
          <Telescopes />
          <RadioAstornomy />
          <NightSky />
        </div>
      </div>
      <Footer />
    </section>
  );
}
