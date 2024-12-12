
const cardData = [
    {
        imgSrc: "../src/imagens/minas-gerais.svg",
        title: "O melhor plano para cidades de Minas Gerais.",

    },
    {
        imgSrc: "../src/imagens/hospital-lf.svg",
        title: "Rede hospitalar de alta qualidade.",

    },
    {
        imgSrc: "../src/imagens/atendimento.svg",
        title: "Atendimento Personalizado e Humanizado.",

    },
    {
        imgSrc: "../src/imagens/valor.svg",
        title: "Preços acessíveis e condições flexíveis.",

    }
];

// Função para criar os cards usando innerHTML
function createCards(cards) {
    const container = document.getElementById('beneficios-cards');

    // Limpa o container antes de adicionar novos cards
    container.innerHTML = '';

    cards.forEach(data => {
        // Template para o card
        const cardHTML = `
            <div class="card">
                    <img src="${data.imgSrc}"/>
                    <p class="card-title">${data.title}</p>
            </div>
        `;

        // Adiciona o card gerado ao container
        container.innerHTML += cardHTML;
    });
}

// Chama a função para gerar os cards
createCards(cardData);
