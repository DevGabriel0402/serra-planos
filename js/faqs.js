// Array de objetos com os dados das Faqs
const Faqs = [
    {
        pergunta: "O que está incluso no meu plano de saúde?",
        resposta:
            "Os planos de saúde variam conforme o tipo de cobertura contratada, mas geralmente incluem consultas médicas, exames, internações e cirurgias. Também podem oferecer cobertura para atendimentos de urgência e emergência, terapias e procedimentos de alta complexidade. É importante verificar a rede de hospitais, clínicas e médicos credenciados para garantir que suas necessidades sejam atendidas. Consulte o contrato para detalhes específicos sobre os serviços cobertos.",
    },
    {
        pergunta: "Como posso escolher o melhor plano de saúde para minha família?",
        resposta:
            "Ao escolher um plano de saúde, leve em consideração a cobertura necessária (consultas, exames, internações), a rede de médicos e hospitais disponíveis, o preço mensal e a carência de serviços específicos. Se você tem condições pré-existentes, verifique as cláusulas do plano sobre o atendimento a essas condições. É aconselhável comparar opções e, se necessário, consultar um corretor de planos de saúde para orientações personalizadas.",
    },
    {
        pergunta: "O que é o período de carência?",
        resposta:
            "O período de carência é o tempo que você precisa aguardar para começar a usar determinados serviços do plano de saúde, como consultas e exames. Ele pode variar de acordo com o tipo de cobertura e o serviço. Por exemplo, atendimentos de urgência e emergência podem ter um período de carência mais curto, enquanto procedimentos eletivos, como cirurgias, podem ter carência de até 180 dias. Consulte o contrato para entender a carência para cada tipo de serviço.",
    },
    {
        pergunta: "Posso usar o plano de saúde em qualquer hospital ou clínica?",
        resposta:
            "Os planos de saúde têm uma rede credenciada de hospitais, clínicas e médicos. Você pode usar os serviços em qualquer estabelecimento que faça parte dessa rede. Caso precise de atendimento fora da rede credenciada, é importante verificar se o seu plano oferece reembolso ou a possibilidade de cobertura em casos de emergência. A rede credenciada pode ser consultada diretamente no site do plano ou pelo atendimento ao cliente.",
    },
    {
        pergunta:
            "O que fazer se o meu plano de saúde não cobrir um tratamento específico?",
        resposta:
            "Se o tratamento que você precisa não está coberto pelo seu plano de saúde, você tem a opção de pagar o procedimento de forma particular ou negociar com a operadora para incluir a cobertura. Também é possível verificar se o tratamento pode ser realizado através de outro tipo de cobertura, como a de urgência/emergência, ou se há alternativas dentro da rede credenciada. Em caso de negativa de cobertura, você pode recorrer à Agência Nacional de Saúde Suplementar (ANS).",
    },
];

// Criacao das Faqs

function createFaqsHTML(faq) {
    return `
       <details>
          <summary>${faq.pergunta}<i class='bx bxs-left-arrow'></i></summary>
          <p>${faq.resposta}</p>
        </details>
      `;
}

// Rederizacao das Faqs

function renderFaqs() {
    const faqList = document.getElementById("faqs-perguntas");

    Faqs.forEach((faq) => {
        const FaqsHTML = createFaqsHTML(faq);
        faqList.innerHTML += FaqsHTML;
    });
}

renderFaqs();

// Codigo do Mapa

const long = "-19.939477";
const lat = "-43.910355";

var map = L.map("map").setView([long, lat], 14);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 15,
}).addTo(map);

var marker = L.marker([long, lat]).addTo(map);

marker.bindPopup("<b>Serra Planos</b><br>Aglomerado Serra.").openPopup();
