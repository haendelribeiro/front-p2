// Trabalho Efetivo Discente - Funções em JavaScript
// Função para calcular o total da compra
function calcularTotal(precoUnitario, quantidade) {
    return precoUnitario * quantidade;
}
// Função para aplicar desconto baseado no valor total
function aplicarDesconto(valorTotal) {
    if (valorTotal > 100) {
        return valorTotal * 0.9;  // 10% de desconto
    } else {
        return valorTotal;  // Sem desconto
    }
}
// Função para exibir o resumo da compra
function exibirResumo(valorTotal, valorFinal) {
    console.log("Resumo da compra:");
    console.log("Valor total antes do desconto: R$ " + valorTotal.toFixed(2));
    console.log("Valor final com desconto aplicado: R$ " + valorFinal.toFixed(2));
}
// Parte principal: pedir entradas e executar
let preco = parseFloat(prompt("Digite o preço unitário do produto:"));
let quantidade = parseInt(prompt("Digite a quantidade comprada:"));
let total = calcularTotal(preco, quantidade);
let final = aplicarDesconto(total);
exibirResumo(total, final);
