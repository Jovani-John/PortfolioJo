import { useEffect, useState } from "react";
import Card from "../Card/Card";
import AOS from "aos";
import "aos/dist/aos.css";

import TripleCommerceImg from "../../assets/imgs/Triple-Commerce.png";
import TriplePizzaImg from "../../assets/imgs/Triple-Pizza.png";
import AdGenixAgancyImg from "../../assets/imgs/AdGenix-Agancy.png";
import TripleHomeImg from "../../assets/imgs/Triple-Home.png";
import ECommerce from "../../assets/imgs/ECommerce.png";
import PortfolioImg from "../../assets/imgs/Portfolio.png";
import CommerceImg from "../../assets/imgs/E-Commerce.png";
import EducationImg from "../../assets/imgs/Education.png";
import CoatchingImg from "../../assets/imgs/Coatching.png";
import CafeImg from "../../assets/imgs/Cafe.png";
import ReactPortfolio from "../../assets/imgs/ReactPortfolio.png";
import FloatingFAIcons from "../BubblesBackground/FloatingFAIcons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import {
  faBootstrap,
  faCss3Alt,
  faHtml5,
  faJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";

export default function Projects() {
  useEffect(() => {
    AOS.init({ duration: 300, once: false, offset: 100 });
  }, []);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "CSS & HTML & JavaScript", "React", "Next"];

  const projects = [
    {
      title: "Triple Commerce",
      img: TripleCommerceImg,
      liveDemo:
        "https://triple-commerce-gftom676d-jovani-johns-projects.vercel.app/",
      repo: "https://github.com/Jovani-John/Triple-Commerce",
      description:
        "A modern E-Commerce website built with React.js and Firebase. Allows users to browse products, add them to cart or wishlist, and securely place orders. Features real-time updates, user authentication, and responsive design..",
      category: "React",
    },
    {
      title: "Triple Pizza",
      img: TriplePizzaImg,
      liveDemo: "https://triple-pizza.vercel.app/",
      repo: "https://github.com/Jovani-John/Triple-Pizza",
      description:
        "“Triple Pizza is a modern and responsive pizza restaurant website built with React and Tailwind CSS. It showcases delicious menus, highlights special offers, and provides an engaging experience for pizza lovers.”",
      category: "React",
    },
    {
      title: "AdGenix Agancy",
      img: AdGenixAgancyImg,
      liveDemo: "https://ad-genix-agancy.vercel.app/",
      repo: "https://github.com/Jovani-John/AdGenix-Agancy",
      description:
        "“AdGenixAgency is a modern digital agency website built with React and Tailwind CSS. It highlights creative services, showcases projects, and offers a clean, responsive experience for potential clients.”",
      category: "React",
    },
    {
      title: "Triple Home",
      img: TripleHomeImg,
      liveDemo: "https://real-home-steel.vercel.app/",
      repo: "https://github.com/Jovani-John/Real-Home",
      description:
        "“Triple Home is a modern real estate website built with React and Tailwind CSS. It features property listings, search filters, and a responsive design to help users find their perfect home.”",
      category: "React",
    },
    {
      title: "E-Commerce",
      img: ECommerce,
      liveDemo: "https://illustrious-cajeta-1430e7.netlify.app/",
      repo: "#",
      description:
        "A modern E-Commerce website built with HTML CSS AND JS. Allows users to browse products, add them to cart or wishlist, and securely place orders. Features real-time updates, user authentication, and responsive design.",
      category: "CSS & HTML & JavaScript",
    },
    {
      title: "Portfolio",
      img: PortfolioImg,
      liveDemo: "https://jovani-portfolio.vercel.app/",
      repo: "#",
      description:
        "responsive personal portfolio website built with React.js. Showcases projects, skills, and contact details with smooth navigation, animations, and a modern UI to highlight professional presence online..",
      category: "React",
    },

    {
      title: "E-Commerce",
      img: CommerceImg,
      liveDemo: "https://triple-ecommerce.vercel.app/",
      repo: "https://github.com/Jovani-John/Triple-Ecommerce",
      description:
        "Responsive e-commerce website built with React.js. Features product listings, shopping cart, and secure checkout with smooth navigation, engaging animations, and a modern UI to enhance the online shopping experience.",
      category: "React",
    },
    {
      title: "Education",
      img: EducationImg,
      liveDemo: "https://triple-education.vercel.app/",
      repo: "https://github.com/Jovani-John/Triple-Education",
      description:
        "Responsive educational platform built with React.js. Provides interactive coding tutorials, progress tracking, and quizzes with smooth navigation, engaging animations, and a modern UI to enhance the learning experience.",
      category: "React",
    },
    {
      title: "Coatching",
      img: CoatchingImg,
      liveDemo: "https://coaching-brown.vercel.app/",
      repo: "https://github.com/Jovani-John/Coaching",
      description:
        "Modern coaching website built with React, Next.js, and TypeScript. Delivers responsive design, seamless navigation, and interactive features with a clean UI to enhance user engagement and coaching sessions.",
      category: "Next",
    },
    {
      title: "Portfolio",
      img: ReactPortfolio,
      liveDemo: "#",
      repo: "#",
      description:
        "responsive personal portfolio website built with React.js. Showcases projects, skills, and contact details with smooth navigation, animations, and a modern UI to highlight professional presence online.",
      category: "React",
    },
    {
      title: "Cafe",
      img: CafeImg,
      liveDemo: "https://caf-aroma.vercel.app/",
      repo: "https://github.com/Jovani-John/Caf-Aroma",
      description:"Responsive cocktails café website built with React.js. Showcases creative drink menus, vibrant product images, and easy online ordering with smooth animations, modern UI, and an engaging browsing experience.",
      category: "React",
    },
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section
      id="Projects"
      className="relative scroll-mt-28 bg-black text-white py-16 md:py-20 overflow-hidden"
    >
      <FloatingFAIcons
        icons={[faCode, faHtml5, faCss3Alt, faJs, faReact, faBootstrap]} // أو خليها [faCode] بس
        count={10} // أقل عدد زي ما طلبت
        colors={["#60A5FA", "#34D399", "#FBBF24", "#F472B6", "#A78BFA"]}
        sizeRange={[20, 34]} // أكبر شوية وواضح
        duration={[12, 20]} // طفو هادي
        sway={22} // تمايل أفقي
      />
      {/* خلفية */}
      <div
        className="pointer-events-none absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            radial-gradient(circle at 50% 50%, rgba(59,130,246,0.18), transparent 45%),
            linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
          backgroundSize: "100% 100%, 60px 60px, 60px 60px",
        }}
      />

      <div className="relative container mx-auto px-6 md:px-20">
        {/* العنوان */}
        <div className="mb-8 text-center">
          <h2
            className="inline-block text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight
                       bg-gradient-to-r from-primary-300 via-primary-200 to-primary-50 bg-clip-text text-transparent
                       drop-shadow-[0_0_14px_rgba(59,130,246,0.25)]"
          >
            My Projects
          </h2>
          <div className="mx-auto mt-3 h-1 w-24 rounded-full bg-gradient-to-r from-primary-600 to-primary-400 shadow-[0_0_20px_rgba(59,130,246,0.6)]" />
          <p className="mx-auto mt-3 max-w-2xl text-white/70">
            Selected works focused on speed, accessibility, and clean UX.
          </p>
        </div>

        {/* أزرار الفلترة */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full border transition-all duration-300 ${
                selectedCategory === cat
                  ? "bg-primary-500 text-white border-primary-400"
                  : "bg-white/5 text-white/80 border-white/10 hover:bg-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* المشاريع */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={project.title}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="relative  rounded-2xl border border-white/10 bg-white/5 p-1 backdrop-blur-md
                          shadow-[0_0_24px_rgba(59,130,246,0.08)]
                          transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_34px_rgba(59,130,246,0.18)]"
            >
              <Card {...project} />
            </div>
          ))}
        </div>

        {/* ملاحظة */}
        <div className="mt-8 text-center text-xs text-white/50">
          * More projects available upon request.
        </div>
      </div>
    </section>
  );
}
