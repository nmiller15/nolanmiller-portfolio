import { SkillsList } from "./SkillsList";
import PropTypes from "prop-types";

export function ProjectCard({ project, handleProjectClick }) {
  ProjectCard.propTypes = {
    project: PropTypes.object.isRequired,
    handleProjectClick: PropTypes.func,
  };

  const { title, description, skills } = project;
  const handleClick = () => {
    handleProjectClick(project);
  };
  return (
    <div
      className="group relative mt-3 cursor-pointer rounded-lg p-3 text-white transition-all duration-200 hover:bg-surface-200"
      onClick={handleClick}
    >
      <i className="iconoir-arrow-up-right-square transition-scale absolute right-0 pr-3 text-2xl duration-200 group-hover:scale-110"></i>
      <h3 className="pr-5 text-lg font-semibold">{title}</h3>
      <p className="pt-1 text-surface-500">{description}</p>
      <SkillsList skills={skills} />
    </div>
  );
}
