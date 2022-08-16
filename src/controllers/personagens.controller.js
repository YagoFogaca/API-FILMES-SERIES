const service = require('../services/personagens.service');

const getAllController = (req, res) => {
  const dados = service.getAllService();
  res.send(dados);
};

const getByIdController = (req, res) => {};

module.exports = {
  getAllController,
  getByIdController,
};
