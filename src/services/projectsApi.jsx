export const fetchProjects = async () => {
  const res = await fetch("/dataBase/Projects.json");

  if (!res.ok) {
    throw new Error("Failed to load projects");
  }

  const data = await res.json();
  return data.projects;
};
