import React from "react";
import logo from "../images/boat-logo.svg";
import styles from "./BoatNavbar.module.css";

export default function BoatNavbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light navbar-light">
        <div className="container-fluid d-flex gap-5">
          <a className="navbar-brand" href="#">
            <img
              src={logo}
              alt="boat_logo"
              height={35}
              width={85}
              className={styles.img}
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
                >
                  Categories
                </a>
                <ul
                  className="dropdown-menu w-100"
                  aria-labelledby="navbarDropdown"
                >
                  <li>
                    <a
                      className={`dropdown-item ${styles.navbarLinks}`}
                      href="#"
                    >
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>

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
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
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
                <span className="bi bi-person"></span>
                <span className="bi bi-bag "></span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
