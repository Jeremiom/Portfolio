import React, { useEffect } from "react";
import "./experience.css";
import JobList from "./JobList";
import Aos from "aos";
import "aos/dist/aos.css";
const Experience = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div
      className="experience-div exp-tab"
      id="experience"
      data-aos="fade-up"
      data-aos-duration="2000"
      data-aos-delay="50"
    >
      <div className="experience-heading highlight">
        <span className="font-monospace">Experience</span>{" "}
        <hr className="experiencehr " />
      </div>

      <JobList />
    </div>
  );
};

export default Experience;
