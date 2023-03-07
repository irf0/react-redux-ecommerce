// src/components/Search.js

import React, { useState } from "react";

function Search() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  console.log(results);
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch(
      `https://react-redux-ecommerce-six.vercel.app/api/items/${query}?populate=image`,
      { method: "GET" }
    );
    const data = await response.json();

    setResults(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={query} onChange={handleInputChange} />
        <button type="submit">Search</button>
      </form>

      {/* {results.map((result) => (
            <div key={result.id}>
            <h2>{result.name}</h2>
            </div>
        ))} */}
    </div>
  );
}

export default Search;
