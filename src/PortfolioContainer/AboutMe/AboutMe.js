import React, { useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./AboutMe.css";

export default function AboutMe(props) {

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const SCREEN_CONSTANTS = {
    description:
      "Fell in love with tech in high school and now I am upcoming 2022 B.Tech Graduate, front end developer. Looking forward to every opportunities that lies ahead of me. ",
    highlights: {
      bullets: [
        "Fluent in Problem Solving",
        "SQL Database Development",
        "ReactJs Development",
        "C++/Javascript/Python",
        "Ajax networking",
      ],
      heading: "Here are a Few Highlights:",
    },
  };
  const renderHighlight = () => {
    return (
      SCREEN_CONSTANTS.highlights.bullets.map((value, i) => (
        <div className="highlight " key={i}>
          <div className="highlight-blob "></div>
          <span>{value}</span>
        </div>
      ))
    )
  };

  return (
    <div
      className="about-me-container screen-container fade-in "
      id={props.id || ""}
    >
      <div className="about-me-parent ">
        <ScreenHeading title={"About Me"} subHeading={"My Portfolio Overview"} />
        <div className="about-me-card ">
          <div className="about-me-profile "></div>
          <div className="about-me-details ">
            <span className="about-me-description ">
              {SCREEN_CONSTANTS.description}
            </span>
            <div className="about-me-highlights ">
              <div className="highlight-heading ">
                <span>{SCREEN_CONSTANTS.highlights.heading}</span>
              </div>
              {renderHighlight()}
            </div>
            <div className="about-me-options ">
              <button className="btn primary-btn"
                onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
              > Let's Discuss! </button>
              <a href="resume.pdf" download="My Portfolio.pdf">
                <button className="btn highlighted-btn ">Get Portfolio</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
