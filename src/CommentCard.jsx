import { getUsersByUserName } from "./api";
import { useState, useEffect } from "react";
import DeleteButton from "./DeleteButton";
function CommentCard({ author, votes, posted, body, currentUser, id }) {
  const [commentAuthor, setCommentAuthor] = useState({});
  const [toBeDeleted, setToBeDeleted] = useState(false);
  const [deleteErr, setDeleteErr] = useState(false);
  useEffect(() => {
    getUsersByUserName(author).then((user) => {
      setCommentAuthor(user);
    });
  }, []);
  const userComment = currentUser === author;

  return (
    <>
      <section className={`comment-card${toBeDeleted === true ? " hide" : ""}`}>
        <img className="avatar-img" src={commentAuthor.avatar_url} />
        <p className="comment-username">{author}</p>
        <p className="comment-body">{body}</p>
        <p className="comment-votes">{votes}</p>
        <p className="comment-date">{posted.split("T")[0]}</p>
        {deleteErr ? (
          <p>there has been an issue deletion, please check your network </p>
        ) : userComment ? (
          <DeleteButton
            commentId={id}
            setToBeDeleted={setToBeDeleted}
            setDeleteErr={setDeleteErr}
          />
        ) : (
          ""
        )}
      </section>
    </>
  );
}
export default CommentCard;
