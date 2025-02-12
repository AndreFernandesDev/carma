import React from "react";

interface HeroMediaProps {
  src: string;
}

function HeroMedia(props: HeroMediaProps) {
  const { src } = props;

  return (
    <div className="w-full h-full relative flex-1 aspect-square max-h-[520px]">
      <img src={src} className="absolute object-contain w-full h-full" />
    </div>
  );
}

export default HeroMedia;
