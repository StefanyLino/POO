<?php

class Aluno{
    public $nome;
    public $idade;
    private $nota; //atributo privado

    public function __construct($nome, $idade, $nota)
    {
        $this->nome = $nome;
        $this->idade = $idade;
        $this->nota = $nota;
    }

    public function verNota(){
        return $this->nota;
    }
}

$fany = new Aluno ("Fany", 17, 100);

echo $fany->nome;
echo $fany->verNota();

?>