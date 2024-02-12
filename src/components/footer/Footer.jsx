import React from "react";
import styles from "./Footer.module.css";
import logo from "../images/boat-logo.svg";

export default function () {
  return (
    <div className="container-fluid mb-4">
      <div
        className={`${styles.footerContainer} d-flex justify-content-evenly pt-4`}
      >
        <div className={`mt-4`}>
          <div>
            <img src={logo} />
          </div>
          <div className={`${styles.section1Email} mt-3`}>
            Subscribe to out email alerts!
          </div>
          <div className={`input-group ${styles.section1Input}`}>
            <input
              style={{ fontSize: 14 }}
              type="email"
              placeholder="Enter you email address"
              className="input-group-text text-start p-2 w-75"
            />
            <button className="bi bi-arrow-right-circle input-group-text"></button>
          </div>
        </div>

        <div>
          <ul className={`list-unstyled ${styles.list}`}>
            <div className={`${styles.title}`}>Shop </div>
            <li>True Wireless Earbuds</li>
            <li>Wireless Headphones</li>
            <li>Wired Headphones</li>
            <li>Wireless Speakers</li>
            <li>Home Audio</li>
            <li>Mobile Accessories</li>
            <li>Smart Watches</li>
            <li>TRebel</li>
            <li>Misfit Trimmers</li>
            <li>Refer & Earn</li>
          </ul>
        </div>
        <div>
          <ul className={`list-unstyled ${styles.list}`}>
            <div className={`${styles.title}`}>Help </div>
            <li>Track Your Order </li>
            <li>Warranty & Support</li>
            <li>Return Policy </li>
            <li>Service Centers</li>
            <li>Bulk Orders</li>
            <li>FAQs</li>
            <li> Why Buy Direct</li>
          </ul>
        </div>

        <div>
          <ul className={`list-unstyled ${styles.list}`}>
            <div className={`${styles.title}`}>Company</div>
            <li>About boAt</li>
            <li>News</li>
            <li>Read Our Blog</li>
            <li>Careers</li>
            <li>Security</li>
            <li>Investor Relations </li>
            <li>Investor Relations</li>
            <li>Social Responsibility</li>
            <li>Warranty Policy</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
