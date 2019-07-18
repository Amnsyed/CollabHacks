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

function sendMessage(text, roomId) {
  console.log(text)
  return constants.webexAxiosInstance
  .post(`/messages`, {
    text: text,
   // markdown: markdown,
    //toPersonId: toPersonId
    roomId: roomId
  })
  .then(function(res) {
    return res.data;
  })
  .catch(function(error) {
    console.log(error)
  })
}


module.exports = {getMessageByID, sendMessage};


