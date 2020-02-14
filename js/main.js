let pacientes = document.querySelectorAll(".paciente")
pacientes.forEach(paciente =>{


//Outro exemplo de FOR
//for (var i = 0; i < pacientes.length; i++) {
       // let paciente = pacientes [i];
    //console.log(i)
    //alert("error")
    //Console.error("bien venido");
    //Console.log("bem vindo");
    //OU...
    //pacientes.forEach(function(paciente){}

    
    let titulo = document.querySelector("#titulo")
    //console.log(document.querySelector("h1"));
    titulo.textContent = "ETECIA Desenvolvimento de sistemas";
    //pegar o peso 
    let peso =paciente.querySelector(".info-peso").textContent;
    //Pegar a altura
    let Altura = paciente.querySelector(".info-altura").textContent;

    let pesoValido = true;
    let alturaValida = true;
    let tdImc = paciente.querySelector(".info-imc");

    //VALIDAR DADOS
    if (peso <= 0 || peso > 1000) {
        pesoValido = false
        tdImc.textContent ="Peso inválido";
        paciente.classList.add("paciente-invalido");
    }
    if (Altura <= 0) {
        alturaValida = false
        tdImc.textContent ="Altura inválida";
        paciente.classList.add("paciente-invalido");
    }
    if (pesoValido == true && alturaValida == true) {
        //calcular o IMC
        let imc = peso / Altura ** 2;
        // calcular IMC

        //escrever O iMC na tabela
        tdImc.textContent = imc.toFixed (2);
    }

})
;
