"use client";

import Description from "./Description";
import ProfilPicture from "./ProfilPicture";

export default function HomeHeader() {
  return (
    <div className="flex flex-col pb-4 gap-5 justify-center items-center text-center">
      <ProfilPicture />
      <Description />
    </div>
  );
}
