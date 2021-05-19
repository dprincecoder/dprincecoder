import React from 'react';

function MenuItems({menuItem}) {
    return (
        <div className="portfolios">
            {
                menuItem.map((Item) => {
                    return <div className="portfolio" key={Item.id}>
                                <a href={Item.link} className="portfolio-link">
                                    {Item.title}
                                </a>
                                <div className="f-text">
                                    <p>{Item.text}</p>
                            </div>
                                <div className="image-data">
                                    <img src={Item.image} alt="" />
                                    {/* <ul className="hover-items">
                                        <li>
                                            <a href={Item.link1}>{Item.icon1}</a>
                                            <a href={Item.link2}>{Item.icon2}</a>
                                        </li>
                                    </ul> */}
                            </div>
                    </div>
                })
            }
        </div>
    )
}

export default MenuItems;