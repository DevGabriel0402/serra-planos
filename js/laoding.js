window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('loading').classList.add('hidden')
        document.getElementById('header').classList.remove('hidden')
        document.getElementById('sec-inicio').classList.remove('hidden')
        document.getElementById('footer').classList.remove('hidden')
    }, 1000)
})
