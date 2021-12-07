import React from "react";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Services from "./pages/services/Services";
import ServicesDetails from "./pages/services/ServicesDetails";
import Blog from "./pages/blog/Blog";
import BlogDetailsMain from "./pages/blog/BlogDetailsMain";
import WorkDetails from "./pages/workDetails/WorkDetails";
import FAQ from "./pages/faq/FAQ";
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
import MessengerCustomerChat from "react-messenger-customer-chat";
import BackToTop from "./components/backToTop/BackToTop";
import Footer from "./components/footer/Footer.js";
import "./App.css";
import BottomNav from "./components/bottom-nav/BottomNav";

const App = () => {
  return (
    <>
      <BottomNav />
      <BackToTop />
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/services-details" component={ServicesDetails} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/blog/:id" component={BlogDetailsMain} />
        <Route exact path="/work-details" component={WorkDetails} />
        <Route exact path="/faq" component={FAQ} />
        <Route component={Error404} />
      </Switch>
      <Footer />
      <MessengerCustomerChat pageId="105073211942134" appId="419551562969696" />
    </>
  );
};

export default App;
