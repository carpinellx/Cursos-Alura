// 1 Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".
let diaDaSemana = prompt("Qual é o dia da semana?");

let diaDaSemanaNormalizado = diaDaSemana.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase(); //normalize() e replace() são métodos de string que removem acentos e transformam a string em minúsculas

// "NFD" é uma forma de normalização de strings que separa os caracteres acentuados dos não acentuados. O /[\u0300-\u036f]/g é uma expressão regular que remove os acentos.

if (diaDaSemanaNormalizado == "sabado") { 
  alert("Bom fim de semana!");
} else if (diaDaSemanaNormalizado == "domingo") {
  alert("Bom fim de semana!"); 
} else {
  alert("Boa semana!");
}

// 2 Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.

let numero = prompt("Digite um número para saber se ele é positivo ou negativo");

if (numero > 0) {
    alert (`O número ${numero} é positivo!`);
} else if (numero < 0) {
    alert (`O número ${numero} negativo!`);
} else {
    alert ("O número é zero!");
}

// 3 Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".

let pontuacao = prompt("Digite a pontuação do jogo");

if (pontuacao >= 100) {
    alert("Parabéns, você venceu!");
} else {
    alert("Tente novamente para ganhar.");
}

// 4 Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo. 

let saldo = "R$ 2.398,70";

alert(`Seu saldo é de R$ ${saldo}.`);

// 5 Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.

let nome = prompt("Qual é o seu nome?");
alert(`Bem-vindo(a), ${nome}!`);