const menuLateral = document.getElementById("menu-lateral");
const btnOpen = document.getElementById("button-open");
const btnClose = document.getElementById("button-close");

btnOpen.addEventListener("click", () => {
    menuLateral.classList.remove("hidden-menu");
    menuLateral.style.animation = "moveIn .5s forwards";
    btnOpen.classList.add("hidden");
    btnClose.classList.remove("hidden");
    btnOpen.style.opacity = 0;

    if (window.innerWidth <= 400) {
        document.getElementById("body").style.overflow = "hidden";
    }
});
btnClose.addEventListener("click", () => {
    menuLateral.style.animation = "moveDown .5s forwards";
    btnClose.classList.add("hidden");
    btnOpen.classList.remove("hidden");
    btnOpen.style.opacity = 1;

    setTimeout(() => {
        menuLateral.classList.add("hidden-menu");
    }, 500);

    if (window.innerWidth <= 400) {
        document.getElementById("body").style.overflow = "auto";
    }
});
