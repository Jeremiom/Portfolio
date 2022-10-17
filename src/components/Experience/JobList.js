import { Tab, Tabs } from '@material-ui/core';
import {Typography} from '@material-ui/core';
import React from 'react'
import { PropTypes } from 'prop-types';
import {Box} from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

const isHorizontal = window.innerWidth < 600;

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    if (isHorizontal)
    {
        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`full-width-tablpanel=${index}`}
                aria-labelledby={`full-width-tab-${index}`}
                {...other}>
                {value === index && (
                    <Box p={3}>
                        <Typography>{children}</Typography>
                    </Box>
                )}
            </div>
        );
    } else
    {
        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`vertical-tabpanel`}
                {...other}>
                {value === index && (
                    <Box p={3}>
                        <Typography>{children}</Typography>
                    </Box>
                )}
            </div>
        );
    }
}
TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};
  
function allProp(index) {
    if (isHorizontal)
    {
        return {
            id: `full-width-tab-${index}`,
            "arias-controls": `full-width-tabpanel-${index}`
        };
    } else
    {
        return {
            id: `vertical-tab-${index}`
        };
    }
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: "theme.palette.background.paper",
        display: "flex",
        height: 300
    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`
    }
}));
const JobList = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const jobExp = {
        "Carte": {
            jobTitle: "Freelance Software Engineer",
            duration: "June 2022 - PRESENT",
            desc: [
                "Designed SQL Queries and Procedures in SQL Server Management to store and manage user data that connects to .NET via ADO.NET .",
                "Utilized SQL relational database and Foreign Key references to implement joins and User Defined Tables for user stored procedures.",
                "Created custom models, domains, services, interfaces, and API controllers in .NET to connect database to client-side requests.",
                "Collaborated with the product team to understand the specifications and requirements needed to enrich the UI.",
                "Utilized React Framework to develop UI/UX that rendered & updated user information with some of the most popular libraries, and technologies including but not limited to: HTML5, CSS3, JavaScript Bootstrap, Ajax, and OOP. ",
                "Implemented form validation through Formik and Yup as well as Data annotations in .NET.",
                "Processed Middle, and Back-End procedures in collaboration with a React Specialist to create a view that allows restaurant staff to add / edit / view seating locations for their restaurant.",
                "Designed and debugged software developed in an AGILE environment with code talks and code reviews among colleagues to ensure code quality.",
                "Utilized Source Control(Git) to resolve conflicts, commit and merge PR's in a collaborative manner with fellow developers."
            ]
        }
    };

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }
  return (
      <div className={classes.root}>
    <Tabs
      orientation={!isHorizontal ? "vertical" : null}
      variant={isHorizontal ? "fullWidth" : "scrollable"}
      value={value}
      onChange={handleChange}
      className={classes.tabs}
      TabIndicatorProps={{
        style: {
              backgroundColor: "#64ffda",
              marginLeft: '5rem'
        },
      }}
    >
      {Object.keys(jobExp).map((key, i) => (
        <Tab
          label={isHorizontal ? `0${i}.` : key}
          {...allProp(i)}
          sx={{
            fontFamily: "NTR",
            fontSize: "1.5rem",
            display: "inline-flex",
            alignItems: "flex-start",
            marginLeft: "5.5rem",
          }}
        />
      ))}
    </Tabs>
    {Object.keys(jobExp).map((key, i) => (
      <TabPanel value={value} index={i}>
        <span className="joblist-job-title">
          {jobExp[key]["jobTitle"] + " @ "}
        </span>
        <span className="joblist-job-company">{key}</span>
        <div className="joblist-duration">
          {jobExp[key]["duration"]}
        </div>
        <ul className="job-description">
          {jobExp[key]["desc"].map(function (descItem, i) {
            return (

                <li key={i}>{descItem}</li>

            );
          })}
        </ul>
      </TabPanel>
    ))}

  </div>
);
};

export default JobList;