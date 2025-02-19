import { postComment } from "./api";
import { useState } from "react";

function CommentForm({ article, setNewComment, currentUser }) {
  const [commentItem, setCommentItem] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    postComment(article, currentUser, commentItem);
    setNewComment(commentItem);
    setCommentItem("");
  };

  return (
    <form className="comment-form" onSubmit={handleSubmit}>
      <label htmlFor="commentArea">
        <textarea
          required
          value={commentItem}
          name="commentArea"
          onChange={(event) => setCommentItem(event.target.value)}
        />
      </label>
      <button type="submit">Send</button>
    </form>
  );
}

export default CommentForm;
