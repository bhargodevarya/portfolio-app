import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

class Book extends Component {
  render() {
    return (
          <div id="bookId" className="card" style={{width: "18rem"}}>
            <img className="card-img-top" src="..." alt="book Image" />
            <div className="card-body">
              <p className="card-text">
                Text for the book
              </p>
            </div>
          </div>
    );
  }
}

export default Book;
