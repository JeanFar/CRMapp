
// -----------------------------------------------------------------------------
// botão enviar 

document.addEventListener('DOMContentLoaded', function() {
    const botaoEnviarCadastro = document.getElementById("confirmar-cadastro");
    
    botaoEnviarCadastro.addEventListener("click", adicionarCadastro);
});


// --------------------------------------------------------------------------
// Ação do botão

function adicionarCadastro() {
    receberValores();

    if (!emailExistente() && !telefoneExistente() && !verificarSenha()) {

        alert("Cadastro Realizado com Sucesso!");

        cadastrarUsuario();

        window.location.href = "../login/login.html";
    
    
    } else if (!emailExistente() || !telefoneExistente()){

        !emailExistente()
        !telefoneExistente()


    }else if (emailExistente()) {

        emailExistente();

    } else if (telefoneExistente()) {

        telefoneExistente();
    }
     else if (verificarSenha()) {

        verificarSenha();
     }
}




// --------------------------------------------------------------------------------------------------
// Função Cadastrar usuário 

let bancoDadosCadastro = [];

function cadastrarUsuario() {
    receberValores(); 

    
    bancoDadosCadastro = JSON.parse(localStorage.getItem('bancoDadosCadastro')) || [];


    bancoDadosCadastro.push({
        "primeiroNome": primeiroNomeValor,
        "ultimoNome": ultimoNomeValor,
        "telefone" : telefoneValor,
        "email": emailValor,
        "senha": senhaCadastroValor
    });

    // Salva o banco de dados atualizado de volta no localStorage
    localStorage.setItem("bancoDadosCadastro", JSON.stringify(bancoDadosCadastro));

    // Confirmação no console
    console.log("Usuário cadastrado com sucesso:", bancoDadosCadastro);
}


// --------------------------------------------------------------------------------------------------------------------------

// Receber Inputs 
let primeiroNome, primeiroNomeValor, ultimoNome, ultimoNomeValor, email, emailValor, telefone, telefoneValor, senhaCadastro, senhaCadastroValor
function receberValores() {

     primeiroNome = document.getElementById("primeiro-nome")
     primeiroNomeValor = primeiroNome.value

     ultimoNome = document.getElementById("ultimo-nome")
     ultimoNomeValor = ultimoNome.value

     email = document.getElementById("email")
     emailValor = email.value

     telefone = document.getElementById("telefone");
     telefoneValor = telefone.value

     senhaCadastro = document.getElementById("senha")
     senhaCadastroValor = senhaCadastro.value

    let confirmarSenha = document.getElementById("confirmar-senha")
    let confirmarSenhaValor = confirmarSenha.value
}

// --------------------------------------------------------------------------------------
// Função verificar senha 

function verificarSenha() {

    const senhaCadastro = document.getElementById("senha")
    const senhaCadastroVerificar = senhaCadastro.value

    const confirmarSenha = document.getElementById("confirmar-senha")
    const confirmarSenhaVerificar = confirmarSenha.value

    const senhaCorreta = senhaCadastroVerificar == confirmarSenhaVerificar;

    const confirmarSenhaLabel = document.getElementById("confirmar-senha").parentElement;

    let erroExistente = confirmarSenhaLabel.querySelector(".erro-senha");

    if (!senhaCorreta && !erroExistente) {

        const erroSenha = document.createElement("p");
        erroSenha.innerText = "Senhas diferentes entre si";
        erroSenha.style.color = "red";
        erroSenha.classList.add("erro-senha");
        confirmarSenhaLabel.appendChild(erroSenha);

    } else if (senhaCorreta && erroExistente) {

        erroExistente.remove();
    }

    return !senhaCorreta;
}



// --------------------------------------------------------------
// EMAIL EXISTENTE FUNÇÃO 


function emailExistente() {
    let bancoDadosCadastro = localStorage.getItem('bancoDadosCadastro');
    let emailValor = document.getElementById("email").value.trim(); 

    if (bancoDadosCadastro) {
        bancoDadosCadastro = JSON.parse(bancoDadosCadastro);

        for (let i = 0; i < bancoDadosCadastro.length; i++) {
            let emailCadastrado = bancoDadosCadastro[i].email;

            if (emailValor === emailCadastrado) {
                console.log("Email já existente no banco");

                const erroEmail = document.createElement("p");
                erroEmail.innerText = "Email já cadastrado!!!";
                erroEmail.style.color = "red";
                erroEmail.classList.add("erro-email");

                const emailLabel = document.getElementById("email").parentElement;
                let erroExistente = emailLabel.querySelector(".erro-email");

                if (!erroExistente) {
                    emailLabel.appendChild(erroEmail);
                }

                return true; 
            }
        }

      
        const emailLabel = document.getElementById("email").parentElement;
        let erroExistente = emailLabel.querySelector(".erro-email");
        if (erroExistente) {
            emailLabel.removeChild(erroExistente);
        }
    }

    return false; 
}


// ------------------------------------------------------------------------------------------------------
// Função Telefone Existente

function telefoneExistente() {
    let bancoDadosCadastro = localStorage.getItem('bancoDadosCadastro');
    let telefoneValor = document.getElementById("telefone").value.trim(); 

    if (bancoDadosCadastro) {
        bancoDadosCadastro = JSON.parse(bancoDadosCadastro);

        for (let i = 0; i < bancoDadosCadastro.length; i++) {
            let telefoneCadastrado = bancoDadosCadastro[i].telefone;

            if (telefoneValor === telefoneCadastrado) {
                console.log("Telefone já existente no banco");

                const erroTelefone = document.createElement("p");
                erroTelefone.innerText = "Telefone já cadastrado!!!";
                erroTelefone.style.color = "red";
                erroTelefone.classList.add("erro-telefone");

                const telefoneLabel = document.getElementById("telefone").parentElement;
                let erroExistente = telefoneLabel.querySelector(".erro-telefone");

                if (!erroExistente) {
                    telefoneLabel.appendChild(erroTelefone);
                }

                return true; 
            }
        }

      
        const telefoneLabel = document.getElementById("telefone").parentElement;
        let erroExistente = telefoneLabel.querySelector(".erro-telefone");
        if (erroExistente) {
            telefoneLabel.removeChild(erroExistente);
        }
    }

        return false; 
    }
