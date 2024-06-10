const express = require('express');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

app.get('/*', function (req, res) {
	  res.send('¡Estoy andando!, node version: ' + process.versions.node + ' , ruta pedida: ' + req.url + ', NODE_ENV: ' + process.env.NODE_ENV);
});
app.listen(port, function () {
	  console.log(`Aplicación de pruebas escuchando en el puerto ${port}!`);
});