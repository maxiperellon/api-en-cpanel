const express = require('express');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;


app.use(express.json());

app.get('/', (req, res) => {
    res.send("api")
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
