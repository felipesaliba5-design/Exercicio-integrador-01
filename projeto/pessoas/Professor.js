const Pessoa = require('./Pessoa');

class Professor extends Pessoa {
    #disciplina;
    constructor(nome, email, disciplina) {
        super(nome, email);
        this.setDisciplina(disciplina);
    }
    setDisciplina(disciplina) {
        this.#disciplina = disciplina;
    }
    getDisciplina() {
        return this.#disciplina;
    }
    setEmail(email) {
        if (email && email.endsWith('.edu.br')) {
            return super.setEmail(email); 
        }
        return false;
    }
}

module.exports = Professor;