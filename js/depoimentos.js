// Array de objetos com os dados dos perfis
const Depoimentos = [
  {
    name: "Lucas Freire",
    role: "Autônomo",
    description:
      "Foi a melhor coisa que eu fiz foi contratar esse plano para meus filhos.",
    imageUrl: "./src/imagens/Lucas-Freire.jpg",
  },
  {
    name: "Gizele Gomes",
    role: "Supervisora de Comércio",
    description:
      "Contratar esse plano foi tão bom pra mim que agora, é um processo tão rápido, fora os benefícios.",
    imageUrl: "./src/imagens/Gizele.jpg",
  },
  {
    name: "Gabriel Lucas",
    role: "Programador",
    description:
      "Estava a procura de um plano assim, ágil, prático e com um custo benefício diferenciado.",
    imageUrl: "./src/imagens/Gabriel.jpg",
  },
];

// Função para criar o perfil no formato HTML
function createDepoimentoHTML(depoimento) {
  return `
    <div class="swiper-slide">
        <div class="depoimento-container">
            <img class="depoimento-img" src="${depoimento.imageUrl}" alt="Imagem de ${depoimento.name}">
            <div class="depoimento-text">
                <div class="depoimento-details">
                    <div class="name">${depoimento.name}</div>
                    <div class="role">${depoimento.role}</div>
                </div>
                <div class="description">${depoimento.description}</div>
            </div>
        </div>
    </div>
    `;
}

// Função para renderizar os perfis na página
function renderDepoimentos() {
  const depoimentoList = document.getElementById("lista-de-depoimentos");

  Depoimentos.forEach((depoimento) => {
    const depoimentoHTML = createDepoimentoHTML(depoimento);
    depoimentoList.innerHTML += depoimentoHTML; // Adiciona o HTML do perfil na lista
  });
}

// Chama a função para renderizar os perfis
renderDepoimentos();

// Swiper JS par aos Depoimentos

var swiper = new Swiper(".swiper-depoimentos", {
    effect: 'slide',
    slidesPerView: 3,  
    navigation: {
      nextEl: ".swiper-button-next",  // Corrigido para os seletores padrões
      prevEl: ".swiper-button-prev",  // Corrigido para os seletores padrões
    },
    breakpoints: {
      280: {
        slidesPerView: 1,  // 1 slide por vez para telas pequenas
        spaceBetween: 10,  // Ajusta o espaço entre os slides
      },
      765: {
        slidesPerView: 2,  // 2 slides por vez para telas médias (como tablets)
        spaceBetween: 20,  // Espaço maior entre os slides
      },
      1024: {
        slidesPerView: 3,  // 3 slides por vez para telas grandes
        spaceBetween: 30,  // Mais espaço entre os slides
      },
    },
  });
  
  
