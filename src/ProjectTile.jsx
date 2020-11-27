import Image from 'next/image';

const ProjectTile = ({ project, image, description }) => {
	return (
		<div className='project-tile'>
			<div className='project-tile-text'>
				<h3>{project}</h3>
				<p>{description}</p>
			</div>
			<div className='project-tile-overlay'>
				<Image
					src={`/${image}`}
					alt={`${project} Image`}
					width='200'
					height='200'
				/>
			</div>
		</div>
	);
};

export default ProjectTile;
