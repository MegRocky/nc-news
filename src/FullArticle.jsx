import { useParams } from "react-router-dom";
import { getArticle, patchVotesArticle } from "./api";
import { useState, useEffect } from "react";
import CommentList from "./CommentList";
import VoteButtons from "./VoteButtons";
import ErrorPage from "./ErrorPage";

function FullArticle() {
  const articleId = useParams().article_id;
  const [currentArticle, setCurrentArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [voteNumber, setCurrentVoteNumber] = useState(0);
  const [voteChange, setVoteChange] = useState(0);
  const [voteErr, setVoteErr] = useState(false);
  const [articleErr, setArticleErr] = useState(false);

  useEffect(() => {
    getArticle(articleId)
      .then((article) => {
        setCurrentVoteNumber(article.votes);
        return setCurrentArticle(article);
      })
      .catch((err) => {
        setArticleErr(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    patchVotesArticle(articleId, voteChange).catch((err) => {
      setVoteErr(true);
    });
  }, [voteNumber]);

  return isLoading ? (
    <p>Loading...</p>
  ) : articleErr ? (
    <ErrorPage location="article" />
  ) : (
    <>
      <h2>{currentArticle.title}</h2>
      <h3>by {currentArticle.author}</h3>
      <h4>Published on {currentArticle.created_at.split("T")[0]}</h4>
      <img className="article-img" src={currentArticle.article_img_url} />

      <article>{currentArticle.body} </article>
      <h4>Rating</h4>
      <section className="horizontal-vote-buttons">
        {voteErr ? (
          <p>
            there has been an issue with your vote, please check your network{" "}
          </p>
        ) : (
          <VoteButtons
            voteNumber={voteNumber}
            setCurrentVoteNumber={setCurrentVoteNumber}
            setVoteChange={setVoteChange}
            voteChange={voteChange}
          />
        )}
      </section>
      <CommentList article={articleId} />
    </>
  );
}
export default FullArticle;
