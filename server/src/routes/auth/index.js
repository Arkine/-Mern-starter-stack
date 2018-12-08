const express = require('express');

const loginMiddleware = require('../../middleware/auth/login');

const Router = express.Router();

Router.post('/login', loginMiddleware);

module.exports = Router;