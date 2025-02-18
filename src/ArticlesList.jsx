import { useEffect, useState } from "react";
import { getArticles } from "./api";
import ArticleListEntry from "./ArticleListEntry";
import { useParams } from "react-router-dom";

function ArticlesList() {
  const [articleList, setArticleList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const topicName = useParams().topic;

  useEffect(() => {
    getArticles(topicName)
      .then((articles) => {
        setArticleList(articles);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [topicName]);
  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <section>
      <h1>Latest {topicName} Articles</h1>
      {articleList.map((article) => {
        return (
          <ArticleListEntry
            id={article.article_id}
            key={article.article_id}
            title={article.title}
            topic={article.topic}
            author={article.author}
            votes={article.votes}
            comments={article.comment_count}
            posted={article.created_at}
            img={article.article_img_url}
          ></ArticleListEntry>
        );
      })}
    </section>
  );
}
export default ArticlesList;
