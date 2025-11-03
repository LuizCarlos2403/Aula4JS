//Atividade revisando o for


//Exercício 1 — Números de 1 a N
//Peça um número e mostre todos os números de 1 até ele.

let numero = prompt("Digite um número:");
let resultado = "";

for (let i = 1; i <= numero; i++) {
    resultado = resultado + i + " ";
}

document.getElementById("resultado1").textContent = resultado;




//Exercício 2 — Soma dos N primeiros números
//Peça um número e mostre a soma de 1 até ele.

let numero2 = parseInt(prompt("Digite um número para o Exercício 2:"));
let soma = 0
for (let i = 1; i <= numero2; i++) {
    soma = soma + i;
}

document.getElementById("resultado2").textContent = "A soma de 1 até " + numero2 + " é " + soma;





//Exercício 3 — Números pares até N
//Peça um número e exiba apenas os pares até ele.


let numero3 = prompt("Digite um número:");
let pares = "";


for (let i = 1; i <= numero3; i++) {
    if (i % 2 == 0) {
        pares += i + " ";
    }
}

document.getElementById("resultado3").textContent = "Números pares até: " + pares;





//Exercício 4 — Tabuada
//Peça um número e mostre sua tabuada de 1 a 10.

let numero4 = prompt("Digite um número:");
let tabuada = "";

for (let i = 1; i <= 10; i++) {
    tabuada += numero4 + " x " + i + " = " + (numero4 * i) + "<br>";
}

document.getElementById("resultado4").innerHTML = "Tabuada do " + numero4 + ":<br>" + tabuada;





//Exercício 5 — Média de 5 números
//Peça 5 números e calcule a média.

let som = 0;
for (let i = 1; i <= 5; i++) {
    let numero5 = parseFloat(prompt("Digite o " + i + "º número:"));
    som += numero5;
}
let media = som / 5;


document.getElementById("resultado5").textContent = "A média dos 5 números é: " + media;





//Exercício 6 — Contagem regressiva
//Peça um número e faça uma contagem regressiva até 1.

let numero6 = parseInt(prompt("Digite um número para a contagem regressiva:"));
let contagem = "";

for (let i = numero6; i >= 1; i--) {
    contagem += i + " ";
}


document.getElementById("resultado6").textContent = "Contagem regressiva: " + contagem;





//Exercício 7 — Fatorial
//Peça um número e calcule o fatorial dele.

let numero7 = parseInt(prompt("Digite um número para calcular o fatorial:"));
let fatorial = 1;


for (let i = 1; i <= numero7; i++) {
    fatorial = fatorial * i;
}


document.getElementById("resultado7").textContent = "O fatorial de " + numero7 + " é: " + fatorial;





//Exercício 8 — Números ímpares em intervalo
//Peça dois números e mostre todos os ímpares entre eles.


const inicio = parseInt(prompt("Digite o primeiro número do intervalo:"));
const fim = parseInt(prompt("Digite o segundo número do intervalo:"));

let impares = "";


for (let i = inicio; i <= fim; i++) {
    if (i % 2 == 1) {
        impares += i + " ";
    }
}


document.getElementById("resultado8").textContent = "Números ímpares entre " + inicio + " e " + fim + ": " + impares;





//Exercício 9 — Maior número
//Peça 5 números e mostre o maior deles.


let maior = parseFloat(prompt("Digite o 1º número:"));

for (let i = 2; i <= 5; i++) {
    let numero = parseFloat(prompt("Digite o " + i + "º número:"));

    if (numero > maior) {
        maior = numero;
    }
}

document.getElementById("resultado9").textContent = "O maior número digitado é: " + maior;





//Exercício 10 — Sequência de Fibonacci
//Mostre os primeiros N termos da sequência de Fibonacci.

let n = parseInt(prompt("Digite quantos termos da sequência de Fibonacci mostrar:"));

    let a = 0;
    let b = 1;
    let fibonacci = a + " " + b + " "; 

    for (let i = 3; i <= n; i++) {
        let proximo = a + b;
        fibonacci += proximo + " ";
        a = b;       
        b = proximo; 
    }

    
    document.getElementById("resultado10").textContent ="Primeiros " + n + " termos da sequência de Fibonacci: " + fibonacci;

