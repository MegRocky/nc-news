import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getTopics } from "./api";
import { useNavigate } from "react-router-dom";

function TopicList() {
  const [currentTopics, setCurrentTopics] = useState([]);

  useEffect(() => {
    getTopics().then((topics) => setCurrentTopics(topics));
  }, []);

  return (
    <>
      {currentTopics.map((topic) => {
        return (
          <Link to={`/topics/${topic.slug} `} key={topic.slug}>
            <li className="topic-list-item"> {topic.slug} </li>{" "}
          </Link>
        );
      })}
    </>
  );
}

export default TopicList;
