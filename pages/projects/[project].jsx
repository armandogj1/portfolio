import { useRouter } from 'next/router';
import Image from 'next/image';
import Layout from '../../src/Layout';
import projectsData from '../../src/assets/projectData.json';
import styles from '../../src/styles/[project].module.css';

const Project = ({
  name,
  image,
  description,
  technologies,
  summary,
  github,
  deployed = null,
}) => {
  const router = useRouter();
  const { project } = router.query;

  return (
    <section className={styles['project-body']}>
      <div className={styles['project-main']}>
        <div className={styles['project-image']}>
          {image.map((img) => (
            <img
              key={img}
              className={styles['project-img']}
              src={`/${img}`}
              alt='project image'
            />
          ))}
        </div>
        <div className={styles['project-content']}>
          <h1>{name}</h1>
          <h3>{technologies}</h3>
          <h5>{description}</h5>
          <p>{summary}</p>
        </div>
      </div>
      <span className={styles['external-links']}>
        <a href={github} target='_blank' rel='noopener noreferrer'>
          <Image
            src='/GitHub.png'
            alt='github logo'
            width='24'
            height='24'
          />
        </a>
        {deployed && (
          <a
            href={deployed}
            target='_blank'
            rel='noopener noreferrer'
          >
            App
          </a>
        )}
      </span>
    </section>
  );
};

export default Project;

export const getStaticPaths = async () => {
  const paths = projectsData.map((project) => ({
    params: { project: project.path },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  const [project] = projectsData.filter(
    (p) => params.project === p.path
  );

  return {
    props: { ...project },
  };
};
