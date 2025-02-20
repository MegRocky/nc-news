import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getTopics } from "./api";
import TopicList from "./TopicList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons/faCaretUp";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons/faCaretDown";
function Header() {
  const [categoryDropdownY, setCategoryDropdown] = useState(false);

  return (
    <header>
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
          className={categoryDropdownY ? "topics-with-dropdown" : ""}
        >
          Topics{" "}
          {categoryDropdownY ? (
            <FontAwesomeIcon icon={faCaretDown} />
          ) : (
            <FontAwesomeIcon icon={faCaretUp} />
          )}
        </li>
      </ul>
      <ul className="topics-dropdown">
        {categoryDropdownY ? <TopicList /> : ""}
      </ul>
    </header>
  );
}

export default Header;
