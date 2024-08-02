const express = require('express');

const userRoute = require('./user-route');
const commentRoute = require('./comment-route');
const rootRoute = require('./root-route');

const route = express.Router();

route.use('/comments', commentRoute);
route.use('/users', userRoute);
route.use('/', rootRoute);

module.exports = route;
