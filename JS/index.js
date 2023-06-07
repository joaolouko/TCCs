console.log("ola")
console.log("Hello World")

const emails = ["cleber@gmail.com", "joao@gmail.com"]

const passwords = ["1234", "abcd"]

// variaveis do botão que adiciona tcc

let divCard = document.getElementById("cards")
let nomeTCC = document.getElementById("nome")
let imgTCC = document.getElementById("imagem")

//local para adicionar TCC

function addItem() {
    const div1 = document.createElement("div")
    div1.className = "card bg-dark"
    div1.style = "width: 18rem;"
    divCard.appendChild(div1)

    const img1 = document.createElement("img")
    img1.className = "card-img-top"
    img1.src = imgTCC.value
    img1.alt = "..."
    div1.appendChild(img1)

    const div2 = document.createElement("div")
    div2.className = "card-body text-white"
    div1.appendChild(div2)

    const h5 = document.createElement("h5")
    h5.className = "card-title"
    h5.textContent = nomeTCC.value
    div2.appendChild(h5)

    const p = document.createElement("p")
    p.className = "card-text"
    p.textContent = "Some quick example text to build on the card title and make up the bulk of the card's content."
    div2.appendChild(p)

    const a = document.createElement("a")
    a.className = "btn btn-primary"
    a.textContent = "go somewhere"
    a.href = "https://repositorio.ufsc.br/bitstream/handle/123456789/61448/TCC-Thales-final.pdf?sequence=1&isAllowed=ysl"
    a.target = "_blank"
    div2.appendChild(a)
}


//botão para voltar 
function back() {
    window.location.href = "/index.html"
}

//registro seleção de profissão

const mySelect = document.getElementById("select");

mySelect.addEventListener("change", verificarOpcao);

function verificarOpcao() {
    const opcaoSelecionada = mySelect.value;
    const instituicao = document.getElementById("inst")


    if (opcaoSelecionada === "") {
        instituicao.className = "invisivel"
    } else if (opcaoSelecionada === "1") {
        console.log("Opção 1 selecionada");
        instituicao.className = "visivel"
    } else if (opcaoSelecionada === "2") {
        console.log("Opção 2 selecionada");
        instituicao.className = "visivel"
    } else if (opcaoSelecionada === "3") {
        console.log("Opção 3 selecionada");
        instituicao.className = "invisivel"
    } else {
        console.log("Nenhuma opção selecionada");
    }
}


//verificação se é o mesmo email, senha inserido 

const btnRepetirDados = document.getElementById("ConfirmationBTN")

btnRepetirDados.addEventListener("click", function verificarDados() {
    var NewEmail = document.getElementById("emailCreate")
    var NewPass = document.getElementById("passCreate")
    console.log(NewEmail.value)
    console.log(NewPass.value)
    
    var confirmacao = confirm("Confirme os dados:\nEmail: " + NewEmail.value + "\nSenha: " + NewPass.value);

    if(confirmacao){
        window.location = "/index.html"
    }
})


//Login (temporario)

function emailCheck() {

    if (emails.includes(document.getElementById("email").value)) {
        if (passwords.includes(document.getElementById("password").value)) {
            window.location.href = "/index.html"
            alert("pp")

        } else {
            alert("não tem senha")
        }

    }
    else {
        alert("não tem email")
    }
}






