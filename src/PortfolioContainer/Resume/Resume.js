import React, {useState, useEffect} from 'react';
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

const Resume = (props) => {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0)
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({})

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    const ResumeHeading = (props) => {
      return (
        <div className="resume-heading">
          <div className="resume-main-heading">
            <div className="heading-bullet"></div>
            <span>{props.heading ? props.heading : ""}</span>
            {props.fromDate && props.toDate ? (
              <div className="heading-date">
                {props.fromDate + "-" + props.toDate}
              </div>
            ) : (
              <div></div>
            )}
          </div>
          <div className="resume-sub-heading">
            <span>{props.subHeading ? props.subHeading : ""}</span>
          </div>
          <div className="resume-heading-description">
            <span>{props.description ? props.description : ""}</span>
          </div>
        </div>
      );
    };
  
  const resumeBullets = [
      { label: "Education", logoSrc: "education.svg" },
      { label: "Work History", logoSrc: "work-history.svg" },
      { label: "Programming Skills", logoSrc: "programming-skills.svg" },
      { label: "Projects", logoSrc: "projects.svg" },
      { label: "Interests", logoSrc: "interests.svg" },
    ];
  
  const programmingSkillsDetails = [
      { skill: "C++", ratingPercentage: 85 },
      {skill: "Python", ratingPercentage: 50},
      { skill: "php", ratingPercentage: 65 },
      { skill: "ReactJs", ratingPercentage: 80 },
      { skill: "SQL Server", ratingPercentage: 60 },
      { skill: "HTML", ratingPercentage: 90 },
      { skill: "CSS", ratingPercentage: 70 },
      { skill: "JavaScript", ratingPercentage: 80 },
      { skill: "MySQL", ratingPercentage: 75 },
    ];

  const projectsDetails = [
      {
        title: "Portfolio Website",
        duration: { fromDate: "November 2021", toDate: "January 2022" },
        description:
          "A portfolio website for myself built upon ReactJs platform",
        subHeading: "Technologies Used: ReactJs, Bootstrap, React-Router",
      },
      {
        title: "Weather Fetcher",
        duration: { fromDate: "2021", toDate: "2021" },
        description:
          "A weather React app that fetches city's weather through REST API.",
        subHeading:
          "Technologies Used: ReactJs, Axios.",
      },
      {
        title: "TIC TAC TOE Game",
        duration: { fromDate: "2020", toDate: "2020" },
        description:
          "Built a GUI python game on tictactoe with game.py module.",
        subHeading:
          "Technologies Used: Python, game.py",
        },
    ];
  
  const resumeDetails = [
      <div className="resume-screen-container" key="education">
        <ResumeHeading
          heading={"Guru Tegh Bahadur Institute of Technology, GGSIPU"}
          subHeading={"Bachleors of Technology (IT) (8.9/10)"}
          fromDate={"2018"}
          toDate={"2022"}
        />
  
        <ResumeHeading
          heading={"Neo Convent Sr. Sec. School "}
          subHeading={"AISSCE (95.6%)"}
          fromDate={"2016"}
          toDate={"2018"}
        />
      </div>,
  
      /* WORK EXPERIENCE */
      <div className="resume-screen-container" key="work-experience">
        <div className="experience-container">
          <ResumeHeading
            heading={"Rivigo Pvt. Ltd."}
            subHeading={"SDE Intern"}
            fromDate={"July 2021"}
            toDate={"Present"}
          />
          <div className="experience-description">
            <span className="resume-description-text">
              Currently working as Front end developer Intern at Rivigo pvt ltd, Gurugram.
            </span>
          </div>
          <div className="experience-description">
            <span className="resume-description-text">
              - Working on the front end tasks of the companies solutions
            </span>
            <br />
            <span className="resume-description-text">
              - Solving and coding in ReactJs, javascript, mysql and java.
            </span>
            <br />
            <span className="resume-description-text">
              - Making large scale API calls and integrate the response with required UI.
            </span>
            <br />
          </div>
        </div>
      </div>,
  
      /* PROGRAMMING SKILLS */
      <div className="resume-screen-container programming-skills-container" key="programming-skills">
        {programmingSkillsDetails.map((skill, index) => (
          <div className="skill-parent" key={index}>
            <div className="heading-bullet"></div>
            <span>{skill.skill}</span>
            <div className="skill-percentage">
              <div
                style={{ width: skill.ratingPercentage + "%" }}
                className="active-percentage-bar"
              ></div>
            </div>
          </div>
        ))}
      </div>,

      /* PROJECTS */
      <div className="resume-screen-container" key="projects">
        {projectsDetails.map((projectsDetails, index) => (
          <ResumeHeading
            key={index}
            heading={projectsDetails.title}
            subHeading={projectsDetails.subHeading}
            description={projectsDetails.description}
            fromDate={projectsDetails.duration.fromDate}
            toDate={projectsDetails.duration.toDate}
          />
        ))}
      </div>,
  
      /* Interests */
      <div className="resume-screen-container" key="interests">
        <ResumeHeading
          heading="Sports/Gym"
          description="Like to workout and go out for a run."
        />
        <ResumeHeading
          heading="Investment"
          description="Started to invest in Equity and cryptocurrency."
        />
      </div>,
    ];

  const handleCarousal = (index) => {
      let offsetHeight = 360;
  
      let newCarousalOffset = {
        style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
      };
  
      setCarousalOffsetStyle(newCarousalOffset);
      setSelectedBulletIndex(index);
    };

  const getBullets = () => {
      return resumeBullets.map((bullet, index) => (
        <div
          onClick={() => handleCarousal(index)}
          className={
            index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
          }
          key={index}
        >
          <img
            className="bullet-logo"
            src={require(`../../assets/Resume/${bullet.logoSrc}`)}
            alt="B"
          />
          <span className="bullet-label">{bullet.label}</span>
        </div>
      ));
    };

  const getResumeScreens = () => {
      return (
        <div
          style={carousalOffsetStyle.style}
          className="resume-details-carousal"
        >
          {resumeDetails.map((ResumeDetail) => ResumeDetail)}
        </div>
      );
    };
  
  return (
      <div className="resume-container screen-container fade-in" id={props.id || ""}>
          <div className="resume-content">
              <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
              <div className="resume-card">
                  <div className="resume-bullets">
                      <div className="bullet-container">
                          <div className="bullet-icons"></div>
                              <div className="bullets">{getBullets()}</div>
                      </div>
                  </div>
                  <div className="resume-bullet-details">{getResumeScreens()}</div>
              </div>
          </div>
      </div>
  );
};

export default Resume;

