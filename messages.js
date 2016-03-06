var mysql = require("mysql");


//Aca se remplaza los datos del host de BD : host, usuario, contrase;a, nombre de la base de datos
var connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "A08112012s",
  database: "decrypter"
});



connection.connect(function(err){
  if(err){
    console.log('Error connecting to Db');
    return;
  }
  console.log('Connection established');
});




var messageModel = {};
 
messageModel.getMessages = function(callback)
{
  if (connection) 
  {
    connection.query('SELECT * FROM mensajes ORDER BY id', function(error, rows) {
      if(error)
      {
        console.log(error);
      }
      else
      {
        callback(null, rows);
      }
    });
  }
}
 
 
messageModel.insertMessage = function(userData,callback)
{
  if (connection) 
  {
    connection.query('INSERT INTO mensajes SET ?', userData, function(error, result) 
    {
      if(error)
      {
        throw error;
      }
      else
      {
        callback(null,{"insertId" : result.insertId});
      }
    });
  }
}

messageModel.deleteMessage = function(id, callback)
{
  if(connection)
  {
    var sqlExists = 'SELECT * FROM mensajes WHERE id = ' + connection.escape(id);
    connection.query(sqlExists, function(err, row) 
    {
      //si existe la id del usuario a eliminar
      if(row)
      {
        var sql = 'DELETE FROM mensajes WHERE id = ' + connection.escape(id);
        connection.query(sql, function(error, result) 
        {
          if(error)
          {
            throw error;
          }
          else
          {
            callback(null,{"msg":"deleted"});
          }
        });
      }
      else
      {
        callback(null,{"msg":"notExist"});
      }
    });
  }
}
 
module.exports = messageModel;