const express = require("express");

const {
  getCommentsHandler,
  getSingleCommentHandler,
  postCommentsHandler,
  deleteSingleCommentHandler,
} = require("../controllers/comments-controller");

const route = express.Router();

route.get("/", getCommentsHandler);
route.post("/", postCommentsHandler);
route.get("/:commentId", getSingleCommentHandler);
route.delete("/:commentId", deleteSingleCommentHandler)

module.exports = route;
