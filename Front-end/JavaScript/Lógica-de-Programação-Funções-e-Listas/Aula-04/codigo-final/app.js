let listaDeNumerosSorteados = [];
let numeroLimite = 10;
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

exibirMensagemInicial();

function exibirMensagemInicial (tag, texto) {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}


function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Parabéns! Você acertou!');	
        let palavraTentativa = tentativas > 1 ? ' tentativas' : ' tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled'); // Habilita o botão de reiniciar o jogo
    } else {
        exibirTextoNaTela('h1', 'Que pena! Tente novamente.');
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'Dica: O número secreto é menor.');
        }
        if (chute < numeroSecreto) {
            exibirTextoNaTela('p', 'Dica: O número secreto é maior.');
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let QuantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (QuantidadeDeElementosNaLista === numeroLimite) {
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}


function limparCampo() {
    let chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true); // Desabilita o botão de reiniciar o jogo
}