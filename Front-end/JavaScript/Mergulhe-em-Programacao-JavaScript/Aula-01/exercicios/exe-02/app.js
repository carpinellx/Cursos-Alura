// Exercício 2 - Aula 2

// Crie uma mensagem no console que diga que a pessoa errou o número secreto, caso ela não acerte o número secreto.

alert("Boas vindas ao jogo do número secreto!"); 
let numeroSecreto = 5;
let chute = prompt ("Escolha um número entre 1 e 10");

if (chute == numeroSecreto) {
    console.log("Ïsso aí! Você descobriu o número secreto! (5)");
} else {
    console.log("Que pena! O número secreto é 5.");
}