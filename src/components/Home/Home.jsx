import React, { useEffect } from "react";
import "./home.css";

import { Box } from "@material-ui/core";
import { IoMdMail } from "react-icons/io";
import { AiFillCloseCircle } from "react-icons/ai";
import { IconButton } from "@material-ui/core";
import { Collapse } from "@material-ui/core";
import { CAlertLink } from "@coreui/react";

import AOS from "aos";
import "aos/dist/aos.css";
function Home() {
  const [open, setOpen] = React.useState(false);
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <React.Fragment>
      <div className="row banner">
        <div className="banner-text">
          <h1 className="font-monospace display-5 h1-leftmargin">
            <span
              className="textThree"
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-delay="50"
            >
              Hello, I am
            </span>
          </h1>
          <h1 className="font-monospace textTwo">
            <span>JEREMIAH OMOLO.</span>
          </h1>
          <h3 className="font-monospace fs-4">
            <span
              className="textOne"
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-delay="50"
            >
              <span className="light"> A Full Stack Developer</span>
            </span>
          </h3>
          <hr />
          <Box
            sx={{ width: "100%" }}
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-delay="50"
          >
            <Collapse in={open}>
              <CAlertLink
                action={
                  <IconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                    onClick={() => {
                      setOpen(!open);
                    }}
                    sx={{ backgroundColor: "red" }}
                  >
                    <AiFillCloseCircle fontSize="inherit" />
                  </IconButton>
                }
                sx={{
                  mb: 2,
                  backgroundColor: "#ccd6f6",
                  color: "#0a192f",
                  fontFamily: "NTR",
                  fontSize: "1.5rem",
                }}
              >
                email me: jeremiom.dev@gmail.com
              </CAlertLink>
            </Collapse>
            <button
              className="btnmore"
              onClick={() => {
                setOpen(!open);
              }}
            >
              <IoMdMail className="mail" />
              Get In Touch
            </button>
          </Box>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Home;
