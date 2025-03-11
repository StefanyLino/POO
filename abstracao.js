class Pessoa{
    constructor(nome){
        if(this.constructor === Pessoa){
            throw new Error ('Deu erro amigão')
        }
        this.nome = nome;
    }
}

class Aluno extends Pessoa {
}

const fany = new Aluno("Fany")

console.log(fany)