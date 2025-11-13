// Exercício 6: Montante de investimento

function calcularMontante(C, i, t) {

&nbsp;   let montante = C \* Math.pow(1 + (i / 100), t);  // i em %

&nbsp;   console.log("Montante: R$ " + montante.toFixed(2));

}

let C = parseFloat(prompt("Digite o capital inicial (C):"));

let i = parseFloat(prompt("Digite a taxa de juros mensal (%):"));

let t = parseInt(prompt("Digite o tempo em meses (t):"));

calcularMontante(C, i, t);



