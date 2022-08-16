const service = require('../services/personagens.service');

const entitie = require('../entities/personagem.entitie');

const getAllController = async (req, res) => {
  const personagens = await service.getAllService();

  if (!personagens) {
    res.status(500).send({ message: 'Personagem não encontrado' });

    return;
  }

  res.send(personagens);
};

const getByIdController = async (req, res) => {
  const parametroId = req.params.id;

  const personagem = await service.getByIdService(parametroId);

  if (!personagem) {
    res.status(400).send({ message: 'Personagem não encontrado' });

    return;
  }

  res.send(personagem);
};

const getByTipoController = async (req, res) => {
  const parametroTipo = req.params.tipo;

  const personagem = await service.getByTipoService(parametroTipo);

  if (!personagem) {
    res.status(400).send({ message: 'Personagem não encontrado' });

    return;
  }

  res.status(200).send(personagem);
};

const postController = async (req, res) => {
  try {
    const personagensId = await service.getAllService();

    let body = req.body;

    let ids = [];

    personagensId.forEach((personagem) => {
      ids.push(personagem.id);
    });

    let id = 1 + Math.max(...ids);

    body.id = id;

    const Personagem = new entitie(body);

    Personagem.validate();

    const personagem = await service.postService(Personagem.printPersonagem());

    res.send(personagem);
  } catch (err) {
    console.log(err.message);
    res.status(400).send({ message: err.message });
  }
};

const putController = async (req, res) => {
  try {
    const parametroId = req.params.id;

    const body = req.body;

    body.id = parametroId;

    const validaId = await service.getByIdService(parametroId);

    const Personagem = new entitie(body);

    Personagem.validateId(validaId);

    Personagem.validate();

    const personagem = await service.putService(parametroId, body);

    res.status(200).send(personagem);
  } catch (err) {
    console.log(err.message);

    res.status(400).send({ message: err.message });
  }
};

const deleteController = async (req, res) => {
  const parametroId = req.params.id;

  const personagemDeletado = await service.deleteService(parametroId);

  if (!personagemDeletado) {
    res.status(400).send({ message: 'Personagem não encontrado' });

    return;
  }
  res.status(200).send({ message: 'Personagem deletado com sucesso' });
};

module.exports = {
  getAllController,
  getByIdController,
  getByTipoController,
  postController,
  putController,
  deleteController,
};
