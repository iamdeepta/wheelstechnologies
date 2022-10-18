import React, { useState, Suspense, lazy } from "react";
import Header from "./components/header/Header";
//import Home from "./pages/home/Home";
//import About from "./pages/about/About";
//import Contact from "./pages/contact/Contact";
//import Services from "./pages/services/Services";
//import ServicesDetails from "./pages/services/ServicesDetails";
//import Blog from "./pages/blog/Blog";
//import BlogDetailsMain from "./pages/blog/BlogDetailsMain";
//import WorkDetails from "./pages/workDetails/WorkDetails";
import FAQ from "./pages/faq/FAQ";
//import Error404 from "./pages/error404/Error404";
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
//import Concern from "./pages/concern/Concern";

const Home = lazy(() => import("./pages/home/Home"));
const About = lazy(() => import("./pages/about/About"));
const Contact = lazy(() => import("./pages/contact/Contact"));
const Services = lazy(() => import("./pages/services/Services"));
//const ServicesDetails = lazy(() => import("./pages/services/ServicesDetails"));
const Blog = lazy(() => import("./pages/blog/Blog"));
const BlogDetailsMain = lazy(() => import("./pages/blog/BlogDetailsMain"));
//const WorkDetails = lazy(() => import("./pages/workDetails/WorkDetails"));
const Error404 = lazy(() => import("./pages/error404/Error404"));
const Concern = lazy(() => import("./pages/concern/Concern"));

const App = () => {
  const isBrowser = () => typeof window !== "undefined";
  const [active_chat, setActiveChat] = useState(false);
  const activeChat = () => {
    if (window.scrollY > 50) {
      setActiveChat(true);
    }
  };

  if (isBrowser()) {
    window.addEventListener("scroll", activeChat);
  }

  return (
    <>
      <Suspense fallback={<div></div>}>
        <BottomNav />
        <BackToTop />
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/services" component={Services} />
          {/* <Route exact path="/services-details" component={ServicesDetails} /> */}
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/blog/:id" component={BlogDetailsMain} />
          {/* <Route exact path="/work-details" component={WorkDetails} /> */}
          <Route exact path="/our-concerns" component={Concern} />
          {/* <Route exact path="/faq" component={FAQ} /> */}
          <Route component={Error404} />
        </Switch>
        <Footer />
      </Suspense>

      {active_chat && (
        <MessengerCustomerChat
          themeColor="#e43b3b"
          pageId="103731102248863"
          appId="419551562969696"
        />
      )}
    </>
  );
};

export default App;
