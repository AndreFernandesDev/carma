import React from "react";

function HeroDecoration() {
  return (
    <>
      <div className="absolute inset-x-0 top-0 block xl:hidden h-96 -z-10 bg-secondary rounded-b-xl"></div>
      <div className="absolute inset-x-0 top-0 block h-64 left-1/3 xl:hidden -z-10 bg-black/10 rounded-b-xl"></div>
      <div className="absolute inset-x-0 top-0 block h-32 left-1/2 xl:hidden -z-10 bg-black/10 rounded-b-xl"></div>

      <img
        src="hero_bg.svg"
        className="absolute inset-y-0 right-0 hidden w-2/5 h-full xl:block -z-10"
      />

      <div className="absolute bottom-0 left-0 w-full isolate -z-20 xl:w-2/3 h-2/5 xl:h-3/5">
        <div className="absolute z-20 w-full h-1/3 bg-gradient-to-b from-background to-transparent"></div>
        <img
          src="hero_trees.png"
          className="absolute inset-0 z-10 object-cover w-full h-full"
        />
      </div>
    </>
  );
}

export default HeroDecoration;
