import { useState, useEffect } from "react";
import "./App.css";
import ArticlesList from "./ArticlesList";
import { Route, Routes } from "react-router-dom";
import FullArticle from "./FullArticle";
import Header from "./Header";
import ErrorPage from "./ErrorPage";
import LoginForm from "./LoginForm";
import { getUsers } from "./api";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUsers()
      .then((users) => {
        setUsers(users);
      })
      .catch(console.log)
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<ArticlesList />} />
        <Route path="/articles" element={<ArticlesList />} />
        <Route
          path="/articles/:article_id"
          element={<FullArticle users={users} />}
        />
        <Route path="/topics/:topic" element={<ArticlesList />} />
        <Route path="/login" element={<LoginForm users={users} />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
