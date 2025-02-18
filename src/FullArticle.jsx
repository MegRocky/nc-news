import { useParams } from "react-router-dom";
import { getArticle } from "./api";
import { useState, useEffect } from "react";
import CommentList from "./CommentList";

function FullArticle() {
  const articleId = useParams().article_id;
  const [currentArticle, setCurrentArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getArticle(articleId)
      .then((article) => {
        return setCurrentArticle(article);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <>
      <h1>{currentArticle.title}</h1>
      <h2>by {currentArticle.author}</h2>
      <img className="article-img" src={currentArticle.article_img_url} />

      <article>{currentArticle.body}</article>
      <CommentList article={articleId} />
    </>
  );
}
export default FullArticle;
