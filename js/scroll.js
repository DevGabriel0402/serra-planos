window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 50) {
        document.getElementById("header").style.position = "fixed";
        document.getElementById("header").style.zIndex = "99";
        document.getElementById("header").style.boxShadow =
            "rgba(33, 35, 38, 0.1) 0px 10px 10px -10px";
        document.getElementById("header").style.animation = "upIn .5s ease";
    } else {
        document.getElementById("header").style.position = "relative";
        document.getElementById("header").style.boxShadow = "none";
        document.getElementById("header").style.animation = "upDown .5s ease";
    }
});

// Inserindo ano atual no footer

let hoje = new Date();
let anoAtual = hoje.getFullYear();
const ano = document.getElementById("ano");
ano.innerText = anoAtual;
