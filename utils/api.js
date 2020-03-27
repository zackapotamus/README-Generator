var axios = require("axios");
var generateMarkdown = require("./generateMarkdown.js");
var fs = require('fs');

const api = {
  getUser(answers) {
    axios
      .get(`https://api.github.com/users/${answers.username}`)
      .then(function (res) {
        // console.log(JSON.stringify(res.data, null, 2));
        answers.image = res.data.avatar_url;
        answers.url = res.data.url;
        answers.email = res.data.email;
        // console.log(answers);
        const markdown = generateMarkdown(answers);
        writeToFile("README.md", markdown);
      })
      .catch(function (err) {
        console.log(err.data);
      });
  }
};

function writeToFile(fileName, data) {
  fs.writeFile(`./${fileName}`, data, function(err) {
    if (err) {
      console.log(err);
    } else {
      console.log("Success!");
    }
  });

}

module.exports = api;