class personagemSchema {
  constructor(personagem) {
    this.id = personagem.id;
    this.tipo = personagem.tipo;
    this.nome = personagem.nome;
    this.nome_personagem = personagem.nome_personagem;
    this.nome_ator = personagem.nome_ator;
  }
  validateId(validaId) {
    if (validaId === null) {
      throw new Error('Personagem não encontrado');
    }
  }
  validate() {
    if (!this.tipo) {
      throw new Error('O tipo precisa ser preenchido');
    }
    if (!this.nome) {
      throw new Error('O nome da serie precisa ser preenchido');
    }
    if (!this.nome_personagem) {
      throw new Error('O nome do personagem precisa ser preenchido');
    }
    if (!this.nome_ator) {
      throw new Error('O nome do ator precisa ser preenchido');
    }
  }
  printPersonagem() {
    const personagem = {
      id: this.id,
      tipo: this.tipo,
      nome: this.nome,
      nome_personagem: this.nome_personagem,
      nome_ator: this.nome_ator,
    };
    return personagem;
  }
}

module.exports = personagemSchema;
