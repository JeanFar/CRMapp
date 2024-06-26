function loadPage(page) {
    fetch(`/${page}/${page}.html`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('conteudo-dinamico').innerHTML = data;
            loadCSS(page); // Chama a função para carregar o CSS
            loadJS(page);  // Chama a função para carregar o JavaScript
        })
        .catch(error => {
            document.getElementById('conteudo-dinamico').innerHTML = '<p>Page not found.</p>';
            console.error('Error loading page:', error);
        });
}

function loadCSS(page) {
    // Remove o CSS antigo se existir
    const oldLink = document.getElementById('dynamic-css');
    if (oldLink) {
        oldLink.remove();
    }

    // Cria um novo link para o CSS
    const link = document.createElement('link');
    link.id = 'dynamic-css';
    link.rel = 'stylesheet';
    link.href = `/${page}/${page}.css`;
    link.type = 'text/css';
    document.head.appendChild(link);

    // Verifica se o CSS foi carregado corretamente
    link.onerror = function() {
        console.error(`Error loading CSS for page: ${page}`);
    };
}

function loadJS(page) {
    // Remove o JavaScript antigo se existir
    const oldScript = document.getElementById('dynamic-js');
    if (oldScript) {
        oldScript.remove();
    }

    // Cria um novo script para o JavaScript
    const script = document.createElement('script');
    script.id = 'dynamic-js';
    script.src = `/${page}/${page}.js`;
    script.type = 'text/javascript';
    document.body.appendChild(script);

    // Verifica se o JavaScript foi carregado corretamente
    script.onerror = function() {
        console.error(`Error loading JavaScript for page: ${page}`);
    };
}

function loadLoginPage() {
    loadPage('login');
}

document.addEventListener('DOMContentLoaded', () => {
    loadLoginPage();

    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const page = event.target.getAttribute('data-page');
            loadPage(page);
            history.pushState(null, '', `#${page}`);
        });
    });

    // Load initial page based on URL hash
    const initialPage = location.hash.replace('#', '') || 'login';
    loadPage(initialPage);

    // Handle browser navigation (back/forward buttons)
    window.addEventListener('popstate', () => {
        const page = location.hash.replace('#', '') || 'login';
        loadPage(page);
    });
});
