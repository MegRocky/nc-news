import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getTopics } from "./api";
import TopicList from "./TopicList";

function Header() {
  const [categoryDropdownY, setCategoryDropdown] = useState(false);

  return (
    <>
      <h1 className="nc-news-wordmark">
        <Link className="nc-news-wordmark" to="/">
          Northcoders News
        </Link>
      </h1>
      <ul className="nav-list">
        <Link to="/articles">
          <li>All Articles</li>
        </Link>
        <li
          onClick={() => {
            setCategoryDropdown(!categoryDropdownY);
          }}
        >
          Topics ↓<ul>{categoryDropdownY ? <TopicList /> : ""}</ul>
        </li>
      </ul>
    </>
  );
}

export default Header;
