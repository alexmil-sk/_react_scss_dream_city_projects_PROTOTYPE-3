import "./Layout.scss";
import { Outlet } from "react-router-dom";
import Navigation from "/src/components/ru/Navigation/Navigation.jsx";
import FooterRu from "/src/components/ru/FooterRu/FooterRu.jsx";
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
			<FooterRu
				isActiveHeader={isActiveHeader}
			/>
		</>
	)
}

export default Layout;