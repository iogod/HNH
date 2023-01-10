import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import "./comments.scss";

function Comments() {
  return (
    <div className="com__container">
      <div className="comments">
        <div className="comments__img">
          <span>RJ</span>
        </div>
        <div className="comments__company">IOG LLC</div>
        <p className="comments__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacinia
          mollis imperdiet. Fusce sit amet felis magna. Aenean a tortor et nulla
          semper feugiat at vel metus. Duis quis tortor sed orci suscipit
          venenatis tincidunt a dolor. Etiam faucibus libero quis ultricies
          placerat. Donec nec rutrum lorem, sagittis malesuada dolor. Proin et
          facilisis magna, nec tincidunt diam. Phasellus mattis magna dapibus,
          sagittis massa ac, accumsan enim. Donec dictum tincidunt laoreet.
        </p>
        <div className="comments__time">2 days ago</div>
      </div>
    </div>
  );
}

export default Comments;
