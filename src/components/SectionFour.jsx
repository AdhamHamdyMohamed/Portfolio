import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Aos from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

export default function SectionFour() {
  const [experience, setExperience] = useState();

  useEffect(() => {
    Aos.init({
      once: true,
    });
    axios
      .get("/dataBase/Exp.json")
      .then((res) => setExperience(res.data.experience))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <section className="py-16 px-4">
        <h1 className="text-4xl font-bold text-center">Experience</h1>
        <div
          data-aos="zoom-in-right"
          data-aos-delay="800"
          data-aos-duration="1000"
          className="max-w-5xl mx-auto mt-8"
        >
          {experience &&
            experience.map((exp) => {
              return (
                <div
                  key={exp.id}
                  className="bg-white rounded-lg shadow-md p-6 mb-6 border-2 border-dashed border-zinc-500 "
                >
                  <h2 className="text-2xl font-semibold mb-4">{exp.title}</h2>
                  <h3 className="text-xl font-medium mb-2">
                    {exp.location}{" "}
                    <a
                      href={exp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon icon={faLink} />
                    </a>
                  </h3>
                  <p className="text-gray-600 mb-2">{exp.date}</p>
                  <p className="text-gray-700 mt-3.5 border-2 border-dashed border-zinc-500 p-4 rounded-lg bg-gray-50 text-justify">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3 max-w-2xl justify-center mx-auto">
                    {exp.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="bg-blue-100 text-zinc-600 text-sm font-medium mr-2 px-3 py-1 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
        </div>
      </section>
      <hr
        data-aos="fade-up"
        data-aos-anchor-placement="center-center"
        className="w-full my-4 border-t-2 border-gray-400 mx-auto"
      />
    </>
  );
}
