<?php

class Aluno{
    public $nome;
    public $idade;

    public function __construct($nome, $idade)
    {
        $this->nome = $nome;
        $this->idade = $idade;
    }

    public function estudar (){
        echo "{$this->nome} está estudando";
    }
}

// CRIANDO OBJETOS

$pedro = new Aluno ("Pedro", 15);
$ana = new Aluno ("Ana", 19);

$pedro->estudar();

?>