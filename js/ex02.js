function inserirH3(){
    let div = document.getElementById("div")
    let p = document.getElementById("p")
    let h3 = document.createElement("h3")
    let conteudo = document.createTextNode("H3")
    h3.appendChild(conteudo)
    h3.style.color = "red";

    div.insertBefore(h3, p)
    
}