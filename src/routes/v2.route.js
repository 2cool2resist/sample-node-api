const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router({ mergeParams: true });

const v2Controller = require('../controllers/v2.controller');

router.route('/')
    .post(v2Controller.post);


module.exports = router;


