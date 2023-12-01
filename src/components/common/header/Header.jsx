import { NavLink, Link } from 'react-router-dom/cjs/react-router-dom.min';
import './Header.scss';

export default function Header({ Dark, setDark, setToggleMenu, ToggleMenu }) {
	const btnThemeClick = () => {
		console.log('dark');
	};
	return (
		<header className='Header'>
			<h1>
				<Link to='/ '>dkdk</Link>
			</h1>
			<ul>
				<li>
					<NavLink to='/department' activeClassName={'on'}>
						Department
					</NavLink>
				</li>
				<li>
					<NavLink to='/youtube' activeClassName={'on'}>
						Youtube
					</NavLink>
				</li>
				<li>
					<NavLink to='/gallery' activeClassName={'on'}>
						Gallery
					</NavLink>
				</li>
				<li>
					<NavLink to='/community' activeClassName={'on'}>
						Community
					</NavLink>
				</li>
				<li>
					<NavLink to='/members' activeClassName={'on'}>
						Members
					</NavLink>
				</li>
				<li>
					<NavLink to='/contact' activeClassName={'on'}>
						Contact
					</NavLink>
				</li>
			</ul>
			{/* <button onClick={() => setDark(!Dark)}>Theme</button> */}
			<div className={`themeBox ${Dark && 'dark'}`} onClick={() => setDark(!Dark)}>
				<div className='ball'></div>
			</div>
			<button className='menuToggle' onClick={() => setToggleMenu(!ToggleMenu)}>
				menu
			</button>
		</header>
	);
}
