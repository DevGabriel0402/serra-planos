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
    },
];

function createCards(cards) {
    const container = document.getElementById("beneficios-cards");
    container.innerHTML = "";

    cards.forEach((data) => {
        const cardHTML = `
            <div class="card">
                    <img width="100%" height="auto" src="${data.imgSrc}" alt="imagem do card"/>
                    <p class="card-title">${data.title}</p>
            </div>
        `;
        container.innerHTML += cardHTML;
    });
}

createCards(cardData);

const cardRedeData = [
    {
        badge: "Hospital",
        imgSrc:
            "https://www.hospitallifecenter.com.br/capaimg/1679921871_Capa_HLC-BH.png",
        title: "Lifecenter",
        fit: "cover",
    },
    {
        badge: "Hospital",
        imgSrc:
            "https://busqueplanodesaude.com.br/media/hospitais/fotos/Imagem_do_WhatsApp_de_2024-07-28_%C3%A0s_21.02.15_c550a76c.jpg",
        title: "Hospital Vera Cruz",
        fit: "cover",
    },
    {
        badge: "Pronto Atendimento",
        imgSrc: "https://i.ytimg.com/vi/GqT1uxwia74/maxresdefault.jpg",
        title: "Pronto Atendimento Contorno",
        fit: "cover",
    },
    {
        badge: "Clinica",
        imgSrc:
            "https://centrodeoftalmologiabrasil.com.br/wp-content/uploads/2024/10/IDV_Centro-de-Oftalmologia-Brasil_Logo_Centro_Oftalmologico_Brasil_cor-1.png",
        title: "Centro de Oftalmologia do Brasil",
        fit: "contain",
    },
    {
        badge: "Clinica",
        imgSrc:
            "https://clinicamaissaudeintegrada.com.br/wp-content/uploads/2017/09/logo_maior.png",
        title: "Mais Saúde",
        fit: "contain",
    },
    {
        badge: "Hospital",
        imgSrc:
            "https://diariodocomercio.com.br/wp-content/uploads/2021/12/Hapvida-hospital-Octaviano-Neves.jpg",
        title: "Octaviano Neves",
        fit: "cover",
    },
    {
        badge: "Clinica",
        imgSrc:
            "https://medsempre.com.br/wp-content/uploads/2022/02/whatsapp-image-2022-02-14-at-141840.jpeg",
        title: "Cuidar Bem",
        fit: "cover",
    },
    {
        badge: "Clinica",
        imgSrc:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe0OIBW0FJI5xFe6mlsAjoeWnloFB8r_ggIg&s",
        title: "Med Life",
        fit: "contain",
    },
];

function createRedeCards(cards) {
    const container = document.getElementById("cards-rede");
    container.innerHTML = "";

    cards.forEach((data) => {
        const cardHTML = `
              <div class="card">
                <div class="img-card">
                    <p class="badge">${data.badge}</p>
                    <img width:"100%" height="auto" style="object-fit:${data.fit}" src=${data.imgSrc} alt="imagem da rede">
                </div>
                <h2 class="title-card">${data.title}</h2>
              </div>
        `;
        container.innerHTML += cardHTML;
    });
}

createRedeCards(cardRedeData);
