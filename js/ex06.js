function inserirCabecalho(){   
    let cabecalho = document.getElementById("cabecalho")
    let texto = (document.getElementById("inputTexto").value)
    let h1 = document.createElement("h1")
       
    if(texto.length != 0){
        h1.append(texto)
        cabecalho.appendChild(h1)

    }else{
        alert("Não é possivel adicionar conteudo vazio")
    }
}

function inserirParagrafo(){
    let paragrafo = document.getElementById("paragrafo")
    let texto = (document.getElementById("inputTexto").value)
    let p = document.createElement("p")

    if(texto.length != 0){
        p.append(texto)
        paragrafo.appendChild(p)
    }else{
        alert("Não é possivel adicionar conteudo vazio")
    }  
}