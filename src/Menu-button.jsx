import Link from 'next/link';

const MenuButton = ({ path, label, handleClick }) => {
	return (
		<Link href={path}>
			<a className='menu-button' name={path} onClick={handleClick}>
				{label}
			</a>
		</Link>
	);
};

export default MenuButton;
