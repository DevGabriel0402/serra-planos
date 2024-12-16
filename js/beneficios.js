
const cardData = [
    {
        imgSrc: "../src/imagens/minas-gerais.webp",
        title: "O melhor plano para cidades de Minas Gerais.",
    },
    {
        imgSrc: "../src/imagens/hospital-lf.webp",
        title: "Rede hospitalar de alta qualidade.",
    },
    {
        imgSrc: "../src/imagens/atendimento.webp",
        title: "Atendimento Personalizado e Humanizado.",
    },
    {
        imgSrc: "../src/imagens/valor.webp",
        title: "Preços acessíveis e condições flexíveis.",
    }
];


function createCards(cards) {
    const container = document.getElementById('beneficios-cards');
    container.innerHTML = '';

    cards.forEach(data => {
        const cardHTML = `
            <div class="card">
                    <img src="${data.imgSrc}"/>
                    <p class="card-title">${data.title}</p>
            </div>
        `;
        container.innerHTML += cardHTML;
    });
}

createCards(cardData);
