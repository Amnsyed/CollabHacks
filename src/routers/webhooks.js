const router = require('express').Router();
const messages = require('./../helpers/messages');
const constants = require('../constants');
const bot = require('../bot');


router.post('/', function(request, response) {  
  var messageId = request.body.data.id
  var personId = request.body.data.personId
  var roomId = request.body.data.roomId
  
  //console.log(messageId)
  
  messages.getMessageByID(messageId)
  .then(function(message){
    console.log(message.text);
    bot.processMsg(message.text, roomId)
  })
  
  
  
  //response.send('got the message');
  
});

module.exports = {router};








// const router = require('express').Router();
// const messages = require('./../helpers/messages');
// const people = require('./../helpers/people');
// const constants = require('../constants');
// const bot = require('../bot');


// router.post('/', listen);


// function listen(request, response) {  
//   // messages.sendMessage('hi', '', '', 'Y2lzY29zcGFyazovL3VzL1BFT1BMRS9iNTQzNDZmNi03ZmExLTQ3ZTktYTRmMi01MTBkY2Y2ZjNhOTM')

//    messages
//   .getMessageByID(request.body.data.id)
//   .then(function(res) {
//     const {text, roomId, mentionedPeople} = res;
//      console.log(body);
//  messages.sendMessage('hi', '', '', 'Y2lzY29zcGFyazovL3VzL1BFT1BMRS9iNTQzNDZmNi03ZmExLTQ3ZTktYTRmMi01MTBkY2Y2ZjNhOTM')
//    })
// //     peoxple
// //     .getPersonByID(request.body.data.personId)
// //     .then(function(res) {
// //       const displayName = res.displayName;

// //       if(bot.isMentioned(mentionedPeople)) {
// //         bot.processMessage(displayName, text, roomId);
// //       }
      
// //     })
// //     .catch(function(error) {
// //       response.send(error.message)
// //     })

// //     })
// //     .catch(function(error) {
// //       response.send(error.message);
// //     })
  
// };

// module.exports = {router, listen};
