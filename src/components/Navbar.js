import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import sangamLogo from "../resources/android-chrome-72x72.png";

export default function Navbar(props) {
  const [homeFlag, setHomeFlag] = useState(true);

  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{ backgroundColor: `${props.mode}` }}
    >
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul
            className="navbar-nav me-auto mb-2 mb-lg-0"
            style={{ fontSize: "24px" }}
          >
            <li className="nav-item" onClick={() => setHomeFlag(true)}>
              <Link className="navbar-brand" to="/">
                <img
                  src={sangamLogo}
                  height={72}
                  width={72}
                  className="img-thumbnail border-0"
                  alt="..."
                />
              </Link>
            </li>
            <li
              className="nav-item mt-2 fw-bold"
              onClick={() => setHomeFlag(true)}
            >
              <Link className="nav-link" to="/">
                {homeFlag ? "Sangam Electronics" : "Home"}
              </Link>
            </li>
            <li className="nav-item mt-2" onClick={() => setHomeFlag(false)}>
              <Link className="nav-link" aria-current="page" to="/introduction">
                {props.introduction}
              </Link>
            </li>
            <li className="nav-item mt-2" onClick={() => setHomeFlag(false)}>
              <Link className="nav-link" to="/productAndServices">
                {props.productServices}
              </Link>
            </li>
            <li className="nav-item mt-2" onClick={() => setHomeFlag(false)}>
              <Link className="nav-link" to="/about">
                {props.aboutUs}
              </Link>
            </li>
            <li className="nav-item mt-2" onClick={() => setHomeFlag(false)}>
              <Link className="nav-link" to="/contact">
                {props.contact}
              </Link>
            </li>
          </ul>
          {/* <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-primary" type="submit">Search</button>
            </form> */}
          {/* <div class={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
            <input onClick={props.toggleMode} class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label class="form-check-label" for="flexSwitchCheckDefault">Enable Dark Mode</label>
        </div> */}
          <div className="w-10">
            <select
              onChange={props.toggleMode}
              id="mySelect"
              class="form-select form-select-sm"
              aria-label=".form-select-sm example"
            >
              <option value="light" selected>
                Light
              </option>
              <option value="dark">Dark</option>
              <option value="green">Green</option>
              <option value="blue">Blue</option>
            </select>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "Set Title here",
  link: "No Link",
};
