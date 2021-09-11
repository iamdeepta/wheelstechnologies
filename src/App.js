import React from "react";
import Home from "./pages/home/Home.js";
import About from "./pages/about/About.js";
import Services from "./pages/services/Services.js";
import ServicesDetails from "./pages/services/ServicesDetails.js";
import Blog from "./pages/blog/Blog.js";
import Error404 from "./pages/error404/Error404.js";
import { Route, Switch } from "react-router-dom";
//import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" render={Home} />
        <Route exact path="/about" render={About} />
        <Route exact path="/services" render={Services} />
        <Route exact path="/services-details" render={ServicesDetails} />
        <Route exact path="/blog" render={Blog} />
        <Route render={Error404} />
      </Switch>
    </>
  );
};

export default App;
