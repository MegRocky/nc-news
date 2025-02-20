import { Link } from "react-router-dom";

function ArticleListEntry({
  title,
  topic,
  author,
  votes,
  comments,
  posted,
  id,
  img,
}) {
  return (
    <>
      <article className="article-list-item">
        <img src={img} alt={`image for article ${title}`} />
        <span>
          {" "}
          <Link to={`/articles/${id}`}>
            <h3>{title}</h3>
          </Link>
          <h4>
            Topic: <Link to={`/topics/${topic}`}>{topic}</Link>
          </h4>
          <h5>By {author}</h5>
        </span>
        <p className="ratings-comments">
          Rating {votes} Comments {comments}
        </p>
        <p className="date-posted">Posted {posted.split("T")[0]}</p>
      </article>
    </>
  );
}
export default ArticleListEntry;
