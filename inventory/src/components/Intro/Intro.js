import React, { useState } from "react";
import "./intro.scss";
import Row from "react-bootstrap/Row";
function Intro() {
  const [popState, changePop] = useState(true);
  const handleChange = () => {
    const val = !popState;
    changePop(val);
  };
  return (
    <div>
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

      <header className="intro mgsmall">
        <Row className="intro__title ">
          <p>Head and Heart</p>
        </Row>
        <Row>
          <h1>That company that does this the best in the world</h1>
        </Row>

        <Row className="justify-content-sm-center butter">
          <div>
            <button onClick={handleChange}>Sign Up Here</button>
          </div>
        </Row>
        <Row>
          <div className="intro__seen">As Seen On</div>
        </Row>

        <Row>
          <div className="intro__seen--assets">
            <img src={require("../../img/seen1.png")} alt="no1"></img>
            <img src={require("../../img/seen2.png")} alt="no2"></img>
            <img src={require("../../img/seen3.png")} alt="no3"></img>
          </div>
        </Row>
      </header>
    </div>
  );
}

export default Intro;
