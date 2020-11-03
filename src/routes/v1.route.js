const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router({ mergeParams: true });

const v1Controller = require('../controllers/v1.controller');

router.route('/')
    .post(v1Controller.post);


module.exports = router;


