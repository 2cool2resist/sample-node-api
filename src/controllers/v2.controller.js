const parseService = require('../services/parse.service');

const post = function(req, res){
    console.log('V2 End point Invoked.');
    res.send(parseService.postV2Body(req.body));
}


module.exports = {
    post
};