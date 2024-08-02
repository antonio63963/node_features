const express = require('express');
const {
  getUsersHandler,
  getSingleUserHandler,
  postUserHandler,
  deleteUserHandler,
} = require('../controllers/users-controller');

const route = express.Router();

route.get('/', getUsersHandler);
route.post('/', postUserHandler);
route.get('/:userId', getSingleUserHandler);
route.delete('/:userId', deleteUserHandler);

module.exports = route;
