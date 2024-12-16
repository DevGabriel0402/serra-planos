// Seções
const secInicio = document.getElementById('sec-inicio')
const secNossosPlanos = document.getElementById('sec-nossos-planos')
const secRede = document.getElementById('sec-rede')
const secSobre = document.getElementById('sec-sobre')
const secContato = document.getElementById('sec-contato')
// Tab da navegação Inicial
const navInicio = document.getElementById(`inicio`)
const navPlanos = document.getElementById(`planos`)
const navRede = document.getElementById(`rede`)
const navSobre = document.getElementById(`sobre`)
const navContato = document.getElementById(`contato`)

// Tab da navegação Menu
const menuInicio = document.getElementById(`menu-inicio`)
const menuPlanos = document.getElementById(`menu-nossos-planos`)
const menuRede = document.getElementById(`menu-rede`)
const menuSobre = document.getElementById(`menu-sobre`)
const menuContato = document.getElementById(`menu-contato`)



// Adicionando evento de click na navegação Desktop
navInicio.addEventListener('click', () => {
    navInicio.classList.add(`active`)
    navPlanos.classList.remove(`active`)
    navRede.classList.remove(`active`)
    navSobre.classList.remove(`active`)
    navContato.classList.remove(`active`)

    secInicio.classList.remove('hidden')
    secNossosPlanos.classList.add('hidden')
    secRede.classList.add('hidden')
    secSobre.classList.add('hidden')
    secContato.classList.add('hidden')
})

navPlanos.addEventListener('click', () => {
    navInicio.classList.remove(`active`)
    navPlanos.classList.add(`active`)
    navRede.classList.remove(`active`)
    navSobre.classList.remove(`active`)
    navContato.classList.remove(`active`)

    secInicio.classList.add('hidden')
    secNossosPlanos.classList.remove('hidden')
    secRede.classList.add('hidden')
    secSobre.classList.add('hidden')
    secContato.classList.add('hidden')
})

navRede.addEventListener('click', () => {
    navInicio.classList.remove(`active`)
    navPlanos.classList.remove(`active`)
    navRede.classList.add(`active`)
    navSobre.classList.remove(`active`)
    navContato.classList.remove(`active`)

    secInicio.classList.add('hidden')
    secNossosPlanos.classList.add('hidden')
    secRede.classList.remove('hidden')
    secSobre.classList.add('hidden')
    secContato.classList.add('hidden')
})

navSobre.addEventListener('click', () => {
    navInicio.classList.remove(`active`)
    navPlanos.classList.remove(`active`)
    navRede.classList.remove(`active`)
    navSobre.classList.add(`active`)
    navContato.classList.remove(`active`)

    secInicio.classList.add('hidden')
    secNossosPlanos.classList.add('hidden')
    secRede.classList.add('hidden')
    secSobre.classList.remove('hidden')
    secContato.classList.add('hidden')
})

navContato.addEventListener('click', () => {
    navInicio.classList.remove(`active`)
    navPlanos.classList.remove(`active`)
    navRede.classList.remove(`active`)
    navSobre.classList.remove(`active`)
    navContato.classList.add(`active`)

    secInicio.classList.add('hidden')
    secNossosPlanos.classList.add('hidden')
    secRede.classList.add('hidden')
    secSobre.classList.add('hidden')
    secContato.classList.remove('hidden')
})

// Adicionando evento de click na navegação Mobile (Menu Lateral)
menuInicio.addEventListener('click', () => {
    navInicio.classList.add(`active`)
    navPlanos.classList.remove(`active`)
    navRede.classList.remove(`active`)
    navSobre.classList.remove(`active`)
    navContato.classList.remove(`active`)

    secInicio.classList.remove('hidden')
    secNossosPlanos.classList.add('hidden')
    secRede.classList.add('hidden')
    secSobre.classList.add('hidden')
    secContato.classList.add('hidden')
})

menuPlanos.addEventListener('click', () => {
    navInicio.classList.remove(`active`)
    navPlanos.classList.add(`active`)
    navRede.classList.remove(`active`)
    navSobre.classList.remove(`active`)
    navContato.classList.remove(`active`)

    secInicio.classList.add('hidden')
    secNossosPlanos.classList.remove('hidden')
    secRede.classList.add('hidden')
    secSobre.classList.add('hidden')
    secContato.classList.add('hidden')
})

menuRede.addEventListener('click', () => {
    navInicio.classList.remove(`active`)
    navPlanos.classList.remove(`active`)
    navRede.classList.add(`active`)
    navSobre.classList.remove(`active`)
    navContato.classList.remove(`active`)

    secInicio.classList.add('hidden')
    secNossosPlanos.classList.add('hidden')
    secRede.classList.remove('hidden')
    secSobre.classList.add('hidden')
    secContato.classList.add('hidden')
})

menuSobre.addEventListener('click', () => {
    navInicio.classList.remove(`active`)
    navPlanos.classList.remove(`active`)
    navRede.classList.remove(`active`)
    navSobre.classList.add(`active`)
    navContato.classList.remove(`active`)

    secInicio.classList.add('hidden')
    secNossosPlanos.classList.add('hidden')
    secRede.classList.add('hidden')
    secSobre.classList.remove('hidden')
    secContato.classList.add('hidden')
})

menuContato.addEventListener('click', () => {
    navInicio.classList.remove(`active`)
    navPlanos.classList.remove(`active`)
    navRede.classList.remove(`active`)
    navSobre.classList.remove(`active`)
    navContato.classList.add(`active`)

    secInicio.classList.add('hidden')
    secNossosPlanos.classList.add('hidden')
    secRede.classList.add('hidden')
    secSobre.classList.add('hidden')
    secContato.classList.remove('hidden')
})