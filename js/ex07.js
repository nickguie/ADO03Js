function contarVogais(){
    let texto = (document.getElementById("text").value)
    numeroVogais = texto.match(/[aeiou]/gi)
    
    if(numeroVogais === null){
        resp.innerHTML = 0
    }else{
        resp.innerHTML = numeroVogais.length
    }
}