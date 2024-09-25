import React from "react";
import { Navigation } from "../components/nav";
import HomeHeader from "../components/HomeHeader";
import CardProject from "../components/cardProject";

export const revalidate = 60;
export default async function ProjectsPage() {
  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <HomeHeader />
        <div className="w-full h-px bg-zinc-800" />
        {/* <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 "> */}
        <div className="border w-4/4">
          {/* size: large card -> h-80 */}
          <div className="flex gap-10">
            <CardProject  title="Project 1" status="In progress">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur dicta quis, possimus tempore architecto non unde.
              Architecto veritatis magnam, autem eveniet fugiat dignissimos
              laboriosam tempora est illum consequuntur, labore vero!
            </CardProject>
            <div className="flex flex-col gap-10">
              <CardProject title="Project 2" status="In progress">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur dicta quis, possimus tempore architecto non unde.
                Architecto veritatis magnam, autem eveniet fugiat dignissimos
                laboriosam tempora est illum consequuntur, labore vero!
              </CardProject>
              <CardProject title="Article" status="online">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur dicta quis, possimus tempore architecto non unde.
                Architecto veritatis magnam, autem eveniet fugiat dignissimos
                laboriosam tempora est illum consequuntur, labore vero!
              </CardProject>
            </div>
          </div>
        </div>
        {/* </div> */}
        <div className="hidden w-full h-px md:block bg-zinc-800" />

        <div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-3"></div>
      </div>
    </div>
  );
}
