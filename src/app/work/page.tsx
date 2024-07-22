"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css'

import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "Full Stack",
    title: "EverythingChelsea",
    description: " A fan website for Chelsea FC, built with Next.js and TypeScript for the frontend, Python and Go for the backend, PostgreSQL for data storage, and Stripe for payment processing.",
    stack: [{ name: "Nextjs" }, { name: "Typescript" }, { name: "Python" }, { name: "Go" }, { name: "PostgreSQL" }, { name: "stripe"}],
    image: "/chels1.jpg",
    live: "https://everythingchelsea.vercel.app/",
    github: "",
  },
  {
    num: "02",
    category: "Frontend",
    title: "Shutter Unit",
    description: "A photography website developed using Next.js and TypeScript, showcasing high-quality images and providing an engaging user experience",
    stack: [{ name: "Nextjs" }, { name: "Typescript" }],
    image: "/shutter1.jpg",
    live: "https://unitphoto.vercel.app/",
    github: "",
  },
  {
    num: "03",
    category: "Web scraping",
    title: "Facebook Marketplace Bot",
    description: "A bot for automating tasks on Facebook Marketplace, created using Selenium, Python, and integrated with Telegram for notifications.",
    stack: [{ name: "Selenium" }, { name: "Python"}, { name: "Telegram"}],
    image: "/pic07.jpg",
    live: "",
    github: "",
  },
  {
    num: "04",
    category: "Web scraping",
    title: "Draftkings MLB odds scraper",
    description: "A python script that scrapes Draftkings odds, created using Selenium and Python.",
    stack: [{ name: "Selenium" }, { name: "Python"}],
    image: "/pic07.jpg",
    live: "",
    github: "https://github.com/Chinedu-E/mlb-odds",
  },
  {
    num: "05",
    category: "Data analysis",
    title: "OC Transpo",
    description: "An analysis of various bus routes in Ottawa using Streamlit and Python to visualize and interpret transit data.",
    stack: [{ name: "Streamlit" }, { name: "Python"}],
    image: "/pic07.jpg",
    live: "",
    github: "https://github.com/Chinedu-E/oc-transpo-analysis",
  },
  {
    num: "06",
    category: "Deep Learning",
    title: "Clash Royale RL Agent",
    description: "A reinforcement learning agent for Clash Royale, utilizing PyTorch, Python, and OpenCV for training and analysis.",
    stack: [{ name: "Pytorch" }, { name: "Python"}, { name: "OpenCV" }],
    image: "/clashroyale.jpeg",
    live: "",
    github: "https://github.com/Chinedu-E/ClashRoyale-AI",
  },
  {
    num: "07",
    category: "Deep Learning",
    title: "Subway Surfers RL Agent",
    description: "A reinforcement learning agent for Subway Surfers, implemented with TensorFlow, Python, and OpenCV for performance optimization.",
    stack: [{ name: "TensorFlow" }, { name: "Python"}, { name: "OpenCV" }],
    image: "/pic07.jpg",
    live: "",
    github: "https://github.com/Chinedu-E/SubwaySurfers-AI",
  },
  {
    num: "08",
    category: "Deep Learning",
    title: "Portfolio Allocation RL",
    description: "A reinforcement learning model for optimizing portfolio assets allocation, leveraging TensorFlow, Selenium, and Python for data collection and analysis.",
    stack: [{ name: "TensorFlow" }, { name: "Selenium"}, { name: "Python"}],
    image: "/pic07.jpg",
    live: "",
    github: "https://github.com/Chinedu-E/portfolio_allocation",
  },
  {
    num: "09",
    category: "Deep Learning",
    title: "Dog breed predictor",
    description: "A model for predicting dog breeds, developed with Streamlit, Python, and TensorFlow for image recognition and classification",
    stack: [{ name: "Streamlit" }, { name: "Python"}, { name: "TensorFlow"}, {name: "OpenCV"}],
    image: "/dog.png",
    live: "",
    github: "https://github.com/Chinedu-E/dog-breeds",
  },
];

export default function Work() {
  const [project, setProject] = useState(projects[0]);

  function handleSlideChange(swiper: any) {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { opacity: 0.9, delay: 0.4, ease: "easeIn" },
      }}
      
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-1/2 xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-1/2">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.title}
              </h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4">
                {project.stack.map((stack, index) => (
                  <li key={index} className="text-accent">
                    {stack.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                {project.live && <Link href={project.live} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>}
                {project.github && <Link href={project.github} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>}
              </div>
            </div>
          </div>
          <div className="w-full xl:w-1/2 flex">
            <Swiper
              className="xl:h-[520px] mb-12 w-full"
              spaceBetween={30}
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[400px] w-full bg-pink-50/20 relative group flex justify-center items-center">
                    <div className="absolute top-0 bottom-0 w-full h-full z-10 bg-black/10"></div>
                    <div className="w-full h-full relative">
                      {project.image ? <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes={'(max-width: 1250px) 100vw, 1250px'}
                        className="object-contain"
                      />: <div></div>}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                iconsStyles=""
                num={projects.length}
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
