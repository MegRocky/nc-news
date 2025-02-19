import { getCommentsByArticle } from "./api";
import { useState, useEffect } from "react";
import CommentCard from "./CommentCard";
import CommentForm from "./CommentForm";

function CommentList({ article }) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [currentUser, setCurrentUser] = useState("jessjelly");
  useEffect(() => {
    getCommentsByArticle(article)
      .then((comments) => {
        return setComments(comments);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [newComment]);

  return (
    <>
      <h2>Comments</h2>
      <h3>Leave a comment:</h3>
      <CommentForm
        article={article}
        setNewComment={setNewComment}
        currentUser={currentUser}
      />
      {comments.map((comment) => {
        return (
          <CommentCard
            key={comment.comment_id}
            id={comment.comment_id}
            author={comment.author}
            votes={comment.votes}
            posted={comment.created_at}
            body={comment.body}
            currentUser={currentUser}
          />
        );
      })}
      {newComment ? (
        <CommentCard
          author={currentUser}
          votes="0"
          posted={new Date().toLocaleDateString("en-GB")}
          body={newComment}
          currentUser={currentUser}
        />
      ) : (
        ""
      )}
    </>
  );
}
export default CommentList;
