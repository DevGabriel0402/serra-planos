window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 50) {
        document.getElementById("header").style.position = "fixed";
        document.getElementById("header").style.zIndex = "99";
        document.getElementById("header").style.boxShadow =
            "rgba(33, 35, 38, 0.1) 0px 10px 10px -10px";
        document.getElementById("header").style.animation = "upIn .5s ease";
    } else {
        document.getElementById("header").style.position = "relative";
        document.getElementById("header").style.boxShadow = "none";
        document.getElementById("header").style.animation = "upDown .5s ease";
    }
});

// Inserindo ano atual no footer

let hoje = new Date();
let anoAtual = hoje.getFullYear();
const ano = document.getElementById("ano");
ano.innerText = anoAtual;


//Funcao para mandar mensagem no whatsApp

const contatoInput = document.getElementById("inputContato");
const nomeInput = document.getElementById("inputNome");
const emailInput = document.getElementById("inputEmail");
const textArea = document.getElementById("textArea");
const selectInput = document.getElementById("select");
const btnEnviar = document.getElementById("btnContato")

// Evento para mascarar o contato com () e - assim (00) 00000-0000

contatoInput.addEventListener("input", (event) => {
    let valor = event.target.value.replace(/\D/g, "");
    valor = valor.replace(/(\d{2})(\d)/, "($1) $2");
    valor = valor.replace(/(\d{5})(\d)/, "$1-$2");
    event.target.value = valor;
});


btnEnviar.addEventListener('click', () => {
    const numSerraPlanos = "31991660594"
    const mensagem = function () {
        if (textArea.value == "") { return " não informado" } else {
            return mensagem
        }
    }
    const nome = nomeInput.value
    const email = emailInput.value
    const plano = selectInput.value
    const contato = contatoInput.value
    const horaDoDia = function () {
        const date = new Date()

        if (date.getHours() >= 0 && date.getHours() <= 11) {
            return "Bom dia!"
        } else if (date.getHours() >= 12 && date.getHours() <= 17) {
            return "Boa tarde!"
        } else {
            return "Boa noite!"
        }
    }

    const uriMensagem = `
    Olá *Serra Planos de Saúde* ${horaDoDia()} Meu nome é ${nome} e gostaria de saber mais informações sobre o plano ${plano}.

    Segue informações completa:
    Nome: ${nome}
    Email: ${email}
    Contato: ${contato}
    Solicitando Informações do plano: ${plano}
    Observação: ${mensagem()}

    `

    const url = `https://wa.me/55${numSerraPlanos}?text=${encodeURIComponent(uriMensagem)}`

    if (nome == "" || email == "" || contato == "" || plano == "nulo") {
        alert("Verifique se os campos de Nome, Email, WhastApp e Plano estão Corretamente Preenchidos.")
    } else {
        window.open(url, "_blank")
    }



})










