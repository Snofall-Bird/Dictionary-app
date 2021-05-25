import React, { useState } from "react";
// import axios from "axios";
import Results from "./Results";
import "./dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);

  function search() {
    alert(`searching for ${keyword} definition`);
  }
  function handleKeywordChange(event) {
    // console.log(event.target.value);
    setKeyword(event.target.value);
  }
  return (
    <div class="Dictionary">
      {" "}
      <section>
        <h4>What definition do you need?</h4>
        <form onSubmit={search}>
          <input
            type="search"
            autoFocus={true}
            onChange={handleKeywordChange}
            placeholder="type your word to search here"
          ></input>
          <button type="submit">Search</button>
        </form>
      </section>
      <Results results={""} keyword={keyword} />{" "}
    </div>
  );
}
