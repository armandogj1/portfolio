import { useRouter } from 'next/router';
import Image from 'next/image';
import Layout from '../../src/Layout';
import projectsData from '../../src/assets/projectData.json';
import styles from '../../src/styles/[project].module.css';

const Project = ({
  name,
  description,
  technologies,
  summary,
  github,
  deployed = null,
}) => {
  const router = useRouter();
  const { project } = router.query;

  return (
    <div className={styles['project-body']}>
      <h1>{name}</h1>
      <h3>{technologies}</h3>
      <h5>{description}</h5>
      <p>{summary}</p>
      <span className={styles['external-links']}>
        <a href={github}>
          <Image src='/GitHub.png' alt='github logo' width='24' height='24' />
        </a>
        {deployed && <a href={deployed}>App</a>}
      </span>
    </div>
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
  const [project] = projectsData.filter((p) => params.project === p.path);

  return {
    props: { ...project },
  };
};
