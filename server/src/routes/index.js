const express = require('express');

const apiRoutes = require('./api');
const authRoutes = require('./auth');

const Router = express.Router();

Router.use('/api/v1', apiRoutes);
Router.use('/auth', authRoutes);

module.exports = Router;