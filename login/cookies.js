document.addEventListener("DOMContentLoaded", function() {

    iniciarTelaCookies();
    
    let btnAceitarCookies = document.getElementById("aceitar-cookies");
    btnAceitarCookies.addEventListener("click", aceitarCookies);
    
    let preferenciasCookies = document.getElementById("preferences-abre");
    preferenciasCookies.addEventListener("click", mostrarPreferenciasCookies);

    let aceitarTodosCookies = document.getElementById("aceitar-preferencias");
    aceitarTodosCookies.addEventListener("click", fecharPreferenciasCookies);

    let iconeFechar = document.getElementById("fechar");
    iconeFechar.addEventListener("click", fecharPreferenciasCookies);

    let confirmarPreferencias = document.getElementById("confirm-choices");
    confirmarPreferencias.addEventListener("click", fecharPreferenciasCookies);
});

function iniciarTelaCookies() {
    let telaCookies = document.getElementById('telacookies');
    telaCookies.style.display = 'flex';
}

function aceitarCookies() {
    let telaCookies = document.getElementById('telacookies');
    console.log('Cookies Aceitos!')
    localStorage.lgpd = "Aceito"
    telaCookies.style.display = 'none';

}


function mostrarPreferenciasCookies() {
    let telaCookies = document.getElementById('telacookies');
    telaCookies.style.display = 'none';

    let tela2Cookies = document.getElementById('tela2-cookies');
    tela2Cookies.style.display = 'flex';
}

function fecharPreferenciasCookies() {
    let tela2Cookies = document.getElementById('tela2-cookies');
    localStorage.lgpd = "Aceito"
    console.log('Cookies Aceitos!')
    tela2Cookies.style.display = 'none';
}


// Depois configurar cada um dos tipos de cookies a serem aceitos