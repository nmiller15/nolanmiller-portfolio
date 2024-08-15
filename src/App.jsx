import ProjectList from "./ProjectList.jsx";
import ProjectDialog from "./ProjectDialog.jsx";
import { useState } from "react";

function App() {
  let [isOpen, setIsOpen] = useState(true);
  let [selectedProject, setSelectedProject] = useState({});

  const handleProjectClick = (project) => {
    setIsOpen(true);
    setSelectedProject(project);
  };

  return (
    <>
      <div className="max-w-screen min-h-screen w-screen bg-surface-100 text-white">
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
          <ProjectList handleProjectClick={handleProjectClick} />
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
