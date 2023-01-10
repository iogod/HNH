import React, { useState } from "react";
import "./navbar.scss";
import heart from "../../img/hnh1.png";
import Popper from "../Popup/Popper";
import Former from "../Former/Former";
function Navbar() {
  const [popState, changePop] = useState(true);
  const handleChange = () => {
    const val = !popState;
    changePop(val);
  };
  return (
    <header className="nav">
      <div
        hidden={popState}
        onClick={handleChange}
        className="popup__overlay"
      ></div>

      <div hidden={popState} className="popup">
        <div className="popup__form">
          <form className="form">
            <input
              type="text"
              id="firsname"
              name="fname"
              placeholder="First Name"
              required
            />
            <input
              type="text"
              id="lastname"
              name="lname"
              placeholder="Last Name"
              required
            />
            <br />
            <input
              type="text"
              id="compname"
              name="cname"
              placeholder="Company Name"
              required
            />
            <br />
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Email"
              required
            />
            <br />
            <button
              onClick={() => {
                console.log("Do nothing");
              }}
            >
              Submit
            </button>{" "}
            <button href="#" onClick={handleChange}>
              Close
            </button>
          </form>
        </div>
        <button href="#" onClick={handleChange} className="popup__close">
          X
        </button>
      </div>
      <ul>
        <li className="nav__item">
          <a href="#about">About Me</a>
        </li>

        <li className="nav__item">
          <a href="#offers">Offers</a>
        </li>

        <li className="nav__item">
          <a href="#comments">Comments</a>
        </li>

        <li className="nav__item">
          <a onClick={handleChange}>Sign Up</a>
        </li>
      </ul>
    </header>
  );
}

export default Navbar;
