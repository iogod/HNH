import React, { useState } from "react";
import "./commentContainer.scss";
import { Row } from "react-bootstrap";
import Comments from "../../components/Comments/Comments";
import Former from "../../components/Former/Former";

function CommentContainer() {
  const [formState, setFormCount] = useState(false);
  const toggleForm = () => {
    setFormCount(true);
  };
  return (
    <div>
      <Row className="comment__toggle justify-content-center align-items-center">
        <a className="comment__btn" onClick={toggleForm}>
          <label id="comments">Leave a Testimonal/Comment</label>
        </a>
        {formState ? <Former /> : null}

        <Comments />
        <Comments />
        <Comments />
      </Row>
    </div>
  );
}

export default CommentContainer;
