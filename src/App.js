import "./App.scss";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import { Switch, Route } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import PortfoliosPage from "./pages/PortfoliosPage";
import ContactPage from "./pages/ContactPage";
import React, { useState } from "react";

function App() {
	const [navToggle, setNavToggle] = useState(false);

	const navClick = () => {
		setNavToggle(!navToggle);
	};

	return (
		<div className="App">
			<div className={`sidebar ${navToggle ? "nav-toggle" : ""}`}>
				<NavBar />
			</div>
			<div className="nav-btn" onClick={navClick}>
				<div className="circle">
					<div className="lines1"></div>
					<div className="lines2"></div>
					<div className="lines3"></div>
				</div>
			</div>

			{navToggle && <div onClick={navClick} className="nav-btn btnbig"></div>}
			<div className="main-content">
				<div className="content">
					<Switch>
						<Route exact path="/">
							<HomePage />
						</Route>
						<Route exact path="/about">
							<AboutPage />
						</Route>
						<Route exact path="/portfolios">
							<PortfoliosPage />
						</Route>
						<Route exact path="/contact">
							<ContactPage />
						</Route>
					</Switch>
				</div>
			</div>
		</div>
	);
}

export default App;
