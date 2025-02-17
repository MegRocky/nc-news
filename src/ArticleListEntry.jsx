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
        <img src={img} />
        <Link to={`/articles/${id}`}>
          <h3>{title}</h3>
        </Link>

        <h4>Topic: {topic}</h4>
        <h5>By {author}</h5>
        <p>
          Rating {votes} Comments {comments}
        </p>
        <p>Posted {posted.split("T")[0]}</p>
      </article>
    </>
  );
}
export default ArticleListEntry;
