import React from "react";
import { Navbar } from "../Navbar";
import { makeStyles } from "@material-ui/core";

const useContact = makeStyles({
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
    top: "40%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "white",
  },
  button_text: {
    color: "white",
    textDecoration: "none",
  },
});

export const Contact = () => {
  const classes = useContact();
  return (
    <>
      <Navbar />
      <div className={`${classes.background}`}>
        <div className={classes.main_text}>
          <h3>{"We are available Monday - Saturdays from 9 Am - 7 Pm"}</h3>
        </div>
      </div>
    </>
  );
};
