const express = require('express');
const router = express.Router();

const new_controller = require('./news.controller');



router.get('/get', new_controller.test);

module.exports = router