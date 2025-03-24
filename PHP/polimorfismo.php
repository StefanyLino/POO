<?php

class Pessoa{
    public $nome;

    public function __construct($nome)
    {
        $this->nome = $nome;
    }

    public function apresentar (){
        echo "Olá! Sou {$this->nome}.<br>";
    }
}

// A classe Aluno herda de Pessoa e sobreescreve o método Apresentar

class Aluno extends Pessoa{
    public function apresentar()
    {
        echo "Oi! Meu nome é {$this->nome} e sou aluno.<br>";
    }
}

class Professor extends Pessoa{
    public function apresentar()
    {
        echo "Oi! Meu nome é {$this->nome} e sou professor.<br>";
    }
}

$fany = new Aluno ("Fany");
$raul = new Professor ("Raul");

$fany->apresentar();
$raul->apresentar();

?>