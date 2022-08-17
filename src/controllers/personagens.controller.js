const service = require('../services/personagens.service');

const entitie = require('../entities/personagem.entitie');

const getAllController = async (req, res) => {
  const allPersonagens = await service.getAllService();

  if (!allPersonagens) {
    res.status(500).send({ message: 'Personagens não encontrados' });

    return;
  }

  res.send(allPersonagens);
};

const getByIdController = async (req, res) => {
  const paramsId = req.params.id;

  const chosenPersonagem = await service.getByIdService(paramsId);

  if (!chosenPersonagem) {
    res.status(400).send({ message: 'Personagem não encontrado' });

    return;
  }

  res.send(chosenPersonagem);
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
  try {
    const allPersonagens = await service.getAllService();

    let personagem = req.body;

    let idsPersonagens = [];

    allPersonagens.forEach((personagem) => {
      idsPersonagens.push(personagem.id);
    });

    const id = 1 + Math.max(...idsPersonagens);

    personagem.id = id;

    const Personagem = new entitie(personagem);

    Personagem.validate();

    const newPersonagem = await service.postService(
      Personagem.printPersonagem(),
    );

    res.send(newPersonagem);
  } catch (err) {
    console.log(err.message);
    res.status(400).send({ message: err.message });
  }
};

const putController = async (req, res) => {
  try {
    const paramsId = req.params.id;

    const personagem = req.body;

    personagem.id = paramsId;

    const chosenPersonagem = await service.getByIdService(paramsId);

    const Personagem = new entitie(personagem);

    Personagem.validateId(chosenPersonagem);

    Personagem.validate();

    const changedPersonagem = await service.putService(paramsId, personagem);

    res.status(200).send(changedPersonagem);
  } catch (err) {
    console.log(err.message);

    res.status(400).send({ message: err.message });
  }
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
