import React from "react";
import ContactUs from "../../components/contact-us/ContactUs";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Katex Entertainment | Contact</title>
        <meta name="description" content="Please reach to us for any queries" />
        <link rel="canonical" href="/contact" />
      </Helmet>
      <ContactUs />
    </>
  );
};

export default Contact;
