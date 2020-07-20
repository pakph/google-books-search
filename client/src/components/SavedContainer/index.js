import React, { useState, useEffect } from "react";
import SavedCard from "../SavedCard";
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
              <SavedCard
                key={book._id}
                title={book.title}
                author={book.author}
                synopsis={book.synopsis}
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
