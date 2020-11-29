import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import MenuButton from '../src/Menu-button';

const handleLinkClick = (e) => {
	e.preventDefault();
};

const Menu = ({ buttons }) => {
	const [isOpen, setOpen] = useState(false);
	const router = useRouter();

	const handleClick = (e) => {
		const nav = document.getElementsByClassName('nav')[0];

		e.preventDefault();
		nav.className = nav.className + ' transition-close';
		router.push(e.target.name);

		const handleTransitionEnd = () => {
			setOpen((prev) => !prev);
			nav.removeEventListener('transitionend', handleTransitionEnd);
		};

		if (e.target.name) {
			nav.addEventListener('transitionend', handleTransitionEnd);
		}
	};

	return (
		<>
			<span
				id={isOpen ? `burger-close` : 'burger-open'}
				onClick={() => setOpen((prev) => !prev)}
			>
				{isOpen ? 'X' : '🍔'}
			</span>
			{
				<nav
					className={isOpen ? 'nav transition-open' : 'nav transition-close'}
				>
					{buttons.map((button) => (
						<MenuButton
							key={button.path}
							path={button.path}
							label={button.label}
							handleClick={handleClick}
						/>
					))}
				</nav>
			}
		</>
	);
};

export default Menu;
