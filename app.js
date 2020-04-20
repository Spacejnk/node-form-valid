const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

app.use('/public', express.static(path.join(__dirname, 'static')));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, 'static','index.html'));
});

app.post('/', (req, res) => {
  //const obj = JSON.parse(JSON.stringify(req.body));
  console.log(req.body);
  // data base work here 
  res.send('successfully posted data');
});


app.listen('3005');