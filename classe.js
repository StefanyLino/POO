// CRIANDO A CLASSE ALUNO

class Aluno {
    constructor(nome, idade){
    // O contructor é um método tradicional
    this.nome = nome;
    this.idade = idade;
    }
    estudar = () => console.log(`${this.nome} está estudando.`);
    felicidade = () => console.log(`${this.nome} está feliz.`);
}

const fany = new Aluno("Fany" , 17)

const isabelle = new Aluno("Isabelle", 17)

const alana = new Aluno("Alana", 18)

console.log (alana.nome,alana.idade);
alana.felicidade();