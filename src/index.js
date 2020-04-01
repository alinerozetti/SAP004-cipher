import cipher from './cipher.js';

let botaoCod= document.getElementById("botaoCod")
botaoCod.addEventListener("click",function (){

    let senha= document.getElementById("senha");
    let offset=  document.getElementById("offset");
    let resultado= cipher.encode(senha.value, offset.value);
    let resposta= document.getElementById("resposta");
    resposta.innerHTML= resultado;

});

