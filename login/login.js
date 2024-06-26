
document.addEventListener("DOMContentLoaded", function() {

    preencherUsuario();


// ---------------------------------------------------------------------------------------------------------
// Carregar banco de dados
    let bancoDadosCadastro = localStorage.getItem('bancoDadosCadastro')


    if (bancoDadosCadastro) {
        bancoDadosCadastro = JSON.parse(bancoDadosCadastro);
    }


// ----------------------------------------------------------------------
// Botão de entrar

let btnEntrar = document.getElementById("botao-entrar");

btnEntrar.addEventListener("click", function() {

    let usuarioValido = verificarUsuario();
    let senhaValida = verificarSenha();
    let credenciaisValidas = verificarCredenciais();


    if (!usuarioValido && !senhaValida && !credenciaisValidas) {
        console.log("Credenciais inválidas. Não é possível entrar.");
        return;
    }

    else {
  
    registrarLogin();

  
    window.location.href = '../home/home.html';
    }
});

// ---------------------------------------------------------------------------------------------------
// Remember


let btnLembrarUsuario = document.getElementById("lembrar-usuario");

btnLembrarUsuario.addEventListener('change', lembrarUsuario);


    function lembrarUsuario() {
        let campoUsuario = document.getElementById("usuario").value;
        
        if (btnLembrarUsuario.checked) {

            localStorage.setItem("lembrarUsuario", "true");
            localStorage.setItem("usuario", campoUsuario);

        } else {
            localStorage.removeItem("lembrarUsuario");
        }
    }


function preencherUsuario() {
    let verificarLembrarUsuario = localStorage.getItem("lembrarUsuario");

    if (verificarLembrarUsuario === "true") {

        let valorCampoUsuario = localStorage.getItem("usuario");

        let campoUsuario = document.getElementById("usuario");

        campoUsuario.value = valorCampoUsuario;

        btnLembrarUsuario.checked = true; 
    }
}

// ---------------------------------------------------------------------------------------------------------
// Verificar Usuário

function verificarUsuario() {

    let emailUsuario = document.getElementById("usuario")
    let emailUsuarioValor = emailUsuario.value

        for (let i = 0; i < bancoDadosCadastro.length; i++) {

            let emailCadastrado = bancoDadosCadastro[i].email;

            if (emailCadastrado !== bancoDadosCadastro[i].email) {

                console.log("Email não encontrado");
    
                const erroEmail = document.createElement("p");
                erroEmail.innerText = "Email não cadastrado";
                erroEmail.style.color = "red";
                erroEmail.classList.add("erro-email");
        
                const emailLabel = document.getElementById("usuario").parentElement;
                let erroExistente = emailLabel.querySelector(".erro-email");
        
                if (!erroExistente) {

                    emailLabel.appendChild(erroEmail);
                }
    
                return true;
            }
        }
        const emailLabel = document.getElementById("usuario").parentElement;
        let erroExistente = emailLabel.querySelector(".erro-email");
        if (erroExistente) {

            emailLabel.removeChild(erroExistente);
        }

    return false;

}
   
// ----------------------------------------------------------------------------------------------------
// Verificar Senha

function verificarSenha() {

    let senhaUsuario = document.getElementById("usuario")
    let senhaUsuarioValor = senhaUsuario.value

        for (let i = 0; i < bancoDadosCadastro.length; i++) {

            let senhaCadastrada = bancoDadosCadastro[i].senha;

            if (senhaCadastrada !== bancoDadosCadastro[i].senha) {

                console.log("Email não encontrado");
    
                const erroSenha = document.createElement("p");
                erroSenha.innerText = "Senha incorreta!";
                erroSenha.style.color = "red";
                erroSenha.classList.add("erro-senha");
        
                const senhaLabel = document.getElementById("usuario").parentElement;
                let erroExistente = senhaLabel.querySelector(".erro-senha");
        
                if (!erroExistente) {

                    senhaLabel.appendChild(errosenha);
                }
    
                return true;
            }
        }
        const senhaLabel = document.getElementById("senha").parentElement;
        let erroExistente = senhaLabel.querySelector(".erro-senha");
        if (erroExistente) {

            senhaLabel.removeChild(erroExistente);
        }

    return false;

}

// ---------------------------------------------------------------------------------------------------------------------
// Verificar se usuário e senha estão relacionados

function verificarCredenciais() {

    let emailUsuario = document.getElementById("usuario").value;

    let senhaUsuario = document.getElementById("senha").value;

    let credenciaisValidas = false;

    for (let i = 0; i < bancoDadosCadastro.length; i++) {

        if (bancoDadosCadastro[i].email === emailUsuario && bancoDadosCadastro[i].senha === senhaUsuario) {

            removerErro("erro-email");

            removerErro("erro-senha");

            credenciaisValidas = true;
            break;
        }
    }

    if (!credenciaisValidas) {

        exibirErro("usuario", "erro-email", "Email não cadastrado");

        exibirErro("senha", "erro-senha", "Senha incorreta");
    }

    return credenciaisValidas;
}


function exibirErro(inputId, erroClass, mensagem) {

    const inputElement = document.getElementById(inputId);

    const erroElement = document.createElement("p");

    erroElement.innerText = mensagem;

    erroElement.style.color = "red";

    erroElement.classList.add(erroClass);

    const labelElement = inputElement.parentElement;

    let erroExistente = labelElement.querySelector("." + erroClass);

    if (!erroExistente) {

        labelElement.appendChild(erroElement);
    }
}


function removerErro(erroClass) {
    const erroElement = document.querySelector("." + erroClass);
    if (erroElement) {
        erroElement.remove();
    }
}

// ---------------------------------------------------------------------------------------
// Registro de Login
function registrarLogin() {
    
    let dataAtual = new Date();
    

    let dia = dataAtual.getDate();
    let mes = dataAtual.getMonth() + 1; 
    let ano = dataAtual.getFullYear();
    let hora = dataAtual.getHours(); 
    let minuto = dataAtual.getMinutes(); 
    let segundo = dataAtual.getSeconds(); 

    const registroLogin = `${dia}/${mes}/${ano} ${hora}:${minuto}:${segundo}`;
    localStorage.setItem('registroLogin', registroLogin)
        
    const usuarioLogado = document.getElementById("usuario").value
    localStorage.setItem('registroLoginUsuario', usuarioLogado)
}




});


