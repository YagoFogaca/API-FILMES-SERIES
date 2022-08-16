const dados = require('../../mocks/date.mock.json');

const getAllService = () => {
  return dados;
};

const getByIdService = () => {
  return dados;
};

module.exports = {
  getAllService,
  getByIdService,
};
