console.log("ola")

const emails = ["cleber@gmail.com", "joao@gmail.com"]

const passwords = ["1234", "abcd"]

// variaveis do botão que adiciona tcc

let butao = document.getElementById("buton")
let divCard = document.getElementById("cards")
let nomeTCC = document.getElementById("nome")
let imgTCC = document.getElementById("imagem")

butao.addEventListener("click", addItem)

function addItem(){
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


function back(){
    window.location.href = "/index.html"
}

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



var largura = window.innerWidth


var altura = window.innerHeight


console.log(altura);
console.log(largura);

window.addEventListener("resize", tela)


