import { useRouter } from 'next/router';
import Layout from '../../src/Layout';
import projectsData from '../../src/assets/projectData.json';

const Project = ({ name, github }) => {
  const router = useRouter();
  const { project } = router.query;

  return (
    <>
      <h1>{`This ${name}`}</h1>
      <a href={github}>🐙🐱</a>
    </>
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

  console.log(project);
  return {
    props: { ...project },
  };
};
