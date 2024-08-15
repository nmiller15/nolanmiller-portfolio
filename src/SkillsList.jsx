import PropTypes from "prop-types";
export function SkillsList({ skills }) {
  SkillsList.propTypes = {
    skills: PropTypes.array,
  };
  if (!skills) return;
  return (
    <ul className="flex-start mt-3 flex flex-wrap justify-items-start gap-3">
      {skills.map((skill, index) => {
        return (
          <li
            key={index}
            className="cursor-default rounded-lg bg-primary-400 px-2 text-surface-200 transition-colors duration-100 ease-in"
          >
            {skill}
          </li>
        );
      })}
    </ul>
  );
}
