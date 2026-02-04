import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

export default function SectionThree() {
  useEffect(() => {
    Aos.init({
      once: true,
    });
  }, []);
  return (
    <>
      <section className="py-16 px-4">
        <h1 className="text-4xl text-gray-900 font-bold text-center">
          Education
        </h1>
        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className="max-w-5xl mx-auto mt-5"
        >
          <div className="bg-white rounded-lg shadow-md p-6 border-2 border-dashed border-zinc-500 ">
            <h2 className="text-2xl font-semibold mb-4 text-zinc-900">
              Information Technology Institute (ITI) - Full Stack Web
              Development (MEARN Track)
            </h2>
            <h3 className="text-xl font-medium mb-2 text-zinc-800">
              Mansoura University{" "}
              <a
                target="_blank"
                href="https://drive.google.com/file/d/1_Mx7sw8EE4AdNmQAwAmiTIs3YRvEpZ4g/view?usp=sharing"
              >
                <FontAwesomeIcon icon={faLink} />
              </a>
            </h3>
            <p className="text-gray-600 mb-2">03/2025 - 08/2025</p>
            <p className="text-gray-700 mt-3.5 border-2 border-dashed border-zinc-500 p-4 rounded-lg bg-gray-50 text-justify">
              Full-Stack Web Development (MERN Track) | ITI Completed an
              intensive 5-month professional training focused on building
              scalable web applications and MVPs. Proficient in the MERN stack
              (MongoDB, Express, React, Node.js) and Angular, with expertise in
              MVC architecture, JWT authentication, and RESTful APIs.
              Experienced in crafting responsive UIs using Tailwind and Material
              UI, while integrating Generative AI features via OpenAI APIs and
              Prompt Engineering. Practiced Agile methodologies and version
              control using Git and Postman to deliver high-quality digital
              solutions.
            </p>
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
