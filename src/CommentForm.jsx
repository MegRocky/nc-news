import { postComment } from "./api";
import { useState } from "react";
import { useContext } from "react";
import { CurrentUserContext } from "./LoggedInUser";

function CommentForm({ article, setNewComment }) {
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
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
      </label>
      <textarea
        required
        value={commentItem}
        id="commentArea"
        onChange={(event) => setCommentItem(event.target.value)}
      />

      <button type="submit" className="comment-submit">
        Send
      </button>
    </form>
  );
}

export default CommentForm;
