import Head from 'next/head';
import Menu from './Menu';

const Layout = ({ children, title }) => {
	const buttons = [
		{ path: '/', label: 'Home' },
		{ path: '/projects', label: 'Projects' },
		{ path: '/resume', label: 'Resume' },
	];

	return (
		<div id='layout'>
			<Head>
				<title>portfolio</title>
				<meta charSet='utf-8' />
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
			</Head>
			<header id='header'>
				<Menu buttons={buttons}></Menu>
			</header>
			<div id='main-block'>{children}</div>
			<footer>{'I`m here to stay'}</footer>
		</div>
	);
};

export default Layout;
