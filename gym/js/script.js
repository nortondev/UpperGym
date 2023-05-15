const menuToggle = document.getElementById("js-menu-toggle");
const openMenuMobile = document.getElementById("js-open-mobile-menu");

menuToggle.addEventListener("click", function () {
  openMenuMobile.classList.toggle("active");
  menuToggle.classList.toggle("active");
});

document.body.onresize = function () {
  if (document.body.clientWidth >= 1200) {
    openMenuMobile.classList.remove("active");
    menuToggle.classList.remove("active");
  }
};

function calcImc(){
  //declarando as variaveis

let peso = document.getElementById("peso").value;
let altura = document.getElementById("altura").value /100;
let resultado = document.getElementById("resultado")
let imc =(peso /(altura * altura)).toFixed(2);
let mensagem="";


//condição if para verificar se os campos estão vazios e o seu imc

if(altura !="" && peso !=""){

if(imc < 18.5){
mensagem="Você está magro";
}
else if (imc < 25){	
mensagem="Você está com o peso normal";
}
else if(imc < 35){
mensagem=" Cuidado você está gordinho";
}
else {
mensagem ="Cuidado você está com obesidade";
}
//apresenta no textarea o resultado da variavel mensagem
 resultado.textContent =`Caro Amigo(a) Seu IMC é ${imc}! ${mensagem}`;	
}else{
resultado.textContent ="Preencha os campos";
}

}

// declarando e chamando a função e o metódo
let Calcular = document.getElementById("btn_calcular");
Calcular.addEventListener('click',calcImc);


