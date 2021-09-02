import React from "react";
import { Link } from "react-router-dom";
import "../../css/Footer.css";

const Footer = () => {
  return (
    <div className="footer_wrapper">
      <h6 className="question_header">Questions? Call 1-844-505-2993</h6>
      <div className="group_wrapper">
        <div className="split" id="footer-list">
          <ul className="list">
            <Link to="/faq" key="faq" className="link">
              <li className="list-item">FAQ</li>
            </Link>
            <Link to="/investor" key="investor" className="link">
              <li className="list-item">Investor Relations</li>
            </Link>
            <Link to="/waysToWatch" key="ways" className="link">
              <li className="list-item">Ways to Watch</li>
            </Link>
            <Link to="/corp" key="corp" className="link">
              <li className="list-item">Corporate Information</li>
            </Link>
            <Link to="/netflixOnly" key="only" className="link">
              <li className="list-item">Only on Netflix</li>
            </Link>
            <Link>
              <li></li>
            </Link>
          </ul>
        </div>
        <div className="split" id="footer-list">
          <ul className="list">
            <Link to="/help" key="help" className="link">
              {" "}
              <li className="list-item">Help Center</li>
            </Link>
            <Link to="/jobs" key="jobs" className="link">
              <li className="list-item">Jobs</li>
            </Link>
            <Link to="/terms" key="terms" className="link">
              <li className="list-item">Terms of Use</li>
            </Link>
            <Link to="/contact" key="contact" className="link">
              <li className="list-item">Contact Us</li>
            </Link>
          </ul>
        </div>
        <div className="split" id="footer-list">
          <ul className="list">
            <Link to="/account" key="account" className="link">
              <li className="list-item">Account</li>
            </Link>
            <Link to="/redeem" key="giftRedeem" className="link">
              <li className="list-item">Redeem Gift Cards</li>
            </Link>
            <Link to="/privacy" key="privacy" className="link">
              <li className="list-item">Privacy</li>
            </Link>
            <Link to="/speedTest" key="sp_test" className="link">
              <li className="list-item">Speed Test</li>
            </Link>
          </ul>
        </div>
        <div className="split" id="footer-list">
          <ul className="list">
            <Link to="/media" key="media" className="link">
              <li className="list-item">Media Center</li>
            </Link>
            <Link to="/giftBuy" key="giftBuy" className="link">
              <li className="list-item">Buy Gift Cards</li>
            </Link>
            <Link to="/cookies" key="cookie" className="link">
              <li className="list-item">Cookie Preferences</li>
            </Link>
            <Link to="/legal" key="legal" className="link">
              <li className="list-item">Legal Notices</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
