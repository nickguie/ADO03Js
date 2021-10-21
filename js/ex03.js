function iserirSelect(){
    let texto = (document.getElementById("texto").value)
    let select = document.getElementById("select")

    let opcao = new Option(texto)

    select.add(opcao)
}