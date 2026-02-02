import React from "react";
import { useEffect } from "react";
import personalImg from "../assets/personalImg.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-regular-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faMedium } from "@fortawesome/free-brands-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";

export default function SectionOne() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);
  return (
    <>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col sm:flex-row-reverse gap-8 sm:gap-12 items-center">
          <div className="w-full sm:w-64 md:w-72">
            <img
              className="sm:w-full w-50 m-auto rounded-2xl shadow-lg ring-zinc-200/50 "
              src={personalImg}
              alt="Profile portrait of Adham Hamdy"
              loading="lazy"
              data-aos="fade-left"
              data-aos-delay="800"
              data-aos-duration="1000"
            />
          </div>

          <div
            data-aos="fade-right"
            data-aos-delay="200"
            data-aos-duration="1000"
            className="flex-1 space-y-6"
          >
            <div>
              <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-zinc-900 leading-tight">
                I Am Adham Hamdy
              </h1>
              <p className="text-xl md:text-2xl text-zinc-700 font-medium mt-2">
                Front-End React & Next.js Developer
              </p>
            </div>

            <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>

            <p className="text-lg md:text-xl text-zinc-600 leading-relaxed">
              Product-Focused ITI 2025 MERN Track Graduate. I don't just build
              projects; I develop real-world products. My expertise lies in
              bridging the gap between design and logic, leveraging AI (OpenAI &
              Hugging Face).
            </p>

            <div className="flex gap-4 justify-center sm:justify-start">
              <a
                href="https://drive.google.com/file/d/1rswb2t4YDQpu7p0A2QiJS1u8IgBb0S1w/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex items-center gap-1 p-1 cursor-pointer text-zinc-700 font-medium hover:text-zinc-900 border-2 border-dashed border-zinc-500 transition-colors duration-300 bg-zinc-200 w-max rounded-lg">
                  <FontAwesomeIcon icon={faFile} />{" "}
                  <span className="text-md text-zinc-700">CV</span>
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/adham-hamdy-22a6971b8/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex items-center gap-1 p-1 cursor-pointer text-zinc-700 font-medium hover:text-zinc-900 border-2 border-dashed border-zinc-500 transition-colors duration-300 bg-zinc-200 w-max rounded-lg">
                  <FontAwesomeIcon icon={faLinkedinIn} />{" "}
                  <span className="text-md text-zinc-700">LinkedIn</span>
                </div>
              </a>
              <a
                href="https://github.com/AdhamHamdyMohamed"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex items-center gap-1 p-1 cursor-pointer text-zinc-700 font-medium hover:text-zinc-900 border-2 border-dashed border-zinc-500 transition-colors duration-300 bg-zinc-200 w-max rounded-lg">
                  <FontAwesomeIcon icon={faGithub} />{" "}
                  <span className="text-md text-zinc-700">GitHub</span>
                </div>
              </a>
              <a
                href="https://medium.com/@adham.hamdy.eldiasty"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex items-center gap-1 p-1 cursor-pointer text-zinc-700 font-medium hover:text-zinc-900 border-2 border-dashed border-zinc-500 transition-colors duration-300 bg-zinc-200 w-max rounded-lg">
                  <FontAwesomeIcon icon={faMedium} />{" "}
                  <span className="text-md text-zinc-700">Medium</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      <hr
        data-aos="fade-up"
        data-aos-anchor-placement="center-center"
        className="sm:w-2xl w-[200px] my-4 border-t-2 border-gray-400 mx-auto"
      />
    </>
  );
}
