"use client";

import { Sparkles } from "lucide-react";
import Badge from "@/components/Badge";
import CarouselLogos from "@/components/CarouselLogos";
import Text from "@/components/Text";

interface HeroLogosProps {
  logos: {
    src: string;
    description: string;
  }[];
}

function HeroLogos(props: HeroLogosProps) {
  const { logos } = props;

  return (
    <div className="w-full grid gap-8">
      <div className="container flex w-full px-6 mx-auto">
        <Badge
          icon={<Sparkles className="size-5" />}
          label={
            <Text variant="h6" className="text-sm md:text-lg">
              Trusted by over 500 UK business
            </Text>
          }
        />
      </div>

      <CarouselLogos logos={logos} />
    </div>
  );
}

export default HeroLogos;
