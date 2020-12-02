const express = require('express');
const app = express();
const sqlite3 = require('sqlite3').verbose();

var db = new sqlite3.Database(':memory:');

//app.use(express.static(__dirname + '/public/'));

/*app.get('/insert', (req,res) =>{
  INSERT INTO Endpoints (endpoint)
  VALUES ('ABC'), ('DEF'), ('GHI');
})

app.get('/insert', (req,res) =>{
SELECT endpoint FROM Endpoints
})*/

app.get('/', (req, res) => {
  res.send('Prueba de conexion a Base de Datos')
})

app.listen('3000', function(){
  console.log('Servidor Web escuchando el puerto 3000');
});


db.serialize(function() {

  db.run('CREATE TABLE IF NOT EXISTS Endpoints(endpoint char(60) not null, metodo char(6) not null, seguridad char(1) not null, tabla char(30) not null);');
  var stmt = db.prepare('INSERT INTO Endpoints(endpoint) VALUES ("ABC")');

  stmt.finalize();

  db.each('SELECT endpoint FROM Endpoints', function(err, row) {
    console.log(endpoint);
  });
});


db.close();


// Abre la base de datos
/*let db = new sqlite3.Database('./test.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Conectado a la base de datos.');
  });
  
  // Cierra la conexion a la base de datos
  db.close((err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Se cierra la conexion a la base de datos.');
  });*/
