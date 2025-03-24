<?php

abstract class Pessoa{
    public $nome;

    public function __construct($nome)
    {
        $this->nome=$nome;
    }
} 

class Aluno extends Pessoa{
}

$fany = new Aluno ("Fany");
echo $fany->nome . "É ela";

?>