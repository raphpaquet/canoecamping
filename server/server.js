const express = require('express')
const axios = require('axios');
const PORT = process.env.PORT || 5000;
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const app = express();

// app.get("/url", (req, res, next) => {
//   res.json(["Tony","Lisa","Michael","Ginger","Food"]);
//  });


 console.log('working')

//  const data = '';
 
//  const config = {
//    method: 'get',
//    url: 'http://api.rezgo.com/json?transcode=31957&key=3R-0C0K-1N6T-3P6R&i=company',
//    headers: { },
//    data : data
//  };
 
//  axios(config)
//  .then(function (response) {
//    console.log(JSON.stringify(response.data));
//  })
//  .catch(function (error) {
//    console.log(error);
//  });
 


app.listen(3333, () => {
  console.log('backend listening on port 3333')
});