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
    <form className="comment-form" onSubmit={handleSubmit} title="add comment">
      <label htmlFor="commentArea">
        <h3> Leave a comment:</h3>
        <textarea
          required
          value={commentItem}
          id="commentArea"
          onChange={(event) => setCommentItem(event.target.value)}
        />
      </label>

      <button type="submit">Send</button>
    </form>
  );
}

export default CommentForm;
