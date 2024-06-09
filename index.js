const express = require('express');
// const mysql = require('mysql2');
require('dotenv').config();

const app = express();
const port = 3000;

// Configuración de la base de datos
// const db = mysql.createConnection({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME
// });

// Conectar a la base de datos
// db.connect((err) => {
//   if (err) {
//     console.error('Error conectando a la base de datos:', err.stack);
//     return;
//   }
//   console.log('Conectado a la base de datos como id ' + db.threadId);
// });

// Middleware para parsear JSON
app.use(express.json());

app.get('/', (req, res) => {
    res.send("api")
});
// Ejemplo de endpoint GET
// app.get('/prueba', (req, res) => {
//   db.query('SELECT * FROM esfuerzo_clasificaciones', (error, results, fields) => {
//     if (error) {
//       return res.status(500).json({ error: error.message });
//     }
//     res.json(results);
//   });
// });

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
