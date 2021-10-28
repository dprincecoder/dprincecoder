import React, { useState } from "react";
import Tittle from "../components/Tittle";
import Categories from "../components/Categories";
import MenuItems from "../components/MenuItems";
import portfolios from "../components/Allportfolios";
// import category from '../components/Categories';

const allCategories = [
	"All",
	...new Set(portfolios.map((Item) => Item.category)),
];

function PortfoliosPage() {
	const [categories] = useState(allCategories);
	const [menuItems, setMenuItems] = useState(portfolios);

	const filter = (category) => {
		if (category === "All") {
			setMenuItems(portfolios);
			// setCategories();
			return;
		}
		const filterData = portfolios.filter((Item) => {
			return Item.category === category;
		});
		setMenuItems(filterData);
	};

	return (
		<div className="PortfolioPage">
			<div className="tite">
				<Tittle title={"Portfolios"} span={"Portfolios"} />
			</div>
			<div className="portfolios-data">
				<Categories filter={filter} categories={categories} />
				<MenuItems menuItem={menuItems} />
			</div>
		</div>
	);
}

export default PortfoliosPage;
