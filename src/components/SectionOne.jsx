import React from "react";
import personalImg from "../assets/personalImg.png";

export default function SectionOne() {
  return (
    <>
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col sm:flex-row-reverse gap-8 sm:gap-12 items-center">
          <div className="w-full sm:w-64 md:w-72">
            <img
              className="sm:w-full w-50 m-auto rounded-2xl shadow-lg ring-zinc-200/50 "
              src={personalImg}
              alt="Profile portrait of Adham Hamdy"
            />
          </div>

          <div className="flex-1 space-y-6">
            <div>
              <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-zinc-900 leading-tight">
                I Am Adham Hamdy
              </h1>
              <p className="text-xl md:text-2xl text-zinc-700 font-medium mt-2">
                Front-End React & Next.js Specialist
              </p>
            </div>

            <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>

            <p className="text-lg md:text-xl text-zinc-600 leading-relaxed">
              Product-Focused ITI 2025 MERN Track Graduate. I don't just build
              projects; I develop real-world products. My expertise lies in
              bridging the gap between design and logic, leveraging AI (OpenAI &
              Hugging Face).
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium">
                React
              </span>
              <span className="px-4 py-2 bg-purple-50 text-purple-700 rounded-lg text-sm font-medium">
                Next.js
              </span>
              <span className="px-4 py-2 bg-amber-50 text-amber-700 rounded-lg text-sm font-medium">
                AI Integration
              </span>
              <span className="px-4 py-2 bg-emerald-50 text-emerald-700 rounded-lg text-sm font-medium">
                MVP Builder
              </span>
            </div>
          </div>
        </div>
      </section>
      <hr className="w-100 my-4 border-t-2 border-gray-400 m-auto" />
    </>
  );
}
