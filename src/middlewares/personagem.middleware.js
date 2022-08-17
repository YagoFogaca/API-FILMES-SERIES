const entitie = require('../entities/personagem.entitie');

const validatePersonagem = (req, res, next) => {
  try {
    const paramsId = req.params.id;

    const personagem = req.body;

    personagem.id = paramsId;

    const Personagem = new entitie(personagem);

    Personagem.validate();

    next();
  } catch (err) {
    console.log(err.message);

    res.status(400).send({ message: err.message });
  }
};

module.exports = validatePersonagem;
