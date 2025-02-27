let titulo = document.querySelector('h1'); // Seleciona o elemento h1
titulo.innerHTML = 'Jogo do número secreto'; // Altera o conteúdo do h1

let paragrafo = document.querySelector('p'); // Seleciona o elemento p
paragrafo.innerHTML = 'Escolha um número entre 1 e 10'; // Altera o conteúdo do p

function verificarChute() {
    console.log('O botão foi clicado');
}