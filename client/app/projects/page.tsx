import React from "react";
import { Navigation } from "../components/nav";
import HomeHeader from "../components/HomeHeader";
import CardProject from "../components/CardProject";
import CardProject1 from "../components/CardProject1";
import { RiSwordFill } from "react-icons/ri";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";

export const revalidate = 60;
export default async function ProjectsPage() {
  return (
    <div className="h-screen">
      <Navigation />

      <div className="pt-20 md:pt-24">
        <HomeHeader />

        <div className="w-full h-px bg-zinc-800" />

        <div className="w-4/4">
          <div className="w-full p-4">
            <h2 className="text-white text-center mb-4 md:text-3xl font-secondary tracking-widest">
              Some realisations
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:mt-5">
              <CardProject1 title="InstaGrowth" status="In progress">
                InstaGrowth is an automation tool designed to boost your
                presence on Instagram. It automatically follows accounts, likes,
                and comments on posts while scraping and analyzing data to
                optimize your growth. Quickly grow your audience and increase
                your engagement !
              </CardProject1>
              <div className="flex flex-col gap-10">
                <CardProject
                  title="VisualDetect"
                  status="In progress"
                  icon={
                    <HiMiniMagnifyingGlass
                      style={{ color: "white", fontSize: "2em" }}
                    />
                  }
                >
                  VisualDetect is a tool that can recognize a specific object in
                  your picture. For instance, upload a photo of a parking area
                  and ask if there’s a car. The app will provide a direct and
                  accurate response, making it easy to analyze your images.
                </CardProject>
                <CardProject
                  title="PNPM VS NPM"
                  status="In progress"
                  icon={
                    <RiSwordFill style={{ color: "white", fontSize: "2em" }} />
                  }
                >
                  A simple article on why PNPM is a better choice than NPM for
                  package management.
                </CardProject>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-3"></div>
      </div>
    </div>
  );
}
