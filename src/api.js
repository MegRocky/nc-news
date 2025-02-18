import axios from "axios";

const ncNewsApi = axios.create({
  baseURL: "https://nc-news-mr-s.onrender.com/api",
});

export const getArticles = () => {
  return ncNewsApi.get("/articles").then((res) => {
    return res.data.articles;
  });
};

export const getArticle = (articleId) => {
  return ncNewsApi.get(`/articles/${articleId}`).then((res) => {
    return res.data.article;
  });
};

export const getCommentsByArticle = (articleId) => {
  return ncNewsApi.get(`/articles/${articleId}/comments`).then((res) => {
    return res.data.comments;
  });
};

export const getUsersByUserName = (username) => {
  return ncNewsApi.get(`/users/${username}`).then((res) => {
    return res.data.user;
  });
};

export const patchVotesArticle = (articleId, votes) => {
  return ncNewsApi.patch(`/articles/${articleId}`, { inc_votes: votes });
};

export const postComment = (articleId, username, body) => {
  return ncNewsApi
    .post(`/articles/${articleId}/comments`, { username: username, body: body })
    .then((res) => {
      return res.data;
    });
};
