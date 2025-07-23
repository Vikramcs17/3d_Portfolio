const config = {
  title: "Vikram Gupta | MERN Stack Developer",
  description: {
    long: "Explore the portfolio of Vikram, a Computer Science student with a growing passion for Frontend Development, UI/UX design, and a strong foundation in web technologies.",
    short:
      "Discover the portfolio of Vikram, Computer Science student solving real life problems.",
  },
  keywords: [
    "Vikram",
    "Vikram Gupta",
    "vikramgupta",
    "vikramgupta.me",
    "Vikram Gupta portfolio",
    "portfolio",
    "DevOps",
    "Development",
    "Database",
    "Insight Ledger",
    "Food Nutritionist",
    "creative technologist",
    "web development",
    "interactive websites",
    "GSAP",
    "React",
    "Next.js",
    // "Spline",
    "Framer Motion",
    "AWS",
    "DevSecOps",
    "AIOps",
    "Azure",
  ],
  author: "Vikram Gupta",
  email: "vikramgupta1704@gmail.com",
  site: "https://vikram-gupta.me/",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    linkedin: "https://www.linkedin.com/in/vikram-gupta-165152301/",
    instagram: "https://www.instagram.com/vikram_17_/",
    github: "https://github.com/Vikramcs17",
  },
};
export { config };
