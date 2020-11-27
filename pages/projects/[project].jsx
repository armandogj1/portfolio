import { useRouter } from 'next/router';
import Layout from '../../src/Layout';

const Project = () => {
	const router = useRouter();
	const { project } = router.query;

	return <h1>{`This ${project}`}</h1>;
};

export default Project;
