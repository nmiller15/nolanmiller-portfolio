import { ProjectCard } from "./ProjectCard";
import PropTypes from "prop-types";

const projects = [
  {
    title: "Project Title 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    skills: ["React", "State Management", "Node.js", "PostgreSQL"],
    githubUri: "https://google.com",
    hostedUri: "https://google.com",
  },
  {
    title: "Project Title 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    skills: ["React", "State Management", "Node.js", "PostgreSQL"],
    githubUri: "https://google.com",
    hostedUri: "https://google.com",
  },
];

function ProjectList({ handleProjectClick }) {
  ProjectList.propTypes = {
    handleProjectClick: PropTypes.func,
  };

  return (
    <div
      id="projects"
      className="mx-auto max-w-96 px-10 sm:max-w-xl lg:max-w-2xl"
    >
      <h2 className="mt-8 p-3 text-2xl font-bold sm:text-3xl">Projects</h2>
      {projects.map((project, index) => {
        return (
          <ProjectCard
            key={index}
            project={project}
            handleProjectClick={handleProjectClick}
          />
        );
      })}
    </div>
  );
}

export default ProjectList;
