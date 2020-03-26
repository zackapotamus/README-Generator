var axios = require("axios");

const api = {
  getUser(username) {

    axios
      .get(`https://api.github.com/users/${username}`)
      .then(function (res) {
        console.log(JSON.stringify(res.data, null, 2));
      })
      .catch(function (err) {
        console.log(err.data);
      });

  }
};

module.exports = api;