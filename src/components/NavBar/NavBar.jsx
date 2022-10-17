import react, { useEffect, useState } from "react";
import "./navbar.css";
import Aos from "aos";
import ReactGA from "react-ga";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../Image/logo.png";
import "aos/dist/aos.css";
import pdf from "../Image/Jeremiah Omolo- Software Engineer.pdf";
function NavBar() {
  useEffect(() => {
    Aos.init();
    ReactGA.initialize();
  }, []);
  const [color, setColor] = useState(false);
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const closeMenu = () => setClick(false);

  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);
  return (
    <react.Fragment>
      <div className={color ? "nav-wrapper active" : "nav-wrapper"}>
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={30} style={{ color: "#64ffda" }} />
          ) : (
            <FaBars size={30} style={{ color: "#64ffda" }} />
          )}
        </div>
        <nav>
          <div className={color ? "nav-wrapper active" : "nav-wrapper"}>
            <div
              className="logo-wrapper"
              data-aos="fade-down"
              data-aos-duration="2000"
            >
              {" "}
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={18}
                duration={500}
                onClick={() => {
                  ReactGA.pageview("Home");
                  closeMenu();
                }}
              >
                <img src={logo} alt="logo" className="logo" />
              </Link>
            </div>
            <ul
              className={
                click ? "navitems active form-check" : "navitems form-check"
              }
            >
              <li
                className="nav-item"
                data-aos="fade-down"
                data-aos-duration="2000"
                data-aos-delay="50"
              >
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={18}
                  duration={500}
                  onClick={() => {
                    ReactGA.pageview("About");
                    closeMenu();
                  }}
                >
                  <span>About</span>
                </Link>
              </li>
              <li
                className="nav-item"
                data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-delay="100"
              >
                {" "}
                <Link
                  to="experience"
                  spy={true}
                  smooth={true}
                  offset={18}
                  duration={500}
                  onClick={() => {
                    ReactGA.pageview("Experience");
                    closeMenu();
                  }}
                >
                  <span>Experience</span>
                </Link>
              </li>
              <li
                className="nav-item"
                data-aos="fade-down"
                data-aos-duration="2000"
                data-aos-delay="150"
              >
                {" "}
                <Link
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={18}
                  duration={500}
                  onClick={() => {
                    ReactGA.pageview("Work");
                    closeMenu();
                  }}
                >
                  <span>Work</span>
                </Link>
              </li>

              <li
                className="nav-item"
                data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-delay="200"
              >
                <a href={pdf} target="_blank" rel="noreferrer">
                  <button className="btn">Resume</button>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </react.Fragment>
  );
}

export default NavBar;
