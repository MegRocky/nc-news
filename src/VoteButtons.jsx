import { useState } from "react";

function VoteButtons({ voteNumber, setCurrentVoteNumber, setVoteChange }) {
  const [voted, setVoted] = useState(0);

  const handleUpVote = () => {
    setVoteChange(1);

    setVoted((currentVoted) => {
      return currentVoted + 1;
    });

    setCurrentVoteNumber((currentVoteNumber) => {
      return (currentVoteNumber += 1);
    });
  };
  const handleDownVote = () => {
    setVoteChange(-1);
    setVoted((currentVoted) => {
      return currentVoted - 1;
    });
    setCurrentVoteNumber((currentVoteNumber) => {
      return currentVoteNumber - 1;
    });
  };

  return (
    <>
      {" "}
      {voted === 1 ? (
        <p className="upvote">+</p>
      ) : (
        <button className="upvote" onClick={handleUpVote}>
          +
        </button>
      )}
      <p className="vote-num">{voteNumber}</p>
      {voted === -1 ? (
        <p className="downvote">-</p>
      ) : (
        <button className="downvote" onClick={handleDownVote}>
          -
        </button>
      )}
    </>
  );
}

export default VoteButtons;
