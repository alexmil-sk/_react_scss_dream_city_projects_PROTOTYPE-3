import { NavLink } from "react-router-dom";
import "./Navigation.scss";

function Navigation({ isActiveHeader, resetHeaderMenu }) {



	const menuLinks = [
		{ link: "/ru/home", value: 'Home' },
		{ link: "/ru/objects", value: 'Objects' },
		{ link: "/ru/contacts", value: 'Contacts' },
		{ link: "/ru/posts", value: 'Posts' },
		{ link: "/ru/sort", value: 'Sort' },
		{ link: "/ru/menusticker", value: 'MenuSticker' },
		{ link: "/ru/todos", value: 'Todos' },
		{ link: "/", value: 'Language' }]

	return (
		<div className={`wrapper__header ${isActiveHeader ? 'loaded' : ''}`}>
			<div className="wrapper__background"></div>
			<nav className="header">
				<div className="header__menu menu">
					{
						menuLinks?.map(({ link, value }) => (
							<NavLink
								className="menu__link"
								to={link}
								key={value}
								onClick={resetHeaderMenu}
							>
								{value}
							</NavLink>
						))
					}
				</div>
			</nav>
		</div>

	)
}

export default Navigation;