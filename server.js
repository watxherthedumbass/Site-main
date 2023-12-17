var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded( {extended: false})
app.use(express.static('site'));

app.get('/', function (req, res) {
   res.sendFile('index.html');
})

app.post('/', urlencodedParser, function (req, res) {
   response = {
      name:req.body.name
   };
   console.log(response);
   res.send(`hello ${req.body.name}`);
})

var server = app.listen(8080, function () {
   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)
})
