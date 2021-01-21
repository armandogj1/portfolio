import Link from 'next/link';
import { useEffect } from 'react';
import Layout from '../../src/Layout';
import ProjectTile from '../../src/ProjectTile';
import projectsData from '../../src/assets/projectData.json';

const Projects = ({ children = ['Hello'], projects }) => {
  return (
    <div id='main-block-projects'>
      <h3>SOME PROJECTS I'VE WORKED ON</h3>
      {projects.map((project, idx) => (
        <Link key={`${project.name} ${idx}`} href={`/projects/${project.path}`}>
          <a>
            <ProjectTile {...project} />
          </a>
        </Link>
      ))}
    </div>
  );
};

export const getStaticProps = async () => {
  return {
    props: {
      projects: projectsData,
    },
  };
};

export default Projects;
