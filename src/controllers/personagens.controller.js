const service = require('../services/personagens.service');

const getAllController = async (req, res) => {
  const allPersonagens = await service.getAllService();

  if (!allPersonagens) {
    res.status(404).send({ message: 'Personagens não encontrados' });

    return;
  }

  res.status(200).send(allPersonagens);
};

const getByIdController = async (req, res) => {
  const paramsId = req.params.id;

  const chosenPersonagem = await service.getByIdService(paramsId);

  if (!chosenPersonagem) {
    res.status(404).send({ message: 'Personagem não encontrado' });

    return;
  }

  res.status(200).send(chosenPersonagem);
};

const getByTypeController = async (req, res) => {
  const paramsTipo = req.params.type;

  const chosenPersonagem = await service.getByTypeService(paramsTipo);

  if (!chosenPersonagem) {
    res.status(400).send({ message: 'Personagem não encontrado' });

    return;
  }

  res.status(200).send(chosenPersonagem);
};

const postController = async (req, res) => {
  let allPersonagens = await service.getAllService();

  let personagem = req.body;

  let idsPersonagens = [];

  if (!allPersonagens) {
    personagem.id = 1;
  } else {
    allPersonagens.forEach((personagem) => {
      idsPersonagens.push(personagem.id);
    });

    const id = 1 + Math.max(...idsPersonagens);

    personagem.id = id;
  }

  const newPersonagem = await service.postService(personagem);

  res.status(200).send(newPersonagem);
};

const putController = async (req, res) => {
  const paramsId = req.params.id;

  const personagem = req.body;

  personagem.id = paramsId;

  const chosenPersonagem = await service.getByIdService(paramsId);

  if (!chosenPersonagem) {
    return res.status(400).send({ menssage: 'Personagem não encontrado' });
  }

  const changedPersonagem = await service.putService(paramsId, personagem);

  res.status(200).send(changedPersonagem);
};

const deleteController = async (req, res) => {
  const paramsId = req.params.id;

  const deletePersonagem = await service.deleteService(paramsId);

  if (!deletePersonagem) {
    res.status(400).send({ message: 'Personagem não encontrado' });

    return;
  }

  res.status(200).send({ message: 'Personagem deletado com sucesso' });
};

module.exports = {
  getAllController,
  getByIdController,
  getByTypeController,
  postController,
  putController,
  deleteController,
};
