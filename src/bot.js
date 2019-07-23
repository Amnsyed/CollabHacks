var messages = require('./helpers/messages')

function processMsg(text, roomId){
  const newMessage = text.replace('Ryoko', '').trim();
  const newText= newMessage.toLowerCase(); 
  //console.log (newText);
  switch (newText){
    case "where am i?": 
    messages.sendMessage("San Francisco", roomId);
    messages.sendMessage("https://ryokotravelapp.000webhostapp.com/", roomId);
      break;
    case "hi": 
    //send message welcome
       messages.sendMessage("Hello, What can I do for you today?", roomId);
      break;
    case "Nearby Cities": 
    //send message welcome
         messages.sendMessage("Oakland, Foster City, San Jose, Hayward, Sausalito, and Fremont", roomId);
      break;
    case "thanks": 
    //send message love you back
         messages.sendMessage("Happy to Help", roomId);
      break;
    case "help": 
    //send message hi
         messages.sendMessage("", roomId, msg);
      break;
    default:
      //messages.sendMessage("this aint it cheif, type in help for commands", roomId);
    break;
    //send "this aint it cheif, type in "help" for commands"
  }
}

var msg ="### Help \n ### Commands: \n * **Where Am I?** , bot will reply back the closest big city and return a link with city information\n  * **Hi**, bot will reply \`Hi`\ back \n* **thanks**, bot will replay \`you are welcome`\ \n  * **joke**, bot will send a joke";

module.exports = {processMsg};








// var constants = require('./constants');
// var messages = require('./helpers/messages');

// function processMessage(displayName, textMsg, roomId) {
//   const text = filterMessage(textMsg);
//   const firstName = displayName.split(' ')[0];
//   const lastName = displayName.split(' ')[1];

//   if(userGreeted(text))
//     messages.sendMessage(`Hiya ${firstName}!`, '', roomId);
//   else if(userAskedForJoke(text))
//       sendJoke(roomId);
//   else if(userThanked(text))
//       messages.sendMessage(`No Problem ${lastName}!`, '', roomId)
//   else if(userAskedForHelp(text))
//       messages.sendMessage(``,
//                            'Listen Kiddo, tag me with the word `joke`. Also don\'t forget to thank daddy :)',
//                            roomId)
// }

// function isMentioned(people){
//   return people.includes(process.env.BOT_ID);
// }

// function filterMessage(text) {
//   let newMessage = text.replace(`${constants.botName}`, '');
  
//   return newMessage.trim();
// }

// function userGreeted(message) {
//   let msg = message.toLowerCase();

//   return msg.includes('hi') || msg.includes('hello') || msg.includes('howdy');
// }

// function userThanked(message) {
//   let msg = message.toLowerCase();

//   return msg.includes('thank');
// }

// function userAskedForJoke(message){
//   let msg = message.toLowerCase();

//   return msg.includes('joke');
// }

// function userAskedForHelp(message) {
//   let msg = message.toLowerCase();

//   return msg.includes('help');
// }

// function sendJoke(roomId) {
//   constants
//   .jokeAxiosInstance
//   .get('/')
//   .then(function(res) {
//     messages.sendMessage(res.data, '', roomId);
//   })
//   .catch(function(error) {
//     console.log(error)
//   })
// }

// module.exports = {processMessage, isMentioned}

