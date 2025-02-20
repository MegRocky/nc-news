import { useEffect, useState } from "react";
import { getArticles } from "./api";
import ArticleListEntry from "./ArticleListEntry";
import { useParams } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import ArticleFiterSort from "./ArticleFilterSort";
import ErrorPage from "./ErrorPage";
function ArticlesList() {
  const [articleList, setArticleList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const [topicErr, setTopicErr] = useState(false);
  const sortByQuery = searchParams.get("sorted_by");
  const orderQuery = searchParams.get("order");
  const topicName = useParams().topic;

  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    setTopicErr(false);
    getArticles(topicName, sortByQuery, orderQuery, page)
      .then(({ articles, total_count }) => {
        if (articles.length === 0) {
          setTopicErr(true);
        }

        setArticleList(articles);
        setTotalCount(total_count);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [topicName, sortByQuery, orderQuery, page]);

  if (isLoading) {
    return <p>Loading...</p>;
  } else if (topicErr) {
    return <ErrorPage location="topic" />;
  } else {
    return (
      <section>
        <h1>Latest {topicName} Articles</h1>
        <ArticleFiterSort
          setSearchParams={setSearchParams}
          searchParams={searchParams}
          setPage={setPage}
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
        <button
          onClick={() => setPage((currentPage) => currentPage - 1)}
          disabled={page === 1}
        >
          Previous Page
        </button>
        <button
          onClick={() => setPage((currentPage) => currentPage + 1)}
          disabled={10 * page >= totalCount}
        >
          Next Page
        </button>
      </section>
    );
  }
}
export default ArticlesList;
