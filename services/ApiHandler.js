// service/index.js
const axios = require('axios');

class wantedApi {
  constructor() {
    this.api = axios.create({
      baseURL: 'https://api.fbi.gov'
    });
  }

  getAllWanted = () => this.api.get('/wanted/v1/list');

}

module.exports = wantedApi;
