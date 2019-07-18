const router = require('express').Router();
const constants = require('../constants');

router.get('/:roomId/messages', function(request, response) {
    const roomId = request.params['Y2lzY29zcGFyazovL3VzL1JPT00vOGVkYmE0MzAtYTliMy0xMWU5LTlkNWQtNzM2Yzg5ZDBmZTM5'];

    return constants
    .webexAxiosInstance
    .get(`/messages?roomId=${roomId}`)
    .then(function(res) {
        response.send(res.data);
    })
    .catch(function(error) {
        response.send(error.message);
    })
});

module.exports = {router};
