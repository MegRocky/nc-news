import { getCommentsByArticle } from "./api";
import { useState, useEffect } from "react";
import CommentCard from "./CommentCard";
import CommentForm from "./CommentForm";
import { useContext } from "react";
import { CurrentUserContext } from "./LoggedInUser";
import LoginForm from "./LoginForm";

function CommentList({ article, users }) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
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
    <section>
      <h2 className="comments-title">Comments</h2>
      {currentUser ? (
        <CommentForm article={article} setNewComment={setNewComment} />
      ) : (
        <>
          <p>Please Login to leave a comment</p>
          <LoginForm users={users} />
        </>
      )}

      {comments.map((comment) => {
        return (
          <CommentCard
            key={comment.comment_id}
            id={comment.comment_id}
            author={comment.author}
            votes={comment.votes}
            posted={comment.created_at}
            body={comment.body}
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
    </section>
  );
}
export default CommentList;
