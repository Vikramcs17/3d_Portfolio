import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import {
  ArrowDownUpIcon,
  ArrowUpRight,
  ExternalLink,
  Link2,
  MoveUpRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
  SiVite,
  SiNetlify,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiApachemaven,
  SiCplusplus,
  SiArduino,
  SiVercel,
  SiValorant,
  SiMysql,
  SiOpengl,
  SiStreamlit,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import css from "styled-jsx/css";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: "",
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
  // +
  vite: {
    title: "Vite",
    bg: "black",
    fg: "white",
    icon: <SiVite />,
  },
  openai: {
    title: "OpenAI",
    bg: "black",
    fg: "white",
    icon: <img src="assets/icons/openai-svgrepo-com_white.svg" alt="OpenAI" />,
  },
  netlify: {
    title: "Netlify",
    bg: "black",
    fg: "white",
    icon: <SiNetlify />,
  },
  vercel: {
    title: "Vercel",
    bg: "black",
    fg: "white",
    icon: <SiVercel />,
  },
  html: {
    title: "HTML5",
    bg: "black",
    fg: "white",
    icon: <SiHtml5 />,
  },
  css: {
    title: "CSS3",
    bg: "black",
    fg: "white",
    icon: <SiCss3 />,
  },
  bootstrap: {
    title: "Bootstrap",
    bg: "black",
    fg: "white",
    icon: <SiBootstrap />,
  },
  maven: {
    title: "Maven",
    bg: "black",
    fg: "white",
    icon: <SiApachemaven />,
  },
  java: {
    title: "Java",
    bg: "black",
    fg: "white",
    icon: <img src="assets/icons/icons8-java.svg" alt="Java" />,
  },
  cplusplus: {
    title: "C++",
    bg: "black",
    fg: "white",
    icon: <SiCplusplus />,
  },
  arduino: {
    title: "Arduino",
    bg: "black",
    fg: "white",
    icon: <SiArduino />,
  },
  Pl_sql: {
    title: "Pl/SQL",
    bg: "black",
    fg: "white",
    icon: <SiMysql />,
  },
  Open_GL: {
    title: "openGL",
    bg: "black",
    fg: "white",
    icon: <SiOpengl />,
  },
  streamlit: {
    title: "streamlit",
    bg: "black",
    fg: "white",
    icon: <SiStreamlit />,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  {
    // 01. Reimagine Porsche - A Digital Brand Experience
    id: "Reimagine Porsche - A Digital Brand Experience",
    category: "Frontend",
    title: "Reimagine Porsche - A Digital Brand Experience",
    src: "/assets/projects-screenshots/ReimaginePorsche/1.png",
    screenshots: ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png"],
    live: "https://errorcreators-reimagine-round2.vercel.app/",
    github: "https://github.com/Vikramcs17/Errorcreators_ReimagineRound2",
    skills: {
      frontend: [
        PROJECT_SKILLS.html,
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.css,
        // PROJECT_SKILLS.vite,
      ],
      backend: [PROJECT_SKILLS.vercel],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Reimagine Porsche is a dynamic, visually immersive web application
            crafted to reintroduce the legacy, innovation, and design excellence
            of the Porsche brand. Built as part of a creative tech challenge,
            the project features a seamless blend of interactive UI elements,
            rich animations, and informative storytelling.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow
            images={[
              `${BASE_PATH}/ReimaginePorsche/1.png`,
              `${BASE_PATH}/ReimaginePorsche/2.png`,
              `${BASE_PATH}/ReimaginePorsche/3.png`,
              `${BASE_PATH}/ReimaginePorsche/4.png`,
              `${BASE_PATH}/ReimaginePorsche/5.png`,
              `${BASE_PATH}/ReimaginePorsche/6.png`,
            ]}
          />
        </div>
      );
    },
  },
  {
    // 02. Food Nutritionist App
    id: "Food Nutritionist App",
    category: "AI/ML",
    title: "Food Nutritionist App",
    src: "/assets/projects-screenshots/foodnutritionist/2.png",
    screenshots: ["/assets/projects-screenshots/foodnutritionist/2.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.streamlit,
        PROJECT_SKILLS.python,
      ],
      backend: [],
    },
    live: "https://nutritionist-17.streamlit.app/",
    github: "https://github.com/Vikramcs17/nutritionist",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Food Nutritionist App
          </TypographyP>
          <TypographyP className="font-mono ">
            A sophisticated nutrition analysis and meal recommendation system
            specialized for Indian cuisine. This application combines advanced
            data science techniques with traditional Indian food knowledge to
            provide personalized meal plans while considering regional
            preferences and nutritional requirements.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow
            images={[
              `${BASE_PATH}/foodnutritionist/1.png`,
              `${BASE_PATH}/foodnutritionist/2.png`,
              `${BASE_PATH}/foodnutritionist/3.png`,
            ]}
          />
        </div>
      );
    },
  },
  {
    // 03. Portfolio project
    id: "portfolio",
    category: "Portfolio",
    title: "My Portfolio",
    src: "/assets/projects-screenshots/portfolio/1.png",
    screenshots: ["/assets/projects-screenshots/portfolio/1.png"],
    live: "https://vikram-gupta.me/",
    github: "https://github.com/Vikramcs17/3d_Portfolio",
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.shadcn,
        PROJECT_SKILLS.aceternity,
        PROJECT_SKILLS.framerMotion,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.spline,
      ],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Welcome to my digital playground, where creativity meets code in the
            dopest way possible.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">
            Beautiful 3D Objects{" "}
          </TypographyH3>
          <p className="font-mono mb-2">
            Did you see that 3D keyboard modal? Yeah! I made that. That
            interactive keyboard is being rendered in 3D on a webpage 🤯, and
            pressing each keycap reveals a skill in a goofy way. It&apos;s like
            typing, but make it art.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/portfolio/1.png`,
              `${BASE_PATH}/portfolio/2.png`,
            ]}
          />
          <TypographyH3 className="my-4 ">Space Theme</TypographyH3>
          <p className="font-mono mb-2">
            Dark background + floating particles = out-of-this-world cool.
          </p>
          <SlideShow images={[`${BASE_PATH}/portfolio/5.png`]} />
          <TypographyH3 className="my-4 mt-8">Projects</TypographyH3>

          <p className="font-mono mb-2">
            My top personal and freelance projects — no filler, all killer.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/portfolio/4.png`,
              `${BASE_PATH}/portfolio/3.png`,
            ]}
          />
          <p className="font-mono mb-2 mt-8 text-center">
            This site&apos;s not just a portfolio — it&apos;s a whole vibe.
          </p>
        </div>
      );
    },
  },
  {
    // 04. Bank Mangement System
    id: "Bank Mangement System",
    category: "Database",
    title: "Bank Mangement System",
    src: "/assets/projects-screenshots/bank/1.png",
    screenshots: ["1.png"],
    live: "https://github.com/Vikramcs17/Bank_Management_System",
    github: "https://github.com/Vikramcs17/Bank_Management_System",
    skills: {
      frontend: [],
      backend: [PROJECT_SKILLS.cplusplus, PROJECT_SKILLS.Pl_sql],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Designed to focus on operational efficiency and user satisfaction,
            the system utilizes advanced database features like stored
            procedures, triggers, and functions to automate processes, reduce
            errors, and provide a seamless banking experience.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow
            images={[
              `${BASE_PATH}/bank/1.png`,
            ]}
          />
        </div>
      );
    },
  },
  {
    // 05. Solar System
    id: "Solar System",
    category: "OpenGL",
    title: "Solar System",
    src: "/assets/projects-screenshots/solarsystem/1.png",
    screenshots: [
      "01.png",
      "02.png",
      "03.png",
      "04.png",
      "05.png",
    ],
    live: "https://github.com/Vikramcs17/Solar-System",
    github: "https://github.com/Vikramcs17/Solar-System",
    skills: {
      frontend: [
        PROJECT_SKILLS.html,
        PROJECT_SKILLS.Open_GL,
        PROJECT_SKILLS.cplusplus,
      ],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            The Solar System Simulation project is a comprehensive 3D computer
            graphics application developed using OpenGL and GLUT in C++. The
            primary objective of this project is to visually demonstrate the
            dynamic behavior of celestial bodies, including their rotation on
            their respective axes and revolution around the sun, while
            incorporating accurate texturing, lighting, and motion to enhance
            realism.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow
            images={[
              `${BASE_PATH}/solarsystem/1.png`,
              `${BASE_PATH}/solarsystem/2.png`,
              `${BASE_PATH}/solarsystem/3.png`,
              `${BASE_PATH}/solarsystem/4.png`,
              `${BASE_PATH}/solarsystem/5.png`,
            ]}
          />
        </div>
      );
    },
  },
  // {
  //   // 06. Savinder Puri portfolio project
  //   id: "savinderpurisportfolio",
  //   category: "Web Development",
  //   title: "Savinder Puri Portfolio",
  //   src: "/assets/projects-screenshots/savinderpuriportfolio/01.png",
  //   screenshots: ["01.png", "02.png", "03.png", "04.png", "05.png"],
  //   live: "https://savinder-puri.vercel.app/",
  //   github: "https://github.com/Abhiz2411/savinder-puri",
  //   skills: {
  //     frontend: [
  //       PROJECT_SKILLS.js,
  //       PROJECT_SKILLS.next,
  //       PROJECT_SKILLS.tailwind,
  //       PROJECT_SKILLS.vite,
  //     ],
  //     backend: [],
  //   },
  //   get content() {
  //     return (
  //       <div>
  //         <TypographyP className="font-mono ">
  //           Step into the digital world of Savinder Puri, the beloved DevOps
  //           guru and Spiritual Alchemist, with this responsive portfolio
  //           website. 🌐✨ Explore his inspiring journey, milestones, and
  //           life-changing services blending tech and spirituality. Built with
  //           modern tools like React and TypeScript, it’s a heartfelt tribute to
  //           a mentor who transforms lives. 💻🕊️ Crafted with ❤️ by Abhijit
  //           Zende! 🚀
  //         </TypographyP>
  //         <ProjectsLinks live={this.live} repo={this.github} />
  //         <SlideShow
  //           images={[
  //             `${BASE_PATH}/savinderpuriportfolio/01.png`,
  //             `${BASE_PATH}/savinderpuriportfolio/02.png`,
  //             `${BASE_PATH}/savinderpuriportfolio/03.png`,
  //             `${BASE_PATH}/savinderpuriportfolio/04.png`,
  //             `${BASE_PATH}/savinderpuriportfolio/05.png`,
  //           ]}
  //         />
  //       </div>
  //     );
  //   },
  // },
];
export default projects;
