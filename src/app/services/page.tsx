"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { animate, motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "Delivering high-quality, responsive websites using modern frameworks like Next.js and TypeScript. Specializing in custom web solutions that cater to client needs and provide an exceptional user experience.",
    href: "",
  },
  {
    num: "02",
    title: "Data Analytics",
    description:
      "Offering comprehensive data analytics services to help you uncover insights and make data-driven decisions. Utilizing Python and various data visualization tools to turn raw data into actionable intelligence.",
    href: "",
  },
  {
    num: "03",
    title: "Machine/Deep Learning",
    description:
      "Developing advanced machine learning and deep learning models to solve complex problems. Expertise in TensorFlow, PyTorch, and other frameworks to create predictive models, reinforcement learning agents, and more.",
    href: "",
  },
  {
    num: "04",
    title: "Data Collection / Web Scraping",
    description:
      "Providing efficient data collection and web scraping services using Python and Selenium. Capable of extracting valuable data from various sources to support your business operations and research needs.",
    href: "",
  },
  {
    num: "05",
    title: "Bots & Scripts",
    description:
      "Creating custom bots and automation scripts to streamline your workflow. Experienced in developing solutions for social media automation, market analysis, data processing, and other repetitive tasks.",
    href: "",
  },
];

export default function Services() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.9, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="flex-1 flex flex-col justify-center gap-6 group"
            >
              <div className="w-full flex justify-between items-center">
                <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                  {service.num}
                </div>
                <div
                  className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                >
                  <BsArrowDownRight className="text-primary text-3xl" />
                </div>
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                {service.title}
              </h2>
              <p className="text-white/60">{service.description}</p>
              <div className="border-b border-white/20 w-full"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
