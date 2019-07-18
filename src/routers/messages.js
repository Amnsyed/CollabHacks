const router = require('express').Router();
var constants = require('../constants');


router.get('/:msgId', function(request, response) {
    const msgId = request.params['msgId'];

    console.log(msgId)
    return constants
    .webexAxiosInstance
    .get(`/messages/${msgId}`)
    .then(function(res) {
        response.send(res.data);
    })
    .catch(function(error) {
      console.log(error)
        response.send(error.message);
    })
});




module.exports = {router};