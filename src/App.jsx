import { useState } from "react";
import "./App.css";
import ArticlesList from "./ArticlesList";
import { Route, Routes } from "react-router-dom";
import FullArticle from "./FullArticle";
import Header from "./Header";
import ErrorPage from "./ErrorPage";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<ArticlesList />} />
        <Route path="/articles" element={<ArticlesList />} />
        <Route path="/articles/:article_id" element={<FullArticle />} />
        <Route path="/topics/:topic" element={<ArticlesList />} />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
