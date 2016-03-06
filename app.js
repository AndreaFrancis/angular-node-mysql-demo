var express = require('express');
var app = express();
var path = require('path');
var MessageModel = require('./messages');
var bodyParser = require('body-parser');


var port = process.env.PORT || 3030;

app.use(express.static(path.join(__dirname, './public')));

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));

  app.get("/messages", function(req,res){
    MessageModel.getMessages(function(error, data)
    {
      res.json(200,data);
    });
  });

  app.post("/messages", function(req,res)
  {
    var messageData = {
      id : null,
      msg_cifrado : req.body.msg_cifrado
    };

    MessageModel.insertMessage(messageData,function(error, data)
    {
      if(data && data.insertId)
      {
        res.json(200,data);
      }
      else
      {
        res.json(500,{"msg":"Error"});
      }
    });
  });


  app.post("/delete", function(req,res)
  {
    MessageModel.deleteMessage(req.body.id,function(error, data)
    {
      if(data && data.msg === "deleted" || data.msg === "notExist")
      {
        res.json(200,data);
      }
      else
      {
        res.json(500,{"msg":"Error"});
      }
    });
  });


app.listen( port, function(){
  console.log('conectado en ', port);
});

