// CRIANDO A CLASSE ALUNO

class Aluno {
    #nota
    constructor(nome, idade, nota){
    // O contructor é um método tradicional
    this.nome = nome;
    this.idade = idade;
    this.#nota = nota;
    }
    estudar = () => console.log(`${this.nome} está estudando.`);
    
    vernota = () => this.#nota

    tudo = () => (`${this.nome} tem ${this.idade} anos e tirou ${this.#nota} pontos na prova de HTML e CSS.`)
}

const fany = new Aluno("Fany" , 17, 97)

console.log(fany.tudo())