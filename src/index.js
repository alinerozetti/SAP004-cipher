import cipher from './cipher.js';

let botaoCod= document.getElementById("botaoCod")
botaoCod.addEventListener("click",function (){

    let senha= document.getElementById("senha");
    let offset=  document.getElementById("offset");
    let resultado= cipher.encode(senha.value, offset.value);
    let resposta= document.getElementById("resposta");
    resposta.innerHTML= resultado;

});

let botaoDec= document.getElementById("botaoDec")
botaoDec.addEventListener("click",function (){

    let senha= document.getElementById("senha");
    let offset=  document.getElementById("offset");
    let resultado= cipher.decode(senha.value, offset.value);
    let resposta= document.getElementById("resposta");
    resposta.innerHTML= resultado;

});

let reset= document.getElementById("Reset")
reset.addEventListener("click", function(){
    window.location.reload()
});