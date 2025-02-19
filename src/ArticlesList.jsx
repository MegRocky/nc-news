import { useEffect, useState } from "react";
import { getArticles } from "./api";
import ArticleListEntry from "./ArticleListEntry";
import { useParams } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import ArticleFiterSort from "./ArticleFilterSort";
function ArticlesList() {
  const [articleList, setArticleList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const sortByQuery = searchParams.get("sorted_by");
  const orderQuery = searchParams.get("order");
  const topicName = useParams().topic;

  useEffect(() => {
    getArticles(topicName, sortByQuery, orderQuery)
      .then((articles) => {
        setArticleList(articles);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [topicName, sortByQuery, orderQuery]);
  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <section>
      <h1>Latest {topicName} Articles</h1>
      <ArticleFiterSort
        setSearchParams={setSearchParams}
        searchParams={searchParams}
      />
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
