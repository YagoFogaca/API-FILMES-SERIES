const express = require('express');

const cors = require('cors');

const routes = require('./src/routes/personagens.route');

const app = express();

const port = 3000;

app.use(express.json());

app.use(cors());

app.use('/personagens', routes);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

// Terminar antes do almoço
