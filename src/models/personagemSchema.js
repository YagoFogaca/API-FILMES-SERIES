const mongoose = require('mongoose');

const { Schema } = mongoose;

const personagemSchema = new Schema({
  id: { type: String, required: true },
  tipo: { type: String, required: true },
  nome: { type: String, required: true },
  nome_personagem: { type: String, required: true },
  nome_ator: { type: String, required: true },
});

const Personagem = mongoose.model('filmes-series', personagemSchema);

module.exports = Personagem;
