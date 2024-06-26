var emailRecuperar, emailPara, botaoEnviarEmail, botaoDone,

// DOM: 

document.addEventListener("DOMContentLoaded", function() {

    botaoEnviarEmail()
    botaoDone()

})


// Preenchimento de formulário

emailRecuperar = document.querySelector(".email-de-recuperacao")


// Botão enviar email para:

botaoEnviarEmail = document.getElementById("enviar-email")

botaoEnviarEmail.addEventListener("click", function(){

    export const valorEmailRecuperar = emailRecuperar.value

    verificarBancoEmail(valorEmailRecuperar)

    if (verificarBancoEmail(valorEmailRecuperar) === true) {

        aparecerCaixa()

        document.getElementById("caixa-escondida").textContent = valorEmailRecuperar

    }

    else {
        emailInexistente()
    }


})



// ----------------------------------------------------------------------
// Consultar se o Email está cadastrado
import { bancoDados } from '../Cadastro/cadastro.js';


function verificarBancoEmail(valorEmailRecuperar) {

    for (const id in bancoDados) {
        if (bancoDados[id][3] === valorEmailRecuperar) {
            return true;
        }
    }
    return false;
}

// Mensagem de retorno se o email inexiste 
function emailInexistente(){

    msgEmailInexistente = document.createElement("p")

    msgEmailInexistente.textContent = "Email não cadastrado"

    msgEmailInexistente.style.color = "red"

    emailRecuperar.appendChild(msgEmailInexistente)

}


// --------------------------------------------------------------------------
// Done



botaoDone = document.getElementById("botao-done")

botaoDone.addEventListener("click", function(){
    esconderCaixa()

    // DIRECIONAR PARA RECUPERAR_SENHA.HTML
    
    // quando eu souber mandar email, só fecha mesmo
    
})

// JQuery

function aparecerCaixa() {
    $("#caixa-escondida").removeAttr("style")

}
function esconderCaixa() {
    $("#caixa-escondida").css('display', 'none')

}