const getUsersHandler = (req, res) => {
  res.send("Get users list...");
};
const getSingleUserHandler = (req, res) => {
  const userId = req.params.userId;
  res.send(`Get user by id: ${userId}`);
};
const postUserHandler = (req, res) => {
  res.send("Post user...");
};
const deleteUserHandler = (req, res) => {
  const userId = req.params.userId;
  res.send(`Delete user id: ${userId}`);
};

module.exports = {
  getUsersHandler,
  getSingleUserHandler,
  postUserHandler,
  deleteUserHandler,
};
