window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY
    if (scrollPosition > 0) {
        document.getElementById('header').style.position = 'fixed'
        document.getElementById('header').style.zIndex = '999'
        document.getElementById('header').style.top = '0'
        document.getElementById('header').style.boxShadow = 'rgba(33, 35, 38, 0.1) 0px 10px 10px -10px'
    } else {
        document.getElementById('header').style.position = 'relative'
        document.getElementById('header').style.boxShadow = 'none'


    }
})