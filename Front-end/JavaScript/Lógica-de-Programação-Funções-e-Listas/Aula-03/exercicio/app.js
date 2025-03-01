// Você foi contratado (a) para desenvolver uma calculadora de média e verificar a situação de aprovação de um aluno com base em suas quatro notas. A média para aprovação é 5. Sua tarefa é implementar duas funções em JavaScript:

// calcularMedia(nota1, nota2, nota3, nota4)=> Esta função recebe as quatro notas do aluno como parâmetros e retorna a média calculada com base nessas notas.

// verificarAprovacao(media) => Esta função recebe a média do aluno como parâmetro e retorna "Aprovado" se a média for maior ou igual a 5, caso contrário, retorna "Reprovado".

function calcularMedia(n1, n2, n3, n4) { // Função que calcula a média das notas
    return (n1 + n2 + n3 + n4) / 4; // Retorna a média
}

function verificarAprovacao(media) { // Função que verifica se o aluno foi aprovado ou reprovado
    return media >= 5 ? "Aprovado" : "Reprovado"; // Se a média for maior ou igual a 5, retorna "Aprovado", caso contrário, retorna "Reprovado"
}

let nota1 = 7, nota2 = 6, nota3 = 3, nota4 = 5; // Notas do aluno
let media = calcularMedia(nota1, nota2, nota3, nota4); // Calcula a média
console.log(`Média: ${media}`); // Exibe a média
console.log(`Situação: ${verificarAprovacao(media)}`); // Exibe a situação do aluno
