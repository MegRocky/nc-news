import { getUsersByUserName } from "./api";
import { useState, useEffect } from "react";
function CommentCard({ author, votes, posted, body }) {
  const [commentUser, setCommentUser] = useState({});

  useEffect(() => {
    getUsersByUserName(author).then((user) => {
      setCommentUser(user);
    });
  }, []);

  return (
    <>
      <section className="comment-card">
        <img className="avatar-img" src={commentUser.avatar_url} />
        <p className="comment-username">{author}</p>
        <p className="comment-body">{body}</p>
        <p className="comment-votes">{votes}</p>
        <p className="comment-date">{posted.split("T")[0]}</p>
      </section>
    </>
  );
}
export default CommentCard;
