import React from "react";
import { Navbar } from "../Navbar";
import { makeStyles } from "@material-ui/core";

const useAbout = makeStyles({
  background: {
    backgroundImage: `linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(26,34,213,1) 36%, rgba(0,212,255,1) 100%)`,
    width: "100%",
    height: "92%",
    backgroundPosition: "center",
    position: "absolute",
    zIndex: -1,
  },
  main_text: {
    textAlign: "center",
    position: "relative",
    top: "41%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "white",
  },
  button_text: {
    color: "white",
    textDecoration: "none",
  },
});

export const About = () => {
  const classes = useAbout();
  return (
    <>
      <Navbar />
      <div className={`${classes.background}`}>
        <div className={classes.main_text}>
          <h3>
            {
              "We proud ourselves in delivering the best customer service in our region. It is about making connections with the community."
            }
          </h3>
        </div>
      </div>
    </>
  );
};
