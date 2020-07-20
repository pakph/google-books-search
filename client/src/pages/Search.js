import React, { useState } from "react";
import API from "../utils/API";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import ResultsContainer from "../components/ResultsContainer";

function Search() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState({
    volumeInfo: {
      title: "",
      authors: [],
      imageLinks: {
        thumbnail: "",
      },
    },
    searchInfo: {
      textSnippet: "",
    },
  });

  function searchBooks(query) {
    API.search(query)
      .then((res) => setResults(res.data.items))
      .catch((err) => console.log(err));
  }

  function handleInputChange(event) {
    setSearch(event.target.value);
  }

  function handleSearchSubmit(event) {
    event.preventDefault();
    searchBooks(search);
  }
  return (
    <>
      <Header />
      <SearchBar
        value={search}
        handleInputChange={handleInputChange}
        handleSearchSubmit={handleSearchSubmit}
      />
      <ResultsContainer data={results} />
    </>
  );
}

export default Search;
