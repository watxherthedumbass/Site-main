var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded( {extended: false})
app.use(express.static('site'));
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'jar83957@gmail.com',
    pass: 'kla3yjarr3n18'
  }
});


app.get('/', function (req, res) {
   res.sendFile('index.html');
})

app.post('/', urlencodedParser, function (req, res) {
   mailOptions = {
   from: 'jar83957@gmail.com',
   to: 'jarrenzuniga2@gmail.com',
   subject: `review from ${req.body.name}`,
   text: `review: ${req.body.txt}`
};
   response = {
      name:req.body.name,
      txt:req.body.txt
   };
   console.log(response);
   transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
   res.send(`review sent sucessfully from ${req.body.name}`);
   
})

var server = app.listen(8080, function () {
   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)
})
