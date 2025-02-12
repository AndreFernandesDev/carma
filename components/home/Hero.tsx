import React from "react";
import HeroDecoration from "./HeroDecoration";
import { Button } from "../ui/button";
import HeroLogos from "./HeroLogos";
import config from "@/pages/home.json";
import HeroCard from "./HeroCard";
import HeroMedia from "./HeroMedia";

function Hero() {
  return (
    <section className="relative flex flex-col min-h-screen pt-32 pb-20 gap-8 md:pt-40">
      <HeroDecoration />
      <div className="container flex flex-col flex-1 px-6 mx-auto gap-10 md:gap-20 lg:flex-row">
        <HeroCard
          heading={config.hero.heading}
          description={config.hero.description}
          cta={<Button>{config.hero.cta}</Button>}
        />
        <HeroMedia src="hero_media.png" />
      </div>
      <HeroLogos logos={config.hero.logos} />
    </section>
  );
}

export default Hero;
