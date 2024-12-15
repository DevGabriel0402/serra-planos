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

function renderDepoimentos() {
  const depoimentoList = document.getElementById("lista-de-depoimentos");

  Depoimentos.forEach((depoimento) => {
    const depoimentoHTML = createDepoimentoHTML(depoimento);
    depoimentoList.innerHTML += depoimentoHTML;
  });
}

renderDepoimentos();

