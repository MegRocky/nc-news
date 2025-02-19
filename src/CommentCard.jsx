import { getUsersByUserName } from "./api";
import { useState, useEffect } from "react";
import DeleteButton from "./DeleteButton";
import VoteButtons from "./VoteButtons";

import { patchVotesComment } from "./api";

function CommentCard({ author, votes, posted, body, currentUser, id }) {
  const [commentAuthor, setCommentAuthor] = useState({});
  const [toBeDeleted, setToBeDeleted] = useState(false);
  const [deleteErr, setDeleteErr] = useState(false);
  const [voteNumber, setCurrentVoteNumber] = useState(0);
  const [voteChange, setVoteChange] = useState(0);
  const [voteErr, setVoteErr] = useState(false);

  useEffect(() => {
    setCurrentVoteNumber(votes);
    getUsersByUserName(author).then((user) => {
      setCommentAuthor(user);
    });
  }, []);

  useEffect(() => {
    patchVotesComment(id, voteChange).catch((err) => {
      setVoteErr(true);
    });
  }, [voteNumber]);

  const userComment = currentUser === author;

  return (
    <>
      <section className={`comment-card${toBeDeleted === true ? " hide" : ""}`}>
        <div className="user-name-img">
          {" "}
          <img className="avatar-img" src={commentAuthor.avatar_url} />
          <p className="comment-username">{author}</p>
        </div>
        <p className="comment-body">{body}</p>
        <div className="vertical-vote-buttons">
          {voteErr ? (
            <p>
              there has been an issue with your vote, please check your network{" "}
            </p>
          ) : (
            <VoteButtons
              setCurrentVoteNumber={setCurrentVoteNumber}
              setVoteChange={setVoteChange}
              voteNumber={voteNumber}
            />
          )}
        </div>
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
