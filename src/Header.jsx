import { Link } from "react-router-dom";
import { useState } from "react";

function Header() {
  const [categoryDropdownY, setCategoryDropdown] = useState(false);

  return (
    <>
      <h1 className="nc-news-wordmark">Northcoders News</h1>
      <ul className="nav-list">
        <Link to="/articles">
          <li>All Articles</li>
        </Link>
        <li>Topics ↓</li>
      </ul>
    </>
  );
}

export default Header;
