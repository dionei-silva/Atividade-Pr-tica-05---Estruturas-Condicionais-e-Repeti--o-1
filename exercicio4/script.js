/* 4. Numa promoção exclusiva para o Dia da Mulher, uma loja quer dar
descontos para todos, mas especialmente para mulheres. Faça um
programa que leia nome, sexo e o valor das compras do cliente e
calcule o preço com desconto. Sabendo que:
a. Homens ganham 5% de desconto

b. Mulheres ganham 13% de desconto */

let nome = prompt("Digite o nome:");
let sexo = prompt("Digite o sexo do cliente (h ou m):");
let valor = parseFloat(prompt("Digite o valor das compras do cliente:"));

if (sexo === "h") {
  valor *= 0.95;
} else {
  valor *= 0.87;
}

document.write(`O cliente ${nome} pagou: R$${valor.toFixed(2)}`);
