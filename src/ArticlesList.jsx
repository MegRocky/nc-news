import { useEffect, useState } from "react";
import { getArticles } from "./api";
import ArticleListEntry from "./ArticleListEntry";

function ArticlesList() {
  const [articleList, setArticleList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getArticles()
      .then((articles) => {
        setArticleList(articles);
      })
      .finally(() => {
        setIsLoading(false);
      });
  });
  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <section>
      <h1>Latest Articles</h1>
      {articleList.map((article) => {
        return (
          <ArticleListEntry
            key={article.title}
            title={article.title}
            topic={article.topic}
            author={article.author}
            votes={article.votes}
            comments={article.comment_count}
            posted={article.created_at}
          ></ArticleListEntry>
        );
      })}
    </section>
  );
}
export default ArticlesList;
