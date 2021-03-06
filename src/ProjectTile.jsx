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
          src={`/${image[0]}`}
          alt={`${name} Image`}
          width='360'
          height='200'
        />
      </div>
    </div>
  );
};

export default ProjectTile;
