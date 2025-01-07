// Seções
const secInicio = document.getElementById("sec-inicio");
const secNossosPlanos = document.getElementById("sec-nossos-planos");
const secRede = document.getElementById("sec-rede");
const secSobre = document.getElementById("sec-sobre");
const secContato = document.getElementById("sec-contato");
// Tab da navegação Inicial
const navInicio = document.getElementById(`inicio`);
const navPlanos = document.getElementById(`planos`);
const navRede = document.getElementById(`rede`);
const navSobre = document.getElementById(`sobre`);
const navContato = document.getElementById(`contato`);
const btnNav = document.getElementById(`btn-contratar`)

// Tab da navegação Menu
const menuInicio = document.getElementById(`menu-inicio`);
const menuPlanos = document.getElementById(`menu-nossos-planos`);
const menuRede = document.getElementById(`menu-rede`);
const menuSobre = document.getElementById(`menu-sobre`);
const menuContato = document.getElementById(`menu-contato`);
const btnNavMenu = document.getElementById(`btn-contratar-menu`)


// Adicionando evento de click na navegação Desktop
navInicio.addEventListener("click", () => {
    document.getElementById("loading").classList.remove("hidden");

    setTimeout(() => {
        document.getElementById("loading").classList.add("hidden");

        navInicio.classList.add(`active`);
        navPlanos.classList.remove(`active`);
        navRede.classList.remove(`active`);
        navSobre.classList.remove(`active`);
        navContato.classList.remove(`active`);

        secInicio.classList.remove("hidden");
        secNossosPlanos.classList.add("hidden");
        secRede.classList.add("hidden");
        secSobre.classList.add("hidden");
        secContato.classList.add("hidden");

        window.scroll({
            top: 0,
            behavior: "smooth",
        });
    }, 1750);
});

navPlanos.addEventListener("click", () => {
    document.getElementById("loading").classList.remove("hidden");

    setTimeout(() => {
        document.getElementById("loading").classList.add("hidden");

        navInicio.classList.remove(`active`);
        navPlanos.classList.add(`active`);
        navRede.classList.remove(`active`);
        navSobre.classList.remove(`active`);
        navContato.classList.remove(`active`);

        secInicio.classList.add("hidden");
        secNossosPlanos.classList.remove("hidden");
        secRede.classList.add("hidden");
        secSobre.classList.add("hidden");
        secContato.classList.add("hidden");

        window.scroll({
            top: 0,
            behavior: "smooth",
        });
    }, 1750);
});

navRede.addEventListener("click", () => {
    document.getElementById("loading").classList.remove("hidden");

    setTimeout(() => {
        document.getElementById("loading").classList.add("hidden");

        navInicio.classList.remove(`active`);
        navPlanos.classList.remove(`active`);
        navRede.classList.add(`active`);
        navSobre.classList.remove(`active`);
        navContato.classList.remove(`active`);

        secInicio.classList.add("hidden");
        secNossosPlanos.classList.add("hidden");
        secRede.classList.remove("hidden");
        secSobre.classList.add("hidden");
        secContato.classList.add("hidden");

        window.scroll({
            top: 0,
            behavior: "smooth",
        });
    }, 1500);
});

navSobre.addEventListener("click", () => {
    document.getElementById("loading").classList.remove("hidden");

    setTimeout(() => {
        document.getElementById("loading").classList.add("hidden");

        navInicio.classList.remove(`active`);
        navPlanos.classList.remove(`active`);
        navRede.classList.remove(`active`);
        navSobre.classList.add(`active`);
        navContato.classList.remove(`active`);

        secInicio.classList.add("hidden");
        secNossosPlanos.classList.add("hidden");
        secRede.classList.add("hidden");
        secSobre.classList.remove("hidden");
        secContato.classList.add("hidden");

        window.scroll({
            top: 0,
            behavior: "smooth",
        });
    }, 1500);
});

navContato.addEventListener("click", () => {
    document.getElementById("loading").classList.remove("hidden");

    setTimeout(() => {
        document.getElementById("loading").classList.add("hidden");

        navInicio.classList.remove(`active`);
        navPlanos.classList.remove(`active`);
        navRede.classList.remove(`active`);
        navSobre.classList.remove(`active`);
        navContato.classList.add(`active`);

        secInicio.classList.add("hidden");
        secNossosPlanos.classList.add("hidden");
        secRede.classList.add("hidden");
        secSobre.classList.add("hidden");
        secContato.classList.remove("hidden");

        window.scroll({
            top: 0,
            behavior: "smooth",
        });
    }, 1500);
});

btnNav.addEventListener('click', () => {
    document.getElementById("loading").classList.remove("hidden");

    setTimeout(() => {
        document.getElementById("loading").classList.add("hidden");

        navInicio.classList.remove(`active`);
        navPlanos.classList.remove(`active`);
        navRede.classList.remove(`active`);
        navSobre.classList.remove(`active`);
        navContato.classList.add(`active`);

        secInicio.classList.add("hidden");
        secNossosPlanos.classList.add("hidden");
        secRede.classList.add("hidden");
        secSobre.classList.add("hidden");
        secContato.classList.remove("hidden");

        window.scroll({
            top: 0,
            behavior: "smooth",
        });
    }, 1500);
})



// Adicionando evento de click na navegação Mobile (Menu Lateral)
menuInicio.addEventListener("click", () => {
    document.getElementById("loading").classList.remove("hidden");
    menuLateral.classList.add("hidden-menu");
    btnClose.classList.add("hidden");

    if (window.innerWidth <= 400) {
        document.getElementById("body").style.overflow = "auto";
    }

    setTimeout(() => {
        document.getElementById("loading").classList.add("hidden");

        navInicio.classList.add(`active`);
        navPlanos.classList.remove(`active`);
        navRede.classList.remove(`active`);
        navSobre.classList.remove(`active`);
        navContato.classList.remove(`active`);

        secInicio.classList.remove("hidden");
        secNossosPlanos.classList.add("hidden");
        secRede.classList.add("hidden");
        secSobre.classList.add("hidden");
        secContato.classList.add("hidden");

        btnOpen.classList.remove("hidden");
        btnOpen.style.opacity = 1;

        window.scroll({
            top: 0,
            behavior: "smooth",
        });
    }, 1500);
});

menuPlanos.addEventListener("click", () => {
    document.getElementById("loading").classList.remove("hidden");
    menuLateral.classList.add("hidden-menu");
    btnClose.classList.add("hidden");

    if (window.innerWidth <= 400) {
        document.getElementById("body").style.overflow = "auto";
    }

    setTimeout(() => {
        document.getElementById("loading").classList.add("hidden");

        navInicio.classList.remove(`active`);
        navPlanos.classList.add(`active`);
        navRede.classList.remove(`active`);
        navSobre.classList.remove(`active`);
        navContato.classList.remove(`active`);

        secInicio.classList.add("hidden");
        secNossosPlanos.classList.remove("hidden");
        secRede.classList.add("hidden");
        secSobre.classList.add("hidden");
        secContato.classList.add("hidden");

        btnOpen.classList.remove("hidden");
        btnOpen.style.opacity = 1;

        window.scroll({
            top: 0,
            behavior: "smooth",
        });
    }, 1500);
});

menuRede.addEventListener("click", () => {
    document.getElementById("loading").classList.remove("hidden");
    menuLateral.classList.add("hidden-menu");
    btnClose.classList.add("hidden");

    if (window.innerWidth <= 400) {
        document.getElementById("body").style.overflow = "auto";
    }

    setTimeout(() => {
        document.getElementById("loading").classList.add("hidden");

        navInicio.classList.remove(`active`);
        navPlanos.classList.remove(`active`);
        navRede.classList.add(`active`);
        navSobre.classList.remove(`active`);
        navContato.classList.remove(`active`);

        secInicio.classList.add("hidden");
        secNossosPlanos.classList.add("hidden");
        secRede.classList.remove("hidden");
        secSobre.classList.add("hidden");
        secContato.classList.add("hidden");

        btnOpen.classList.remove("hidden");
        btnOpen.style.opacity = 1;

        window.scroll({
            top: 0,
            behavior: "smooth",
        });
    }, 1500);
});

menuSobre.addEventListener("click", () => {
    document.getElementById("loading").classList.remove("hidden");
    menuLateral.classList.add("hidden-menu");
    btnClose.classList.add("hidden");

    if (window.innerWidth <= 400) {
        document.getElementById("body").style.overflow = "auto";
    }

    setTimeout(() => {
        document.getElementById("loading").classList.add("hidden");

        navInicio.classList.remove(`active`);
        navPlanos.classList.remove(`active`);
        navRede.classList.remove(`active`);
        navSobre.classList.add(`active`);
        navContato.classList.remove(`active`);

        secInicio.classList.add("hidden");
        secNossosPlanos.classList.add("hidden");
        secRede.classList.add("hidden");
        secSobre.classList.remove("hidden");
        secContato.classList.add("hidden");

        btnOpen.classList.remove("hidden");
        btnOpen.style.opacity = 1;

        window.scroll({
            top: 0,
            behavior: "smooth",
        });
    }, 1500);
});

menuContato.addEventListener("click", () => {
    document.getElementById("loading").classList.remove("hidden");
    menuLateral.classList.add("hidden-menu");
    btnClose.classList.add("hidden");

    if (window.innerWidth <= 400) {
        document.getElementById("body").style.overflow = "auto";
    }

    setTimeout(() => {
        document.getElementById("loading").classList.add("hidden");

        navInicio.classList.remove(`active`);
        navPlanos.classList.remove(`active`);
        navRede.classList.remove(`active`);
        navSobre.classList.remove(`active`);
        navContato.classList.add(`active`);

        secInicio.classList.add("hidden");
        secNossosPlanos.classList.add("hidden");
        secRede.classList.add("hidden");
        secSobre.classList.add("hidden");
        secContato.classList.remove("hidden");

        btnOpen.classList.remove("hidden");
        btnOpen.style.opacity = 1;

        window.scroll({
            top: 0,
            behavior: "smooth",
        });
    }, 1500);
});

btnNavMenu.addEventListener('click', () => {
    document.getElementById("loading").classList.remove("hidden");
    menuLateral.classList.add("hidden-menu");
    btnClose.classList.add("hidden");

    if (window.innerWidth <= 400) {
        document.getElementById("body").style.overflow = "auto";
    }

    setTimeout(() => {
        document.getElementById("loading").classList.add("hidden");

        navInicio.classList.remove(`active`);
        navPlanos.classList.remove(`active`);
        navRede.classList.remove(`active`);
        navSobre.classList.remove(`active`);
        navContato.classList.add(`active`);

        secInicio.classList.add("hidden");
        secNossosPlanos.classList.add("hidden");
        secRede.classList.add("hidden");
        secSobre.classList.add("hidden");
        secContato.classList.remove("hidden");

        btnOpen.classList.remove("hidden");
        btnOpen.style.opacity = 1;

        window.scroll({
            top: 0,
            behavior: "smooth",
        });
    }, 1500);
})
