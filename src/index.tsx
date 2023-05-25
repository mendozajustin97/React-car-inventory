import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { FirebaseAppProvider, AuthCheck } from "reactfire";
import { Home, Contact, About, Cars, SignIn } from "./components"; //NEW_ADDITION
import "./style.css";
import { firebaseConfig } from "./firebaseConfig";
import "firebase/auth";
import { Provider } from "react-redux";
import { store } from "./redux/store";

let myTitle = "Alcantara's Car Inventory";

ReactDOM.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig} suspense={true}>
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home title={myTitle} />
            </Route>
            <Route path="/cars">
              <Cars></Cars>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/signin">
              <SignIn></SignIn>
            </Route>
          </Switch>
        </Router>
      </Provider>
    </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
