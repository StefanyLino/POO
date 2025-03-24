<?php

class Escola{
    public $nome;
    public $idade;
    private $nota; //atributo privado

    public function __construct($nome, $idade, $nota)
    {
        $this->nome = $nome;
        $this->idade = $idade;
        $this->nota = $nota;
    }

    public function falar(){
        echo "Olá! Sou {$this->nome}.<br>";
    }

    public function verNota(){
        return $this->nota;
    }
}

class Aluno1 extends Escola{
    public function falar()
    {
        echo "Oi! Meu nome é {$this->nome} e sou aluno do SESI. Eu tirei {$this->verNota()} <br>";
    }
}

class Aluno2 extends Escola{
    public function falar()
    {
        echo "Oi! Meu nome é {$this->nome} e sou aluno do SENAI. Eu tirei {$this->verNota()} <br>";
    }
}

class Professor1 extends Escola{
    public function falar()
    {
        echo "Oi! Meu nome é {$this->nome} e sou professor do SESI.<br>";
    }
}

class Professor2 extends Escola{
    public function falar()
    {
        echo "Oi! Meu nome é {$this->nome} e sou professor do SENAI.<br>";
    }
}

class Funcionario1 extends Escola{
    public function falar()
    {
        echo "Oi! Meu nome é {$this->nome} e sou funcionária do SESI.<br>";
    }
}

class Funcionario2 extends Escola{
    public function falar()
    {
        echo "Oi! Meu nome é {$this->nome} e sou funcionária do SENAI.<br>";
    }
}

$fany = new Aluno1 ("Fany", 17, 100);
$isabelle = new Aluno2 ("Isabelle", 18, 80);
$suzi = new Professor1 ("Suzi", 58, 0);
$raul = new Professor2 ("Raul", 38, 0);
$erivan = new Funcionario1 ("Erivan", 49, 0);
$andreia = new Funcionario2 ("Andréia", 53, 0);










?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div class="container">
        <h1>Informações da Escola</h1>
        <ul>
            <li><?php $fany->falar(); ?></li>
            <li><?php $isabelle->falar(); ?></li>
            <li><?php $suzi->falar(); ?></li>
            <li><?php $raul->falar(); ?></li>
            <li><?php $erivan->falar(); ?></li>
            <li><?php $andreia->falar(); ?></li>
        </ul>
    </div>
</body>
</html>