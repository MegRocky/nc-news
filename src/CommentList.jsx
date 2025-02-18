import { getCommentsByArticle } from "./api";
import { useState, useEffect } from "react";
import CommentCard from "./CommentCard";

function CommentList({ article }) {
  const [comments, setComments] = useState([]);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getCommentsByArticle(article)
      .then((comments) => {
        return setComments(comments);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [comments]);

  useEffect(() => {
    getCommentsByArticle(article)
      .then((comments) => {
        return setComments(comments);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [comments]);

  return (
    <>
      <h2>Comments</h2>
      {comments.map((comment) => {
        return (
          <CommentCard
            key={comment.comment_id}
            author={comment.author}
            votes={comment.votes}
            posted={comment.created_at}
            body={comment.body}
          />
        );
      })}
    </>
  );
}
export default CommentList;
