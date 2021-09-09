import React from "react";
import Home from "./pages/home/Home.js";
import About from "./pages/about/About.js";
import Services from "./pages/services/Services.js";
import ServicesDetails from "./pages/services/ServicesDetails.js";
import Blog from "./pages/blog/Blog.js";
import Error404 from "./pages/error404/Error404.js";
import { Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/services-details" component={ServicesDetails} />
        <Route exact path="/blog" component={Blog} />
        <Route component={Error404} />
      </Switch>
    </>
  );
};

export default App;
