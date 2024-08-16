import { ProjectCard } from './ProjectCard';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { getProjects } from './supabase';

function ProjectList({ handleProjectClick }) {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjects().then((data) => {
      setProjects(data);
    });
  }, []);

  return (
    <>
      {projects.length > 0 ? (
        projects.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            handleProjectClick={handleProjectClick}
          />
        ))
      ) : (
        <p className="mx-auto my-10 text-sm text-surface-300">Loading...</p>
      )}
    </>
  );
}

ProjectList.propTypes = {
  handleProjectClick: PropTypes.func,
};

export default ProjectList;
