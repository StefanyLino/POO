class Pessoa{
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
        }

        apresentar = () => (` Olá! Sou ${this.nome} e tenho ${this.idade} anos.`)
        senaii = () => (`${this.nome} está no SENAI`)
}

class Aluno extends Pessoa{
    estudar = () => (`${this.nome} está estudando`)
}


class Professores extends Pessoa{
    ensinar = () => (`${this.nome} está ensinando`)
}

const fany = new Aluno("Fany" , 17)
const raul = new Professores("Raul", 28)

console.log(fany.apresentar())
console.log(raul.apresentar())

console.log(fany.senaii())
console.log(raul.senaii())

console.log(fany.estudar())
console.log(raul.ensinar())