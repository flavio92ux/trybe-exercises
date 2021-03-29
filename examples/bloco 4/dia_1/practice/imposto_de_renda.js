/* Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, 
calcule o líquido a ser recebido. */

let salario = 5500;
let inss;
let ir;
let trybe;

if (salario < 1500.95) {
    inss = salario * 0.08;
} else if (salario < 2594.93) {
    inss = salario * 0.09;
} else if (salario < 5189.83) {
    inss = salario * 0.11;
} else {
    inss = 570.88;
}

if ((salario - inss) < 1903.99) {
    console.log ("Isento");
} else if ((salario - inss) < 2826.66) {
    ir = (salario - inss) * 0.075 - 142.8;
} else if ((salario - inss) < 3751.06) {
    ir = (salario - inss) * 0.15 - 354.8;
} else if ((salario - inss) < 4664.69) {
    ir = (salario - inss) * 0.225 - 663.13;
} else {
    ir = (salario - inss) * 0.275 - 869.36;
}

if (salario > 3499.99) {
    trybe = salario * 0.17;
} else {
    trybe = null;
}

console.log ("Trybe =",trybe);
console.log ("IR =",ir);
console.log ("INSS =",inss);
console.log ("IR+INSS",ir+inss);
console.log ("Salário líquido =",salario-inss-ir-trybe);

