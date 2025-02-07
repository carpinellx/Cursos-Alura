// 1 Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.

let contador = 1;
while (contador <= 10) {
  alert(contador);
  console.log(contador);
  contador++;
}

// 2 Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.

let contador10 = 10;
while (contador10 >= 0) {
  alert(contador10);
  console.log(contador10);
  contador10--;
}

// 3 Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.

let numeroRegressivo = parseInt(prompt("Digite um número"));
let contadorRegressivo = numeroRegressivo;
while (contadorRegressivo >= 0) {
  console.log(contadorRegressivo);
  contadorRegressivo--;
}

// 4 Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.

let numeroProgressivo = parseInt(prompt("Digite um número"));
let contadorProgressivo = 0; 
while (contadorProgressivo <= numeroProgressivo) {
  console.log(contadorProgressivo);
  contadorProgressivo++;
}
