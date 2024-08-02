const getCommentsHandler = (req, res) => {
  res.send("Comments...");
};
const getSingleCommentHandler = (req, res) => {
  console.log("GET comment id: ", req.params);
  res.send(`Get Comment id: ${req.params.commentId}`);
};
const postCommentsHandler = (req, res) => {
  res.send("Post Comments...");
};
const deleteSingleCommentHandler = (req, res) => {
  console.log("DELETE comment");
  res.send(`Deleted ${req.params.commentId}`);
};

module.exports = {
  getCommentsHandler,
  getSingleCommentHandler,
  postCommentsHandler,
  deleteSingleCommentHandler,
};
