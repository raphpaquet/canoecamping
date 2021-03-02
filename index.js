const express = require('express')

const app = express();

app.get("/url", (req, res, next) => {
  res.json(["Tony","Lisa","Michael","Ginger","Food"]);
 });


app.listen(3333, () => {
  console.log('backend listening on port 3333')
});