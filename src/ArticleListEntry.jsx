function ArticleListEntry({ title, topic, author, votes, comments, posted }) {
  return (
    <article className="article-list-item">
      <h3>{title}</h3>
      <h4>Topic: {topic}</h4>
      <h5>By {author}</h5>
      <p>
        Rating {votes} Comments {comments}
      </p>
      <p>Posted {posted.split("T")[0]}</p>
    </article>
  );
}
export default ArticleListEntry;
