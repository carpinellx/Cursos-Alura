let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

document.querySelector('button').addEventListener('click', verificarChute);
document.querySelector('input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        verificarChute();
    }
});

exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');

function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Parabéns! Você acertou!');	
        let palavraTentativa = tentativas > 1 ? ' tentativas' : ' tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
    } else {
        exibirTextoNaTela('h1', 'Que pena! Tente novamente.');
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'Dica: O número secreto é menor.');
        }
        if (chute < numeroSecreto) {
            exibirTextoNaTela('p', 'Dica: O número secreto é maior.');
        }
        tentativas++;
    }
}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}