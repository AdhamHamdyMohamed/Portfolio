import { useState, useEffect } from "react";
import { fetchProjects } from "../services/projectsApi";

export default function SectionTwo() {
  const [projects, setProjects] = useState([]);
  const getProjects = async () => {
    const data = await fetchProjects();
    setProjects(data);
  };
  useEffect(() => {
    getProjects();
  }, []);

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="font-bold text-center text-4xl mb-12 text-gray-900">
          Projects
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((pro) => (
            <div
              key={pro.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <a href={pro.demo} className="relative d-block group overflow-hidden">
                <img
                  src={`/dataBase/assets/${pro.img}`}
                  alt={pro.name}
                  className="w-full h-50 object-cover transition duration-300 group-hover:blur-sm"
                />

                <div className="sm:absolute sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 sm:opacity-0 sm:group-hover:opacity-100 sm:transition sm:duration-300">
                  <span className="sm:btn sm:btn-active sm:btn-success">
                    {window.innerWidth > 768 ? "Demo" : null}
                  </span>
                </div>
              </a>
              <div className="p-6">
                <h2 className="text-xl font-bold">{pro.name}</h2>
                <h5>
                  {pro.state} - {pro.category}
                </h5>

                <p className="text-gray-600 mb-4">{pro.description}</p>
                <div className="flex flex-wrap gap-3 mb-4">
                  <div className="">
                    {(pro.tech || []).map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-200 text-gray-700 text-sm rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
