import React, { useState, useEffect } from "react";
import Card from "../Card";
import API from "../../utils/API";
import "./style.css";

function SavedContainer() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    loadBooks();
  }, []);

  function loadBooks() {
    API.getBooks()
      .then((res) => setBooks(res.data))
      .catch((err) => console.log(err));
  }

  return (
    <div className="jumbotronWrapper">
      <div className="jumbotron savedContainer">
        <p className="lead savedHeader">Saved Books</p>
        {books.length ? (
          <>
            {books.map((book) => (
              <Card
                key={book._id}
                title={book.title}
                author={book.author}
                description={book.description}
              />
            ))}
          </>
        ) : (
          <h3>No Results to Display</h3>
        )}
      </div>
    </div>
  );
}

export default SavedContainer;
