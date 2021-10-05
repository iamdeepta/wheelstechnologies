import React from "react";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Services from "./pages/services/Services";
import ServicesDetails from "./pages/services/ServicesDetails";
import Blog from "./pages/blog/Blog";
import WorkDetails from "./pages/workDetails/WorkDetails";
import Error404 from "./pages/error404/Error404";
import { Route, Switch } from "react-router-dom";
//import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./css/bootstrap.min.css";

import "./css/animate.min.css";

import "./css/backToTop.css";

//import "./css/fontAwesome5Pro.css";

//import "./css/elegantFont.css";
import "./css/default.css";
import "./css/style.css";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" render={Home} />
        <Route exact path="/about" render={About} />
        <Route exact path="/services" render={Services} />
        <Route exact path="/services-details" render={ServicesDetails} />
        <Route exact path="/blog" render={Blog} />
        <Route exact path="/work-details" render={WorkDetails} />
        <Route render={Error404} />
      </Switch>
    </>
  );
};

export default App;
