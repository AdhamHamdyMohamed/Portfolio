import { useEffect, useState } from "react";
import axios from "axios";
import Aos from "aos";
import "aos/dist/aos.css";

export default function SectionFive() {
  const [certificate, setCertificate] = useState([]);

  useEffect(() => {
    Aos.init({ once: true });

    fetch("/dataBase/Certificates.json")
      .then((response) => response.json())
      .then((data) => setCertificate(data.certificates))
      .catch((error) => console.error("Error fetching certificates:", error));
  }, []);

  return (
    <>
      <section className="py-16 px-4">
        <h1 className="text-4xl font-bold text-center text-gray-900">
          Certificates
        </h1>

        <div
          data-aos="zoom-in-right"
          data-aos-delay="800"
          data-aos-duration="1000"
          className="max-w-5xl mx-auto mt-8"
        >
          <ul className="timeline timeline-snap-icon timeline-vertical max-md:timeline-compact bg-white border-2 border-dashed border-zinc-500 rounded-lg p-6">
            {certificate.map((cert, index) => (
              <li key={cert.id || index} className="timeline-item">
                {index !== 0 && <hr className="bg-gray-300" />}

                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5 text-gray-700"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>

                <div
                  className={`${
                    index % 2 === 0
                      ? "timeline-start md:text-end"
                      : "timeline-end"
                  } mb-10`}
                >
                  <time className="font-mono italic">{cert.date}</time>
                  <div className="border-2 border-dashed border-zinc-500 rounded-lg p-4 mt-2 bg-gray-100">
                    <div className="text-lg font-black">{cert.title}</div>
                    <p className="text-justify">{cert.description}</p>
                    <div className="flex justify-center">
                      {cert.link && (
                        <button
                          className="btn btn-success text-gray-800 mt-2 cursor-pointer"
                          onClick={() => {
                            window.open(
                              cert.link,
                              "_blank",
                              "noopener,noreferrer",
                            );
                          }}
                        >
                          View Certificate
                        </button>
                      )}
                    </div>
                  </div>
                </div>
                <hr className="bg-gray-300" />
              </li>
            ))}
          </ul>
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
