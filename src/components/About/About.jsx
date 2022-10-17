import React, { useEffect } from "react";
import Aos from "aos";
import "./about.css";
import person from "../Image/person.png";
import "aos/dist/aos.css";
function About() {
  useEffect(() => {
    Aos.init();
  });
  const aboutme = (
    <React.Fragment>
      <div className="contact-info" data-aos="fade-up" data-aos-duration="1000">
        <span className="font-monospace highlight">Contact Details</span>
        <hr className="abouthr2" />
      </div>

      <li className="font-monospace">Jeremiah Omolo</li>
      <li className="font-monospace"> 502 Beardsley Ave</li>
      <li className="font-monospace">Bakersfield,California</li>
      <li className="font-monospace">818-941-9299</li>
    </React.Fragment>
  );
  console.log(aboutme);

  const tech_stack = [
    "Javascript ES6+",
    "JQuery",
    "React.js",
    "HTML & CSS",
    "BootStrap",
    "AJAX/Axios",
    "ASP.NET",
    "C#",
    "ADO.NET",
    "RESTful APIs",
    "T-SQL",
    "MS-SQL Server",
  ];
  const tech_items = tech_stack.map((stack) => <li>{stack}</li>);
  console.log(tech_items);

  return (
    <div id="about">
      <div
        className="about-heading"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <span className="font-monospace highlight">About me</span>
        <hr className="abouthr" />
      </div>
      <div className="container">
        <div
          className="about-text font-monospace"
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-delay="50"
        >
          I am a Software Developer adept at troubleshooting problems and
          streamlining processes. I pride myself in my ability to work in any
          position, wether it is
          <span className="highlight">
            {" "}
            front-end, middle-tier and back-end
          </span>
          . I mostly use React.js for the front-end, C# .Net Core and SQL for
          the back end.
          <div className="font-monospace about-description">
            {"Here are some technologies I have been working with:"}
            <ul
              className="tech-stack"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              {tech_stack.map(function (tech_items) {
                return <li>{tech_items}</li>;
              })}
            </ul>
            {[aboutme]}
          </div>
        </div>
        <div
          className="about-image"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <img src={person} alt="person" className="person" />
        </div>
      </div>
    </div>
  );
}

export default About;
