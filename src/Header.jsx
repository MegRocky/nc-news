import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getTopics } from "./api";

function Header() {
  const [categoryDropdownY, setCategoryDropdown] = useState(false);
  const [currentTopics, setCurrentTopics] = useState([]);

  useEffect(() => {
    getTopics().then((topics) => setCurrentTopics(topics));
  }, []);

  return (
    <>
      <h1 className="nc-news-wordmark">Northcoders News</h1>
      <ul className="nav-list">
        <Link to="/articles">
          <li>All Articles</li>
        </Link>
        <li
          onClick={() => {
            setCategoryDropdown(!categoryDropdownY);
          }}
        >
          Topics ↓
          <ul>
            {categoryDropdownY
              ? currentTopics.map((topic) => {
                  return (
                    <Link to={`topics/${topic.slug} `} key={topic.slug}>
                      <li className="topic-list-item"> {topic.slug} </li>
                    </Link>
                  );
                })
              : ""}
          </ul>
        </li>
      </ul>
    </>
  );
}

export default Header;
