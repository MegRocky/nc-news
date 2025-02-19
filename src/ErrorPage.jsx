import { Link } from "react-router-dom";
import TopicList from "./TopicList";

function ErrorPage({ location }) {
  return (
    <>
      {" "}
      {location ? (
        <h2>Oops! this isn't a valid {location}</h2>
      ) : (
        <h2>Oops! this isn't a valid page</h2>
      )}
      {location === "topic" ? (
        <>
          <p>See some valid topics here </p>
          <TopicList />
        </>
      ) : (
        <Link to="/">See all of our articles here</Link>
      )}
    </>
  );
}

export default ErrorPage;
