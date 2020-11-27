import Link from 'next/link';
import Layout from '../src/Layout';

const App = (props) => {
	return (
		<div className='intro'>
			<h1>{'Hello, my name is Armando Garcia-Jacquier'}</h1>
			<p>
				{
					'I am a full-stack developer. Focusing on making intereseting things while keeping it simple and beautiful.'
				}
			</p>
			<Link href='/projects'>
				<a id='main-page-button'>Checkout My Work</a>
			</Link>
		</div>
	);
};

export default App;
