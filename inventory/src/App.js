import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Container from "react-bootstrap/Container";
import "./sass/layout.scss";
import AboutMe from "./components/AboutMe/Aboutme";
import Services from "./components/Services/Services";
import CommentContainer from "./components/CommentContainer/CommentContainer";

function App() {
  return (
    <React.Fragment>
      <Navbar></Navbar>

      <Container fluid="xl">
        <Intro />
        <AboutMe />

        <Services />

        <CommentContainer />
      </Container>
    </React.Fragment>
  );
}

export default App;
