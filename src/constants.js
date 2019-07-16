/*const dotenv = require('dotenv');
const axios = require('axios');


function setupEnvironment() {
    let path = `${__dirname}/../.env`;

    if(process.env.NODE_ENV === 'development')
      path = `${__dirname}/../.env.development`;

      dotenv.config({path: path});
  }

  
setupEnvironment();

module.exports = {
    PORT : process.env.PORT,
    webexAxiosInstance : axios.create({
        baseURL: 'https://api.ciscospark.com/v1',
        timeout: 1000,
        headers: {'authorization':  process.env.BOT_TOKEN}
    }),
      jokeAxiosInstance : axios.create({
        baseURL: 'https://icanhazdadjoke.com',
        timeout: 1000,
        headers: {'Accept': 'text/plain'}
    }),
    botName: 'Dad'
};*/
const dotenv = require('dotenv');
const axios = require('axios');

const My_TOKEN = 'Y2lzY29zcGFyazovL3VzL0FQUExJQ0FUSU9OL2EyNmU2YzdiLTU4OGYtNDYzNS1iMGUwLWU5NzdiNTFkMDJmZA'
const BOT_TOKEN = 'NjMyM2IzMGItMmFhOC00MmZhLWIzYjgtMDMzYzgwZGFjYmM2MzFkOGRlMmEtOTQ1_PF84_consumer'
const BOT = false;

module.exports ={
    PORT : 3000,
    webexAxiosInstance : axios.create({
      baseURL: 'https://api.ciscospark.com/v1',
      timeout: 1000,
      headers: {'authorization':  'Bearer ${BOT ? BOT_TOKEN : MY_TOKEN}'}
})
};