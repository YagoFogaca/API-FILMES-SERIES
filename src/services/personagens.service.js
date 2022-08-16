const Personagem = require('../models/personagemSchema');

const getAllService = async () => {
  const personagens = await Personagem.find();

  return personagens;
};

const getByIdService = async (id) => {
  const personagem = await Personagem.findOne({ id: id });

  return personagem;
};

const getByTipoService = async (tipo) => {
  let personagensArray = [];

  const personagens = await Personagem.find();

  personagens.forEach((personagem) => {
    if (personagem.tipo === tipo) {
      personagensArray.push(personagem);
    }
  });

  if (personagensArray.length === 0) {
    personagensArray = null;
  }

  return personagensArray;
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
  getByTipoService,
  postService,
  putService,
  deleteService,
};
