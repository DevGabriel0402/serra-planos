// Inicialize o Swiper
var swiper = new Swiper('.swiper-container', {
  loop: true,
  autoplay: {
    delay: 5000,
  },
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },

});

// Swiper JS para os Depoimentos

var swiper = new Swiper(".swiper-depoimentos", {
  effect: 'slide',
  slidesPerView: 3,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    280: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    765: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

document.getElementById('slider-1').addEventListener('click', () => {
  document.getElementById('loading').classList.remove('hidden')

  setTimeout(() => {
    document.getElementById('loading').classList.add('hidden')

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

    window.scroll({
      top: 0,
      behavior: "smooth",
    })
  }, 1500);

})

document.getElementById('slider-2').addEventListener('click', () => {
  document.getElementById('loading').classList.remove('hidden')

  setTimeout(() => {
    document.getElementById('loading').classList.add('hidden')

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

    window.scroll({
      top: 0,
      behavior: "smooth",
    })
  }, 1500);

})