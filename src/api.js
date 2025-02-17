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
