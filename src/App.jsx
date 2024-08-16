import ProjectList from "./ProjectList.jsx";
import ProjectDialog from "./ProjectDialog.jsx";
import BlogList from "./BlogList.jsx";
import { useState } from "react";
import supabase from "./supabase.js";

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
          <div
            id="headline"
            className="mx-auto max-w-96 px-10 sm:max-w-xl lg:max-w-2xl"
          >
            <p className="max-w-80 pl-3 pt-20 text-5xl font-semibold text-surface-600">
              I create websites for <span className="text-white">people</span>,
              for <span className="text-white">businesses</span>, and for{" "}
              <span className="text-white">fun</span>.
            </p>
            <p className="mt-2 max-w-80 pl-3 text-surface-400">
              Check out some of the projects that I've worked on, if you're
              interested in working together or getting a website done, email me
              at{" "}
              <a
                href="mailto:mail@nolanmiller.me"
                className="text-surface-500 underline transition-all duration-200 hover:text-white"
              >
                mail@nolanmiller.me
              </a>
              .
            </p>
          </div>
          <div
            id="header"
            className="mx-auto mt-12 flex max-w-96 items-center gap-6 px-10 sm:max-w-xl lg:max-w-2xl"
          >
            <img
              src="https://nolanmiller-image-hosting.s3.us-east-2.amazonaws.com/headshot.jpg"
              alt="nolan headshot"
              className="ml-3 h-20 w-20 place-items-center overflow-clip rounded-full border-2 border-primary-100 object-cover"
            />
            <div>
              <h1 className="pt-2 text-xl sm:text-2xl">Nolan Miller</h1>
              <p className="text-sm text-surface-500 sm:text-lg">
                Web Designer & Developer
              </p>
              <div className="mt-1 flex max-w-96 items-center justify-start gap-4 sm:max-w-xl lg:max-w-2xl">
                <a href="https://www.linkedin.com/in/nolan-miller-2a763b20a/">
                  <i
                    title="LinkedIn"
                    className="iconoir-linkedin text-xl text-surface-500 transition-all duration-200 hover:text-white"
                  ></i>
                </a>
                {/* <a href="">
                  <i
                    title="Instagram"
                    className="iconoir-instagram text-xl text-surface-500 transition-all duration-200 hover:text-white"
                  ></i>
                </a> */}
                <a href="https://dev.to/nmiller15">
                  <i
                    title="Dev.to Blog"
                    className="iconoir-post text-xl text-surface-500 transition-all duration-200 hover:text-white"
                  ></i>
                </a>
                <a href="mailto:mail@nolanmiller.me">
                  <i
                    title="Email"
                    className="iconoir-mail text-xl text-surface-500 transition-all duration-200 hover:text-white"
                  ></i>
                </a>
              </div>
            </div>
          </div>
          <div
            id="projects"
            className="mx-auto mt-32 max-w-96 px-10 sm:max-w-xl lg:max-w-2xl"
          >
            <h2 className="p-3 text-2xl font-bold sm:text-3xl">My Work</h2>
            <ProjectList handleProjectClick={handleProjectClick} />
          </div>
          <div
            id="blog"
            className="mx-auto mt-32 max-w-96 px-10 sm:max-w-xl lg:max-w-2xl"
          >
            <h2 className="p-3 text-2xl font-bold sm:text-3xl">
              Recent Blog Posts
            </h2>
            <BlogList />
          </div>
        </div>
      </div>
      {/*
        Sections to add --
         About Me - more fun stuff
         Contact
      */}
      <ProjectDialog
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        project={selectedProject}
      />
    </>
  );
}

export default App;
