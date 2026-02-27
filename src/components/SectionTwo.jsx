import { useState, useEffect } from "react";
import { fetchProjects } from "../services/projectsApi";
import AOS from "aos";
import "aos/dist/aos.css";
import Details from "./Details";
export default function SectionTwo() {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  const getProjects = async () => {
    const data = await fetchProjects();
    setProjects(data);
  };

  useEffect(() => {
    AOS.init({
      once: true,
    });
    getProjects();
  }, []);

  return (
    <>
      <section id="Projects" className="py-16 px-4">
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="1000"
          className="max-w-7xl mx-auto"
        >
          <h1 className="font-bold text-center text-4xl mb-5 text-gray-900">
            Projects
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((pro) => (
              <div
                key={pro.id}
                className="bg-white border-2 border-dashed border-zinc-500 rounded-lg shadow-md overflow-hidden"
              >
                <a className="relative d-block group overflow-hidden">
                  <img
                    src={`/dataBase/assets/${pro.img}`}
                    alt={pro.name}
                    loading="lazy"
                    className="w-full h-50 object-cover scale-100 group-hover:scale-110 transition-transform duration-300"
                  />
                  <h2 className="text-xl text-zinc-800 font-bold mt-3 mx-3 ">
                    {pro.name}
                  </h2>
                </a>
                <div className="p-3 text-zinc-700">
                  <h5>
                    {pro.state} - {pro.category}
                  </h5>

                  <p className="text-gray-600 mb-4">{pro.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {(pro.tech || []).map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-200 text-gray-700 text-sm rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    <br />
                  </div>
                  {pro.id !== 2 && (
                    <div className="text-center">
                      <button
                        className="btn btn-dash btn-success mt-4 text-zinc-800"
                        onClick={() => setSelectedProject(pro)}
                      >
                        Details
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedProject && (
        <Details
          {...selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
      <hr
        data-aos="fade-up"
        data-aos-anchor-placement="center-center"
        className="sm:w-2xl w-50 my-4 border-t-2 border-gray-400 mx-auto"
      />
    </>
  );
}
