// 1 Criar uma função que exibe "Olá, mundo!" no console.

function olaMundo() {
  console.log("Olá, mundo!");
} 

// 2 Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.

function olaNome(nome) {
    console.log(`Olá, ${nome}!`);
    }

// 3 Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.

function dobroNumero(numero) {
    return numero * 2;
}

// 4 Criar uma função que recebe três números como parâmetros e retorna a média deles.

function mediaNumeros(n1, n2, n3) {
    return (n1 + n2 + n3) / 3;
}

// 5 Criar uma função que recebe dois números como parâmetros e retorna o maior deles.

function maiorNumero(n1, n2) {
    return n1 > n2 ? n1 : n2; // Operador ternário (condição ? valor se verdadeiro : valor se falso) 
} 

// 6 Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo

function numeroAoQuadrado(numero) {
    return numero * numero;
}