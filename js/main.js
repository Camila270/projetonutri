
//console.log("bem vindo");
var titulo = document.querySelector("#titulo");
titulo.textContent = "Etecia Nutrição e Dietética"



// pegar o peso
let paciente = document.querySelector(".paciente");
let tdPeso = paciente.querySelector(".info-peso");
let peso = tdPeso.textContent;
console.log(paciente);

// pegar a altura
let tdAltura = paciente.querySelector(".info-altura");
let altura = tdAltura.textContent;
console.log(altura);

let pesoValido = true;
let alturalValida = true;


//validar dados
if (peso <= 0 or || peso > 1000) {
    console.error("peso inválido");
    pesoValido = false;
}

if (altura < 0) {
    console.error("altura inválida");
    alturaValida = false;
}
 if(pesoValido == true && alturaValida == true);

// calcular IMC
let imc = peso / altura ** 2;
console.log(imc);
 
// ou ...
//let imc = peso / (altura * altura);
//console.log(imc);


// escrever o IMC na tabela
let tdIMC = paciente.querySelector(".info-imc");
tdIMC.textContent = imc;

