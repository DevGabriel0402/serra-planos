// Inicialize o Swiper
var swiper = new Swiper('.swiper-container', {
    loop: true,
    autoplay: {
      delay: 5000, // Intervalo entre as trocas de slides
    },
    slidesPerView: 1, // Número de slides visíveis por vez
    pagination: {
      el: '.swiper-pagination', // Paginacao dos slides
      clickable: true,
    }
  });
  