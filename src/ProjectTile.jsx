import Image from 'next/image';

const ProjectTile = ({ name, image, description, github }) => {
  return (
    <div className='project-tile'>
      <div className='project-tile-text'>
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
      <div className='project-tile-overlay'>
        <Image
          src={`/${image}`}
          alt={`${name} Image`}
          width='200'
          height='200'
        />
      </div>
    </div>
  );
};

export default ProjectTile;
