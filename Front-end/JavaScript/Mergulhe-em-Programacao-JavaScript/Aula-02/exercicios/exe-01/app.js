// Exercício 1 - Aula 1

// Inclua comandos console.log em diferentes partes do código para verificar o fluxo do programa, os valores das variáveis e outras informações relevantes durante a fase de desenvolvimento.


alert("Boas vindas ao jogo do número secreto");

let numeroSecreto = 3;
console.log(numeroSecreto);

let chute = prompt("Escolha um número entre 1 e 10");
console.log(`valor do chute: ${chute}`);

console.log('Resultado da comparação:', chute == numeroSecreto);

if (chute == numeroSecreto) {
    alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto}`);
} else { 
    console.log('Valor do número secreto:', numeroSecreto);
    alert("Você errou! :(");
}
