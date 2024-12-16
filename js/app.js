// Seções
const secInicio = document.getElementById('sec-inicio');
const secNossosPlanos = document.getElementById('sec-nossos-planos');
const secRede = document.getElementById('sec-rede');
const secSobre = document.getElementById('sec-sobre');
const secContato = document.getElementById('sec-contato');

// Tab da navegação Inicial
const navInicio = document.getElementById(`inicio`);
const navPlanos = document.getElementById(`planos`);
const navRede = document.getElementById(`rede`);
const navSobre = document.getElementById(`sobre`);
const navContato = document.getElementById(`contato`);

// Tab da navegação Menu
const menuInicio = document.getElementById(`menu-inicio`);
const menuPlanos = document.getElementById(`menu-nossos-planos`);
const menuRede = document.getElementById(`menu-rede`);
const menuSobre = document.getElementById(`menu-sobre`);
const menuContato = document.getElementById(`menu-contato`);

// Função para alterar a URL e o conteúdo com base na seção
function mudarAba(section, activeTabId) {
    // Remove a classe 'active' de todas as abas
    [navInicio, navPlanos, navRede, navSobre, navContato].forEach(tab => tab.classList.remove('active'));
    [menuInicio, menuPlanos, menuRede, menuSobre, menuContato].forEach(menu => menu.classList.remove('active'));
    
    // Adiciona a classe 'active' à aba correspondente
    activeTabId.classList.add('active');

    // Esconde todas as seções
    [secInicio, secNossosPlanos, secRede, secSobre, secContato].forEach(sec => sec.classList.add('hidden'));

    // Exibe a seção correspondente
    section.classList.remove('hidden');

    // Atualiza a URL sem recarregar a página
    const newUrl = `/${section.id.replace('sec-', '')}`; // Ex: 'sec-sobre' -> '/sobre'
    window.history.pushState({page: newUrl}, '', newUrl);
}

// Adicionando evento de clique na navegação Desktop
navInicio.addEventListener('click', () => mudarAba(secInicio, navInicio));
navPlanos.addEventListener('click', () => mudarAba(secNossosPlanos, navPlanos));
navRede.addEventListener('click', () => mudarAba(secRede, navRede));
navSobre.addEventListener('click', () => mudarAba(secSobre, navSobre));
navContato.addEventListener('click', () => mudarAba(secContato, navContato));

// Adicionando evento de clique na navegação Mobile (Menu Lateral)
menuInicio.addEventListener('click', () => mudarAba(secInicio, menuInicio));
menuPlanos.addEventListener('click', () => mudarAba(secNossosPlanos, menuPlanos));
menuRede.addEventListener('click', () => mudarAba(secRede, menuRede));
menuSobre.addEventListener('click', () => mudarAba(secSobre, menuSobre));
menuContato.addEventListener('click', () => mudarAba(secContato, menuContato));

// Função para lidar com navegação direta (se o usuário atualizar a página ou acessar diretamente um link)
window.addEventListener('popstate', (event) => {
    const path = window.location.pathname;
    switch (path) {
        case '/':
            mudarAba(secInicio, navInicio);  // Ou o menu
            break;
        case '/sobre':
            mudarAba(secSobre, navSobre);  // Ou o menu
            break;
        case '/contato':
            mudarAba(secContato, navContato);  // Ou o menu
            break;
        case '/rede':
            mudarAba(secRede, navRede);  // Ou o menu
            break;
        case '/nossos-planos':
            mudarAba(secNossosPlanos, navPlanos);  // Ou o menu
            break;
        default:
            mudarAba(secInicio, navInicio);  // Se nenhum caminho for correspondente
            break;
    }
});

// Inicializa a página com a seção correta
const path = window.location.pathname;
switch (path) {
    case '/':
        mudarAba(secInicio, navInicio);
        break;
    case '/sobre':
        mudarAba(secSobre, navSobre);
        break;
    case '/contato':
        mudarAba(secContato, navContato);
        break;
    case '/rede':
        mudarAba(secRede, navRede);
        break;
    case '/nossos-planos':
        mudarAba(secNossosPlanos, navPlanos);
        break;
    default:
        mudarAba(secInicio, navInicio);
        break;
}
