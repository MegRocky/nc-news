import { Link } from "react-router-dom";
import { useState } from "react";

import TopicList from "./TopicList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons/faCaretUp";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons/faCaretDown";
import { useContext } from "react";
import { CurrentUserContext } from "./LoggedInUser";
function Header() {
  const [categoryDropdownY, setCategoryDropdown] = useState(false);
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const handleLogout = () => {
    setCurrentUser(null);
  };

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
        {currentUser ? (
          ""
        ) : (
          <Link to="/login">
            <li>Login</li>
          </Link>
        )}
      </ul>
      <ul className="topics-dropdown">
        {categoryDropdownY ? <TopicList /> : ""}
      </ul>
      {currentUser ? (
        <p className="current-user">
          Hello {currentUser}
          <span
            className="logout-link"
            aria-label="logout-link"
            onClick={handleLogout}
          >
            logout here
          </span>
        </p>
      ) : (
        ""
      )}
    </header>
  );
}

export default Header;
