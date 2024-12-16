const menuLateral = document.getElementById('menu-lateral');
const btnOpen = document.getElementById('button-open');
const btnClose = document.getElementById('button-close');

btnOpen.addEventListener('click', () => {
    menuLateral.classList.remove('hidden-menu');
    menuLateral.style.animation = 'moveIn .5s forwards';
    btnClose.classList.remove('hidden')
    btnOpen.classList.add('hidden')

    if(window.innerWidth <= 400){
       document.getElementById('body').style.overflow = 'hidden'
    }

    
})
btnClose.addEventListener('click', () => {
    menuLateral.style.animation = 'moveDown .5s forwards';
    btnClose.classList.add('hidden')
    btnOpen.classList.remove('hidden')

    setTimeout(() => {
        menuLateral.classList.add('hidden-menu');
    }, 500);

    if(window.innerWidth <= 400){
        document.getElementById('body').style.overflow = 'auto'
     }
})
