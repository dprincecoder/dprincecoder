import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function MenuItems({ menuItem }) {
	React.useEffect(() => {
		Aos.init({ duration: 2000 });
	}, []);
	return (
		<div className="portfolios">
			{menuItem.map((Item) => {
				return (
					<div className="portfolio" key={Item.id} data-aos="fade-up">
						<a href={Item.link} className="portfolio-link">
							{Item.title}
						</a>
						<div className="f-text">
							<p>{Item.text}</p>
						</div>
						<div className="card">
							{/* <img src={Item.image} alt="" /> */}
							{/* <div className="hover-items">
								<p>{Item.tools}</p>
							</div> */}
							<div
								className="front"
								style={{ backgroundImage: `url(${Item.image})` }}>
								{/* <img src={Item.image} alt="" /> */}
							</div>
							<div className="back">
								<p>{Item.tools}</p>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
}

export default MenuItems;
