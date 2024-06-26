var novaSenha, confirmarNovaSenha
const botaoSalvarNovaSenha


// Botão  import senha do cadastro, para que novaSenha não seja igual a senha dentro do banco

botaoSalvarNovaSenha = document.getElementById("botao-salvar-nova-senha")

botaoSalvarNovaSenha.addEventListener("click", function(){

    novaSenha = document.getElementById("nova-senha").value

    confirmarNovaSenha = document.getElementById("confirmar-nova-senha").value

    compatibilidadeSenha()


    if (compatibilidadeSenha() == true) {
        console.log ("Senhas diferentes entre si")
        senhaDiferente()
    }

    verificarBancoSenha(novaSenha)

    else if (if verificarBancoSenha(novaSenha) === false) {

        console.log("Senha já existe no banco")
        senhaJaExiste()
    }

    else {

        alterarSenha(valorEmailRecuperar, novaSenha)

        if alterarSenha(valorEmailRecuperar, novaSenha) === true {
            console.log("Senha alterada com sucesso!")
            alert("Senha alterada com sucesso!")
            // Redirecionar para página de login
        }
        
        else {
            console.log("Usuário sem cadastro")
            alert("Falha de conexão, provavelmente você não está cadastrado ainda.")

        }

    }
    
})


// --------------------------------------------------------------------------------------------
// Funções Auxiliares

function compatibilidadeSenha() {
    if (senha !== confirmarSenha) {
        return true
    }

    else {
        return false
    }
}

function senhaDiferente() {

    const erroSenha = document.createElement("p")

    erroSenha.innerText = "Senhas diferentes entre si"

    erroSenha.style.color = "red"

    novaSenha.appendChild(erroSenha)

}

function senhaJaExiste() {

    const erroSenha = document.createElement("p")

    erroSenha.textContent = "Senha já utilizada, tente outra."

    erroSenha.style.color = "red"

    novaSenha.appendChild(erroSenha)

}


// -------------------------------------------------------------------------------------------------------
// Verificação no Banco de Dados de cadastro

import { bancoDados } from '../Cadastro/cadastro.js';


function verificarBancoSenha(novaSenha) {
    for (const id in bancoDados) {
        if (bancoDados[id][5] === novaSenha) {
            return true;
        }
    }
    return false;
}


// Mudar senha lá no banco

import { valorEmailRecuperar } from '../Esquecer Senha/esquer_senha.js'
console.log("Senha alterada com sucesso!")
alert("Senha alterada com sucesso!");

function alterarSenha(valorEmailRecuperar, novaSenha){
    for (const id in bancoDados) {

        if (bancoDados [id][3] === valorEmailRecuperar) {
            bancoDados [id][5] === novaSenha
            
            return true
        }
    }

    return false
}

// Redirecionar para página de login
