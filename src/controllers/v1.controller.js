const parseService = require('../services/parse.service');

const post = function(req, res){
    console.log('V1 End point Invoked.');
    res.send(parseService.postV1Body(req.body));
}

module.exports = {
    post
};