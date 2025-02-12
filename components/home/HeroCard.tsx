import React from "react";
import Text from "../Text";

interface HeroCardProps {
  heading: string;
  description: string;
  cta: React.ReactNode;
}

function HeroCard(props: HeroCardProps) {
  const { heading, description, cta } = props;

  return (
    <div className="grid place-items-start">
      <div className="lg:max-w-lg bg-background rounded-[3rem] p-10 md:p-16 grid gap-6 place-items-start shadow-lg">
        <h1>
          <Text variant="h1">{heading}</Text>
        </h1>
        <p className="text-muted-foreground">
          <Text variant="h2">{description}</Text>
        </p>
        {cta}
      </div>
    </div>
  );
}

export default HeroCard;
