alert("Boas vindas ao jogo do número secreto");

let maxNumero = 80;

let numeroSecreto = parseInt(Math.random() * maxNumero + 1);
console.log(numeroSecreto);

let chute;
let tentativas = 1;

// enquanto chute for diferente do número secreto 
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${maxNumero}`);
    // se chute for igual ao número secreto
    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        // tentativas = tentativas + 1;
        tentativas++;
    }
}

let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
alert(`Parabéns! Você acertou o ${numeroSecreto} em ${tentativas} ${palavraTentativa}.`);