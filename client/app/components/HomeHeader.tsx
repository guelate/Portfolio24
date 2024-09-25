"use client";

import { Card } from "@/components/ui/card";
import Description from "./Description";
import ProfilPicture from "./ProfilPicture";
import { CardAnimation } from "./cardAnimation";

export default function HomeHeader() {
  return (
    <CardAnimation>
      <Card className="flex flex-col bg-transparent py-5 justify-center items-center text-center rounded .rounded-lg border border-zinc-500">
        <ProfilPicture />
        <Description />
      </Card>
    </CardAnimation>
  );
}
