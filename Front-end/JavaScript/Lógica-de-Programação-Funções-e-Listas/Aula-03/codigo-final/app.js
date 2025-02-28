let numeroSecreto = gerarNumeroAleatorio();

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

document.querySelector('button').addEventListener('click', verificarChute);

exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');

function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Parabéns! Você acertou!')
        exibirTextoNaTela('p', 'O número secreto é ' + numeroSecreto);
    } else {
        exibirTextoNaTela('h1', 'Que pena! Tente novamente.');
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'Dica: O número secreto é menor.');
        }
        if (chute < numeroSecreto) {
            exibirTextoNaTela('p', 'Dica: O número secreto é maior.');
        }
    }
}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}