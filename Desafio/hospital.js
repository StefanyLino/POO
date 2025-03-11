class Hospital {
    #cpf
    constructor(nome, cpf){
    this.nome = nome;
    this.#cpf = cpf;
    }

    apresentar = () => (`Olá! Sou ${this.nome}.`);
    
    vercpf = () => this.#cpf

    tudo = () => (`O CPF do funcionário ${this.nome} é ${this.#cpf}.`)
}

class Med1 extends Hospital{
    apresentar = () => (`Olá! Sou ${this.nome}, estou diagnosticando doenças.`);
}

class Med2 extends Hospital{
    apresentar = () => (`Olá! Sou ${this.nome}, estou preescrevendo tratamentos.`);
}

class Med3 extends Hospital{
    apresentar = () => (`Olá! Sou ${this.nome}, estou realizando uma cirurgia.`);
}

class Med4 extends Hospital{
    apresentar = () => (`Olá! Sou ${this.nome}, estou aconselhando sobre saúde preventiva.`);
}

class Med5 extends Hospital{
    apresentar = () => (`Olá! Sou ${this.nome}, estou monitorando pacientes.`);
}

class Med6 extends Hospital{
    apresentar = () => (`Olá! Sou ${this.nome}, estou realizando exames médicos.`);
}

class Med7 extends Hospital{
    apresentar = () => (`Olá! Sou ${this.nome}, estou cuidando da gestão de emergências do hospital.`);
}

const lucas = new Med1("Lucas Almeida" , 73841592836)
const fernanda = new Med2("Fernanda Oliveira" , 92506173482)
const carlos = new Med3("Carlos Silva" , 15793046872)
const mariana = new Med4("Mariana Costa" , 49108257163)
const rafael = new Med5("Rafael Souza" , 64351792580)
const juliana = new Med6("Juliana Pereira" , 21837465983)
const gabriel = new Med7("Gabriel Rodrigues" , 87016924531)

console.log(lucas.apresentar())
console.log(lucas.tudo())

console.log(fernanda.apresentar())
console.log(fernanda.tudo())

console.log(carlos.apresentar())
console.log(carlos.tudo())

console.log(mariana.apresentar())
console.log(mariana.tudo())

console.log(rafael.apresentar())
console.log(rafael.tudo())

console.log(juliana.apresentar())
console.log(juliana.tudo())

console.log(gabriel.apresentar())
console.log(gabriel.tudo())


// Lista de médicos
const medicos = [lucas, fernanda, carlos, mariana, rafael, juliana, gabriel];

const listaMedicos = document.getElementById("medicosList");

// Adicionar cada médico na lista HTML
medicos.forEach(medico => {
    const li = document.createElement("li");
    li.innerHTML = `
        <div class="all">
            <div class="info">${medico.apresentar()}</div>
            <div class="cpf">${medico.tudo()}</div>
        </div>
            `;
    listaMedicos.appendChild(li);
});