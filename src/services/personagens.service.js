const Personagem = require('../models/personagemSchema');

const getAllService = async () => {
  let allPersonagens = await Personagem.find({}, { _id: 0, __v: 0 });

  if (allPersonagens.length === 0) {
    allPersonagens = null;
  }

  return allPersonagens;
};

const getByIdService = async (id) => {
  const chosenPersonagem = await Personagem.findOne(
    { id: id },
    { _id: 0, __v: 0 },
  );

  return chosenPersonagem;
};

const getByTypeService = async (tipo) => {
  let chosenPersonagens = await Personagem.find(
    { tipo: tipo },
    { _id: 0, __v: 0 },
  );

  if (chosenPersonagens.length === 0) {
    chosenPersonagens = null;
  }

  return chosenPersonagens;
};

const postService = async (personagem) => {
  const newPersonagem = await Personagem.create(personagem);

  return newPersonagem;
};

const putService = async (id, body) => {
  const updatePersonagem = await Personagem.findOneAndUpdate({ id: id }, body, {
    new: true,
  });

  return updatePersonagem;
};

const deleteService = async (id) => {
  const deletePersonagem = Personagem.findOneAndDelete({ id: id });

  return deletePersonagem;
};

module.exports = {
  getAllService,
  getByIdService,
  getByTypeService,
  postService,
  putService,
  deleteService,
};
