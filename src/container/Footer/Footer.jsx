import React from "react";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

import { Newsletter } from "../../components";
import { FooterOverlay } from "../../components";

import "./Footer.css";

const Footer = () => (
  <div className="app__footer section__padding">
    <FooterOverlay />
    <Newsletter />
  </div>
);

export default Footer;
