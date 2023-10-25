import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
// import classes from "../layout/MainNavbar.module.css";

const AllMeetupItem = (props) => {
  return (
    <div className="col-6">
      <Card style={{ width: "28rem", marginTop:"3rem"}}>
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.description}</Card.Text>
          <Button variant="primary">Check out</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default AllMeetupItem;
