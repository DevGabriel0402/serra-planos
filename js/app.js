const tabInicio = document.getElementById(`inicio`)
const tabPlanos = document.getElementById(`planos`)
const tabRede = document.getElementById(`rede`)
const tabSobre = document.getElementById(`sobre`)
const tabContato = document.getElementById(`contato`)




tabInicio.addEventListener('click', () => {
    tabInicio.classList.add(`active`)
    tabPlanos.classList.remove(`active`)
    tabRede.classList.remove(`active`)
    tabSobre.classList.remove(`active`)
    tabContato.classList.remove(`active`)
})

tabPlanos.addEventListener('click', () => {
    tabInicio.classList.remove(`active`)
    tabPlanos.classList.add(`active`)
    tabRede.classList.remove(`active`)
    tabSobre.classList.remove(`active`)
    tabContato.classList.remove(`active`)
})

tabRede.addEventListener('click', () => {
    tabInicio.classList.remove(`active`)
    tabPlanos.classList.remove(`active`)
    tabRede.classList.add(`active`)
    tabSobre.classList.remove(`active`)
    tabContato.classList.remove(`active`)
})

tabSobre.addEventListener('click', () => {
    tabInicio.classList.remove(`active`)
    tabPlanos.classList.remove(`active`)
    tabRede.classList.remove(`active`)
    tabSobre.classList.add(`active`)
    tabContato.classList.remove(`active`)
})

tabContato.addEventListener('click', () => {
    tabInicio.classList.remove(`active`)
    tabPlanos.classList.remove(`active`)
    tabRede.classList.remove(`active`)
    tabSobre.classList.remove(`active`)
    tabContato.classList.add(`active`)
})

