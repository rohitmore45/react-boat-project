import React, { useState } from "react";
import logo from "../images/boat-logo.svg";
import styles from "./BoatNavbar.module.css";
import CategoryModal from "./CategoryModal";
import LoginModal from "./LoginModal";

export default function BoatNavbar() {
  const [isHovering, setIsHovering] = useState(false);
  const [loginModalShow, setLoginModalShow] = React.useState(false);
  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-white
       position-fixed z-1 top-0 w-100 "
        style={{ height: 82 }}
      >
        <div className="container-fluid d-flex gap-5">
          <a className="navbar-brand" href="#">
            <img
              src={logo}
              alt="boat_logo"
              height={35}
              width={85}
              className={`${styles.img} ms-4`}
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  className={`nav-link dropdown-toggle ${styles.navbarLinks}`}
                  onMouseEnter={() => setIsHovering(true)}
                >
                  Categories
                </a>
              </li>
              {
                <CategoryModal
                  isHovering={isHovering}
                  setIsHovering={setIsHovering}
                />
              }
              <li className="nav-item">
                <a className={`nav-link ${styles.navbarLinks}`} href="#">
                  boAt Personalization
                </a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${styles.navbarLinks}`} href="#">
                  Gift with BoAt
                </a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${styles.navbarLinks}`} href="#">
                  Corporate Orders
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className={`nav-link dropdown-toggle ${styles.navbarLinks}`}
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  More
                </a>

                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li className={`${styles.moreOptions}`}>
                    <a className="dropdown-item" href="#">
                      Daily Deals
                    </a>
                  </li>
                  <li className={`${styles.moreOptions}`}>
                    <a className="dropdown-item" href="#">
                      Do What FloAts Your BoAt
                    </a>
                  </li>
                  <li className={`${styles.moreOptions}`}>
                    <a className="dropdown-item" href="#">
                      Blogs
                    </a>
                  </li>
                  <li className={`${styles.moreOptions}`}>
                    <a className="dropdown-item" href="#">
                      Refer & Earn
                    </a>
                  </li>
                  <li className={`${styles.moreOptions}`}>
                    <a className="dropdown-item" href="#">
                      Careers
                    </a>
                  </li>
                  <li className={`${styles.moreOptions}`}>
                    <a className="dropdown-item" href="#">
                      Social Responsibility
                    </a>
                  </li>
                  <li className={`${styles.moreOptions}`}>
                    <a className="dropdown-item" href="#">
                      Store Locator
                    </a>
                  </li>
                </ul>
              </li>
            </ul>

            <div className="d-flex gap-3">
              <form>
                <div className="input-group ">
                  <span className="bi bi-search input-group-text"></span>
                  <input
                    className={styles.search}
                    type="search"
                    placeholder="Search boAt..  "
                    aria-label="Search"
                  />
                </div>
              </form>
              <div className={`d-flex gap-3 ${styles.bag} mx-3`}>
                <span
                  className="bi bi-person"
                  onClick={() => {
                    setLoginModalShow(true);
                  }}
                ></span>
                <LoginModal
                  show={loginModalShow}
                  onHide={() => setLoginModalShow(false)}
                />
                <span className="bi bi-bag "></span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
