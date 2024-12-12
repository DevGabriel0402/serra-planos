window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY
    if (scrollPosition > 20) {
        document.getElementById('header').style.position = 'fixed'
        document.getElementById('header').style.zIndex = '99'
        document.getElementById('header').style.top = '-2px !important'
        document.getElementById('header').style.boxShadow = 'rgba(33, 35, 38, 0.1) 0px 10px 10px -10px'
        document.getElementById('header').style.animation = 'opacityIn .9s forwards'
    } else {
        document.getElementById('header').style.position = 'relative'
        document.getElementById('header').style.boxShadow = 'none'
        document.getElementById('header').style.animation = 'opacityDown .9s forwards'



    }
})