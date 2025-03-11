class Pessoa {
    constructor(nome){
        this.nome = nome;
    }

    apresentar = () => console.log (`Olá! Sou ${this.nome}.`);

}

class Aluno extends Pessoa {
    apresentar = () => console.log (`Olá! Sou ${this.nome} e sou um aluno.`);
}

class Professor extends Pessoa {
    apresentar = () => console.log (`Olá! Sou ${this.nome} e sou um professor.`);
}

const isabelle = new Pessoa("Isabelle")
const fany = new Aluno("Fany")
const raul = new Professor("Raul")

isabelle.apresentar();
fany.apresentar();
raul.apresentar();