const menuLateral = document.getElementById('menu-lateral');
const btnOpen = document.getElementById('button-open');
const btnClose = document.getElementById('button-close');

btnOpen.addEventListener('click', () => {
    menuLateral.classList.remove('hidden-menu');
    menuLateral.style.animation = 'moveIn .5s forwards';
})
btnClose.addEventListener('click', () => {
    menuLateral.style.animation = 'moveDown .5s forwards';
    setTimeout(() => {
        menuLateral.classList.add('hidden-menu');
    }, 500);
})