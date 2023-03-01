import { useState } from "react";
import "../Search/Search.css";
import { searchArticles } from "../apiCalls";
import { Link } from "react-router-dom";
import userEvent from "@testing-library/user-event";

const Search = () => {
  const [userInput, setUserInput] = useState("");
  const [foundArticles, setFoundArticles] = useState([]);

  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleClick = async () => {
    const found = await searchArticles(userInput);
    setFoundArticles(found);
    setUserInput("");
  };

  const showArticles = () => {
    return foundArticles.map((article) => {
      return (
        <Link key={foundArticles.indexOf(article)} to={article.web_url}>
          <h1 className="articleTitle">{article.headline.main}</h1>
        </Link>
      );
    });
  };

  return (
    <div className="searchPage">
      <h1>Search for NYT articles!</h1>
      <div>
        <input
          className="userInput"
          type="text"
          value={userInput}
          onChange={(e) => handleChange(e)}
        />
        <button className="searchButton" onClick={handleClick}>
          Search
        </button>
      </div>
      {showArticles()}
    </div>
  );
};

export default Search;
