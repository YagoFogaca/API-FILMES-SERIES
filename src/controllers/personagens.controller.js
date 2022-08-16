const service = require('../services/personagens.service');

const getAllController = (req, res) => {
  const dados = service.getAllService();
  res.send(dados);
};

const getByIdController = (req, res) => {
  res.send('<h1>kvgjkfdkv</h1>');
};

module.exports = {
  getAllController,
  getByIdController,
};
