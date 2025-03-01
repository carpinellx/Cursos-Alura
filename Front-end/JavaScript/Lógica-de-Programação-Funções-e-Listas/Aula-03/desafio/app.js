// 1 Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.

function imc(altura, peso) {
  return peso / (altura * altura);
}

console.log(`Seu IMC é: ${imc(1.75, 70).toFixed(2)}`);

// 2 Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.

function fatorial(numero) {
  let resultado = 1;
    for (let i = 1; i <= numero; i++) {
        resultado *= i;
        }
    return resultado;
}

console.log(`O fatorial de 5 é: ${fatorial(5)}`);

// 3 Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.

function conversorDolarParaReal(dolar) {
  return dolar * 4.80;
}

console.log(`$10 dólares é igual a R$${conversorDolarParaReal(10).toFixed(2)} reais`);

// 4 Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.

function areaPerimetroSalaRetangular(altura, largura) {
  return {
    area: altura * largura,
    perimetro: 2 * (altura + largura)
  };
}

console.log(areaPerimetroSalaRetangular(5, 10));

// 5 Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.

function areaPerimetroSalaCircular(raio) {
  return {
    area: 3.14 * raio * raio,
    perimetro: 2 * 3.14 * raio
  };
}

console.log(areaPerimetroSalaCircular(5));

// 6 Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.

function tabuada(numero) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
  }
}

tabuada(5);
