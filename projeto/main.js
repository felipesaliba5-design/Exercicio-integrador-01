const Aluno = require('./pessoas/Aluno');
const Pessoa = require('./pessoas/Pessoa');
const Professor = require('./pessoas/Professor');

function mostrarDados(objeto) {
    let dados = `Nome: ${objeto.getNome() || 'Indefinido'} | E-mail: ${objeto.getEmail() || 'Inválido'}`;
    
    if (objeto instanceof Aluno) {
        dados += ` | Matrícula: ${objeto.getMatricula() || 'Inválida'}`;
    }  else if (objeto instanceof Professor) {
        dados += ` | Disciplina: ${objeto.getDisciplina() || 'Indefinida'}`;
    }

    console.log(dados);
}

console.log("\nTeste Alunos");
const a1 = new Aluno("João", "joao@escola.edu.br", "202512");
const a2 = new Aluno("Maria", "maria@dominio.com", "123");
mostrarDados(a1);
mostrarDados(a2);

console.log("\nTeste Pessoas ");
const p1 = new Pessoa("Ronaldo", "ronaldo@empresa.com");
const p2 = new Pessoa("Ana", "ana@gmail.net");
mostrarDados(p1);
mostrarDados(p2);

console.log("\nTestando Professores");
const prof1 = new Professor("Júlia", "julia@ifb.edu.br", "Matemática Discreta");
const prof2 = new Professor("Felipe", "felipe@computacao.com", "Programação Orientada a Objetos");
mostrarDados(prof1);
mostrarDados(prof2);