import Link from 'next/link';
import Layout from '../../src/Layout';
import ProjectTile from '../../src/ProjectTile';
import projects from '../../src/assets/projectData.json';

const Projects = ({ children = ['Hello'] }) => {
	return (
		<div id='main-block-projects'>
			{projects.map((project, idx) => (
				<Link key={`${project.name} ${idx}`} href='/projects/apptendance'>
					<a>
						<ProjectTile
							project={project.name}
							image={project.image}
							description={project.description}
						/>
					</a>
				</Link>
			))}
		</div>
	);
};

export default Projects;
