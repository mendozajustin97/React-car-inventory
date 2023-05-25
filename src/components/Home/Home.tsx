import React, { Suspense } from "react";
import { makeStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { Navbar } from "../../components/Navbar";
import { Link } from "react-router-dom";

interface Props {
  title: string;
}

const useStyles = makeStyles({
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

export const Home = (props: Props) => {
  const classes = useStyles();
  return (
    <>
      <Navbar />
      <div className={`${classes.background}`}>
        <div className={classes.main_text}>
          <h1>{props.title}</h1>
          <Button>
            <Link to="/cars" className={classes.button_text}>
              Take me to my Car Inventory
            </Link>
          </Button>
        </div>
      </div>
    </>
  );
};
