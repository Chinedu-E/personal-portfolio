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
import type { Project } from "@/data/projects";

interface WorkClientProps {
  projects: Project[];
}

export default function WorkClient({ projects }: WorkClientProps) {
  const [project, setProject] = useState(projects[0]);

  function handleSlideChange(swiper: any) {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { opacity: 0.9, delay: 0.4, ease: "easeIn" },
      }}
      className="flex flex-col xl:flex-row xl:gap-[30px]"
    >
      <div className="w-full xl:w-1/2 xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
        <div className="flex flex-col gap-[30px] h-1/2">
          <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
            {project.num}
          </div>
          <h2 className="text-[32px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
            {project.title}
          </h2>
          <p className="text-white/60">{project.description}</p>
          <ul className="flex gap-4 flex-wrap">
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
                    alt={`${project.title} - ${project.category} project by Nedu Ekeruche`}
                    fill
                    sizes={'(max-width: 1250px) 100vw, 1250px'}
                    className="object-contain"
                  /> : <div></div>}
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
    </motion.div>
  );
}


