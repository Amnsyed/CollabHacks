const constants = require('../constants');

function getMessageByID(messageId) {
  return constants.webexAxiosInstance
  .get(`/messages/${messageId}`)
  .then(function(res) {
      return res.data;
  })
  .catch(function(error) {
    console.log(error)
  })
};

function sendMessage(text, markdown, roomId, toPersonId) {
  console.log(text)
  return constants.webexAxiosInstance
  .post(`/messages`, {
    text: text,
    markdown: markdown,
    toPersonId: toPersonId
  })
  .then(function(res) {
    return res.data;
  })
}


module.exports = {getMessageByID, sendMessage};


