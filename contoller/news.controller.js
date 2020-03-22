const axios = require('axios');

exports.test = async function (req, res) {
await axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json?q=ayurveda&api-key=5AlWHdOV6i3fZCKJ5QoxVB6LYZ3Pm05S", )
  .then(response => {
      // If request is good...
      res.send(response.data)
      console.log(response.data);
   })
  .catch((error) => {
      console.log(error);
   });
};