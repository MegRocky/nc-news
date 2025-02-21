import { getCommentsByArticle } from "./api";
import { useState, useEffect } from "react";
import CommentCard from "./CommentCard";
import CommentForm from "./CommentForm";
import { useContext } from "react";
import { CurrentUserContext } from "./LoggedInUser";
import LoginForm from "./LoginForm";
import PageButtons from "./PageButtons";

function CommentList({ article, users, totalCount }) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [page, setPage] = useState(1);
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  useEffect(() => {
    getCommentsByArticle(article, page)
      .then((comments) => {
        return setComments(comments);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [newComment, page]);
  console.log(page);
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
      <PageButtons
        totalCount={totalCount}
        setPage={setPage}
        page={page}
        limit={5}
      />
    </section>
  );
}
export default CommentList;
