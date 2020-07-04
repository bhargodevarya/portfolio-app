import React, { Component } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

class Book extends Component {
  processBooks(books) {
    return books.map((book) => {
      return <div id="book._id" className="card" style={{ width: "10rem" }}>
          <img className="card-img-top" src={book.image} alt="book Image" />
          <div class="card-img-overlay"><div className="card-body">
            <p className="card-text" style={{color:"red"}}>{book.description}</p>
          </div></div>
        </div>
    });
  }

  render() {
    const { books } = this.props;
    return (
      <div>
        <div id="bookId" className="card" style={{ width: "18rem" }}>
          <img className="card-img-top" src="..." alt="book Image" />
          <div className="card-body">
            <p className="card-text">Text for the book</p>
          </div>
        </div>
        <br></br>
        <ul>{this.processBooks(books)}</ul>
      </div>
    );
  }
}

//TODO, make call to get the book details from the server
export function getStaticProps() {
  console.log("Static props for books page");
  //const books = await axios.get('http://localhost:5001/book')
  //return {props: {books: books}}
  return {
    props: {
      books: [
        {
          category: ["lifestyle", "self-help"],
          _id: "5eff15975bbcf3c7fde427c4",
          author: "Robin Sharma",
          image: "https://book-app-images.s3.amazonaws.com/5AMClub.jpg",
          description: "Morning routing book",
          __v: 0,
          title: "The 5 AM club",
        },
        {
          category: ["lifestyle", "self-help"],
          _id: "5eff1eac875d54c46197df5a",
          author: "Jordan B. Peterson",
          image: "https://book-app-images.s3.amazonaws.com/12rulesforlife.jpg",
          description: "Rules for life",
          __v: 0,
          title: "12 rules for life",
        },
        {
          category: ["history", "biography"],
          _id: "5eff20a9b70e60b255a75a58",
          author: "Vikram Sampath",
          image: "https://book-app-images.s3.amazonaws.com/savarkarBook.jpg",
          description: "Biography of veer Savarkar",
          __v: 0,
          title: "Savarkar echoes from a forgotten past",
        },
      ],
    },
  };
}

export default Book;
