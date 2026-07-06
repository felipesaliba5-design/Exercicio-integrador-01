
const util = require('../biblioteca/util');

class Pessoa {
    #nome;
    #email;

    constructor(nome, email) {
        this.setNome(nome);
        this.setEmail(email);
    }

    setNome(nome) {
        this.#nome = nome;
    }

    getNome() {
        return this.#nome;
    }

    setEmail(email) {
        if (util.validarEmail(email)) {
            this.#email = email;
            return true;
        }
        return false;
    }

    getEmail() {
        return this.#email;
    }
}

module.exports = Pessoa;