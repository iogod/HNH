import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Row } from "react-bootstrap";
import "./former.scss";
function Former() {
  return (
    // <Form className="form">
    //   <Form.Group className="mb-4" controlId="firstName">
    //     <Form.Label>Enter Name</Form.Label>
    //     <Form.Control type="text" placeholder="Enter First Name" />
    //   </Form.Group>

    //   <Form.Group className="mb-3" controlId="lastName">
    //     <Form.Label>Last Name</Form.Label>
    //     <Form.Control type="text" placeholder="Enter Last Name" />
    //   </Form.Group>

    //   <Form.Group className="mb-3" controlId="companyName">
    //     <Form.Label>Last Name</Form.Label>
    //     <Form.Control type="text" placeholder="Enter Company" />
    //   </Form.Group>

    //   <Form.Group className="mb-3" controlId="lastName" rows="2">
    //     <Form.Label>Comment</Form.Label>

    //     <textarea
    //       className="form-control"
    //       id="exampleFormControlTextarea1"
    //       rows="5"
    //     />
    //   </Form.Group>

    //   <Button variant="primary" type="submit">
    //     Submit
    //   </Button>
    // </Form>
    <div className="big">
      <form className="form">
        <input type="text" id="fname" name="fname" placeholder="First Name" />

        <input type="text" id="lname" name="lname" placeholder="Last Name" />
        <br />
        <input type="text" id="cname" name="cname" placeholder="Company Name" />
        <br />
        <textarea
          maxLength={"250"}
          rows="5"
          placeholder=" Please leave a review (Max 250 characters)"
        ></textarea>
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Former;
