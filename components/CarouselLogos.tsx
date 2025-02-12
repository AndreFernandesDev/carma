"use client";

import AutoScroll from "embla-carousel-auto-scroll";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface CarouselLogosProps {
  logos: {
    src: string;
    description: string;
  }[];
}

function CarouselLogos(props: CarouselLogosProps) {
  const { logos } = props;

  return (
    <div className="w-full overflow-hidden">
      <Carousel
        opts={{ loop: true }}
        plugins={[AutoScroll({ playOnInit: true })]}
      >
        <CarouselContent className="ml-0">
          {logos.map((logo, i) => (
            <CarouselItem
              key={i}
              className="w-full h-20 px-8 mx-2 bg-white grid place-items-center max-w-48 rounded-xl md:mx-8 shrink-0"
            >
              <img
                src={logo.src}
                alt={logo.description}
                className="block object-contain w-full h-1/2"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}

export default CarouselLogos;
