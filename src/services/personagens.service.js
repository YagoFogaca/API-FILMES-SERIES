const Personagem = require('../models/personagemSchema');

const getAllService = async () => {
  const allPersonagens = await Personagem.find();

  return allPersonagens;
};

const getByIdService = async (id) => {
  const chosenPersonagem = await Personagem.findOne({ id: id });

  return chosenPersonagem;
};

const getByTypeService = async (tipo) => {
  let personagens = await Personagem.find({ tipo: tipo });

  if (personagens.length === 0) {
    personagens = null;
  }

  return personagens;
};

const postService = async (personagem) => {
  const novoPersonagem = await Personagem.create(personagem);

  return novoPersonagem;
};

const putService = async (id, body) => {
  const personagem = await Personagem.findOneAndUpdate({ id: id }, body, {
    new: true,
  });

  return personagem;
};

const deleteService = async (id) => {
  const personagemDeletado = Personagem.findOneAndDelete({ id: id });

  return personagemDeletado;
};

module.exports = {
  getAllService,
  getByIdService,
  getByTypeService,
  postService,
  putService,
  deleteService,
};
