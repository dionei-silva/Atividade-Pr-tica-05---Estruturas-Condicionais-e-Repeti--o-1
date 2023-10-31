/* 2. Desenvolva um aplicativo que leia o salário e o sexo de vários
funcionários. No final, mostre o total de salários pagos aos homens e
o total pago às mulheres. O programa vai perguntar ao usuário se
ele quer continuar ou não sempre que ler os dados de um
funcionário. */

let salarioHomens = 0;
let salarioMulheres = 0;
let continuar = true;

while (continuar) {
  let salario = parseFloat(prompt("Digite o salário "));
  let sexo = prompt("Digite o sexo (h ou m)");

  if (sexo === "h") {
    salarioHomens += salario;
  } else {
    salarioMulheres += salario;
  }

  continuar = confirm("Deseja continuar?");
}

document.write(`Total de salários pagos aos homens: R$${salarioHomens.toFixed(2)}<br>`)
document.write(`Total de salários pagos às mulheres: R$${salarioMulheres.toFixed(2)}<br>`);