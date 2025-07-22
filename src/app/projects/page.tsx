"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";
import "@splidejs/react-splide/css";

const PROJECTS = [
  {
    id: 1,
    name: "Reimagine Porsche - A Digital Brand Experience",
    description: `Reimagine Porsche is a dynamic, visually immersive web application crafted to reintroduce the legacy, innovation, and design excellence of the Porsche brand. Built as part of a creative tech challenge, the project features a seamless blend of interactive UI elements, rich animations, and informative storytelling.`,
    link: "https://errorcreators-reimagine-round2.vercel.app/",
    images: [
      "/assets/projects-screenshots/ReimaginePorsche/1.png",
      "/assets/projects-screenshots/ReimaginePorsche/2.png",
      "/assets/projects-screenshots/ReimaginePorsche/3.png",
      "/assets/projects-screenshots/ReimaginePorsche/4.png",
      "/assets/projects-screenshots/ReimaginePorsche/5.png",
      "/assets/projects-screenshots/ReimaginePorsche/6.png",
    ],
  },
  {
    id: 2,
    name: "Food Nutritionist App",
    description: `A sophisticated nutrition analysis and meal recommendation system specialized for Indian cuisine. This application combines advanced data science techniques with traditional Indian food knowledge to provide personalized meal plans while considering regional preferences and nutritional requirements.`,
    link: "https://nutritionist-17.streamlit.app/",
    images: [
      "/assets/projects-screenshots/foodnutritionist/1.png",
      "/assets/projects-screenshots/foodnutritionist/2.png",
      "/assets/projects-screenshots/foodnutritionist/3.png",
    ],
  },
  {
    id: 3,
    name: "Portfolio",
    description: `Welcome to my digital playground, where creativity meets code in the
            dopest way possible.`,
    link: "https://vikram-gupta.me/",
    images: [
      "/assets/projects-screenshots/portfolio/1.png",
      "/assets/projects-screenshots/portfolio/2.png",
      "/assets/projects-screenshots/portfolio/3.png",
      "/assets/projects-screenshots/portfolio/4.png",
      "/assets/projects-screenshots/portfolio/5.png",
    ],
  },
  {
    id: 4,
    name: "Bank Mangement System",
    description: `Designed to focus on operational efficiency and user satisfaction,
            the system utilizes advanced database features like stored
            procedures, triggers, and functions to automate processes, reduce
            errors, and provide a seamless banking experience.`,
    link: "https://github.com/Vikramcs17/Bank_Management_System",
    images: [
      "/assets/projects-screenshots/bank/1.png",
    ],
  },
  {
    id: 5,
    name: "Solar System",
    description: `The Solar System Simulation project is a comprehensive 3D computer
            graphics application developed using OpenGL and GLUT in C++. The
            primary objective of this project is to visually demonstrate the
            dynamic behavior of celestial bodies, including their rotation on
            their respective axes and revolution around the sun, while
            incorporating accurate texturing, lighting, and motion to enhance
            realism.`,
    link: "https://github.com/Vikramcs17/Solar-System",
    images: [
      "/assets/projects-screenshots/solarsystem/1.png",
      "/assets/projects-screenshots/solarsystem/2.png",
      "/assets/projects-screenshots/solarsystem/3.png",
      "/assets/projects-screenshots/solarsystem/4.png",
      "/assets/projects-screenshots/solarsystem/5.png",
    ],
  },
];
function Page() {
  return (
    <>
      <div className="container mx-auto pt-[100px] md:px-[50px] xl:px-[200px] text-zinc-300 h-full">
        <h1 className=" text-4xl mt-[0px] mb-[50px]">Projects</h1>
        <ul className="grid  md:grid-cols-2 lg:grid-cols-3 gap-10 place-content-around ">
          {PROJECTS.map((project) => (
            <li
               className="w-full max-w-[400px] h-[520px] border border-zinc-600 rounded-lg overflow-hidden shadow-md"
              key={project.id}
              style={{ backdropFilter: "blur(2px)" }}
            >
              <div className="h-[200px]">
                <Splide
                  options={{
                    type: "loop",
                    interval: 3000,
                    autoplay: true,
                    speed: 2000,
                    perMove: 1,
                    rewind: true,
                    easing: "cubic-bezier(0.25, 1, 0.5, 1)",
                    arrows: false,
                  }}
                  aria-label="My Favorite Images"
                >
                  {project.images.map((image) => (
                    <SplideSlide key={image}>
                      <Image
                        src={image}
                        alt={`screenshot of "${project.name}`}
                         className="w-full h-[220px] object-cover"
  width={400}
  height={220}
                        style={{ height: "200px" }}
                      />
                    </SplideSlide>
                  ))}
                </Splide>
              </div>
              <div className="p-4 text-zinc-300 ">
                <h2 className="text-xl">{project.name}</h2>
                <p className="mt-2 text-xs text-zinc-500">
                  {project.description}
                </p>
              <div className="mt-[10px]">
              <Link href={project.link} target="_blank">
              <Button className="bg-black text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded-md border border-black  w-fit whitespace-nowrap">
                View Website
                <ArrowUpRight className="ml-3 w-5 h-5" />
              </Button>
              </Link>
              </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Page;
