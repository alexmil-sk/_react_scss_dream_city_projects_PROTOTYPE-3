import "./LayoutSk.scss";
import { Outlet } from "react-router-dom";
import Navigation from "/src/components/ru/Navigation/Navigation.jsx";
import FooterSk from "/src/components/sk/FooterSk/FooterSk.jsx";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";


function Layout() {

	let location = useLocation();


	const [isActiveHeader, setIsActiveHeader] = useState(false);


	useEffect(() => {
		setIsActiveHeader(true)
	}, [location]);

	function resetHeaderMenu() {
		setIsActiveHeader(false);
	}


	return (
		<>
			<Navigation
				resetHeaderMenu={resetHeaderMenu}
				isActiveHeader={isActiveHeader}
			/>
				<Outlet />
			<FooterSk
				isActiveHeader={isActiveHeader}
			/>
		</>
	)
}

export default Layout;