window.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        document.getElementById("loading").classList.add("hidden");
        document.getElementById("header").classList.remove("hidden");
        document.getElementById("sec-inicio").classList.remove("hidden");
        document.getElementById("footer").classList.remove("hidden");
    }, 1000);

    if (window.innerWidth <= 790) {
        document.getElementById("button-open").classList.remove("hidden");
    }
});

document.getElementById("logo").addEventListener("click", () => {
    window.location.reload();
});

// Barra animada da tab Nossos Planos

const cpTotal = document.getElementById("total");
const cpParcial = document.getElementById("parcial");
const cpBarra = document.getElementById("barra-animada");
const cpTotalItem = document.getElementById("coparticipacao-total");
const cpParcialItem = document.getElementById("coparticipacao-parcial");

cpTotal.addEventListener("click", () => {
    cpTotalItem.classList.remove("hidden");
    cpParcialItem.classList.add("hidden");
    cpTotalItem.style.animation = "opacityIn .5s forwards";
});

cpParcial.addEventListener("click", () => {
    cpTotalItem.classList.add("hidden");
    cpParcialItem.classList.remove("hidden");
    cpParcialItem.style.animation = "opacityIn .5s forwards";
});

if (window.innerWidth > 520) {
    cpTotal.addEventListener("click", () => {
        cpBarra.style.transform = "translateX(-10px)";
        cpBarra.style.width = "222px";
        cpTotal.style.color = "var(--azul)";
        cpParcial.style.color = "var(--branco)";
    });

    cpParcial.addEventListener("click", () => {
        cpBarra.style.transform = "translateX(215px)";
        cpBarra.style.width = "237px";
        cpParcial.style.color = "var(--azul)";
        cpTotal.style.color = "var(--branco)";
    });
} else {
    cpTotal.addEventListener("click", () => {
        cpBarra.style.transform = "translateX(-10px)";
        cpBarra.style.width = "150px";
        cpTotal.style.color = "var(--azul)";
        cpParcial.style.color = "var(--branco)";
    });
    cpParcial.addEventListener("click", () => {
        cpBarra.style.transform = "translateX(140px)";
        cpBarra.style.width = "160px";
        cpParcial.style.color = "var(--azul)";
        cpTotal.style.color = "var(--branco)";
    });
}
