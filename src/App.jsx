import ProjectList from "./ProjectList.jsx";
import ProjectDialog from "./ProjectDialog.jsx";
import BlogList from "./BlogList.jsx";
import { useEffect, useState } from "react";

function App() {
  let [isOpen, setIsOpen] = useState(false);
  let [selectedProject, setSelectedProject] = useState({});

  const handleProjectClick = (project) => {
    setIsOpen(true);
    setSelectedProject(project);
  };

  return (
    <>
      <div className="max-w-screen min-h-max w-screen bg-surface-100 text-white">
        <div className="container mx-auto">
          <div id="header" className="place flex flex-col place-items-center">
            <div className="mb-8 mt-10 flex h-24 w-24 place-items-center overflow-clip rounded-full border-2 border-primary-100 sm:mb-16">
              <img
                src="https://nolanmiller-image-hosting.s3.us-east-2.amazonaws.com/headshot.jpg"
                alt="nolan headshot"
              />
            </div>
            <div className="text-center">
              <h1 className="text-3xl sm:text-4xl">Nolan Miller</h1>
              <p className="m-2 text-sm text-surface-500 sm:text-lg">
                Web Designer & Developer
              </p>
            </div>
          </div>
          <div
            id="projects"
            className="mx-auto max-w-96 px-10 sm:max-w-xl lg:max-w-2xl"
          >
            <h2 className="mt-8 p-3 text-2xl font-bold sm:text-3xl">
              Projects
            </h2>
            <ProjectList handleProjectClick={handleProjectClick} />
          </div>
          <div
            id="blog"
            className="mx-auto max-w-96 px-10 sm:max-w-xl lg:max-w-2xl"
          >
            <h2 className="mt-20 p-3 text-2xl font-bold sm:text-3xl">
              Recent Blog Posts
            </h2>
            <BlogList />
          </div>
        </div>
      </div>
      <ProjectDialog
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        project={selectedProject}
      />
    </>
  );
}

export default App;
