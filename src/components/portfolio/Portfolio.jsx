import React from "react";
// import AwesomeSlider from "react-awesome-slider";
// import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import "swiper/css/bundle";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "./portfolio.css";
import { portfolioData } from "./data";

const Portfolio = () => {
  // const AutoplaySlider = withAutoplay(AwesomeSlider);
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {portfolioData.map(
          ({ id, title, desc, credit, code, live, img, tags }) => {
            return (
              <article className="portfolio__item" key={id}>
                <div className="portfolio__item-img">
                  {/* <AutoplaySlider
                    // play={true}
                    infinte={true}
                    mobileTouch={true}
                    cancelOnInteraction={true} // should stop playing on user interaction
                    interval={6000}
                    organicArrows={true}
                    // buttons={false}
                  >
                    {img.map(({ img, id }) => {
                      return (
                        <div
                          data-src={img}
                          // alt={title}
                          // key={id}
                          className="portfolio__img"
                        />
                      );
                    })}
                  </AutoplaySlider> */}
                  <Swiper
                    spaceBetween={30}
                    slidesPerView={1}
                    // autoplay={{
                    //   delay: 2500,
                    //   disableOnInteraction: false,
                    // }}
                    modules={[Autoplay, Navigation]}
                    navigation
                  >
                    {img.map(({ img, id }) => {
                      return (
                        <SwiperSlide
                          key={id}
                        >
                          <img src={img} alt="" className="portfolio__img" />
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-desc">
                  <p>{desc}</p>
                </div>
                {/* <div className="portfolio__items_typo">
                    <div className="portfolio__item_badge">Hover</div>
                </div> */}
                {<div className="portfolio__item-tags">
                  <p className="portfolio__item-tags-name">TAGs</p>
                  <ul className="portfolio__item-tags-list">
                    {tags.map(({ id, tag }) => {
                      return (
                        <li className="portfolio__item-tags-listItem" key={id}>
                          {tag}
                        </li>
                      );
                    })}
                  </ul>
                </div>}
                <div className="portfolio__item-cta">
                  <a
                    href={code}
                    target="_blank"
                    rel="noreferrer"
                    className="btn"
                  >
                    Source Code
                  </a>
                  <a
                    href={live}
                    className="btn btn-primary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Live
                  </a>
                </div>
                <small className="text-light cour">Credit: {credit}</small>
              </article>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Portfolio;
