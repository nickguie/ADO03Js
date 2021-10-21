let produtos = [
    {
        "codigo": 1,
        "descricao": "Produto 1",
        "peso": 1.2,
        "valor": 10.9,
        "validade": "11/11/21"
    },
    
    {
        "codigo": 2,
        "descricao": "Produto 2",
        "peso": 5.1,
        "valor": 20.9,
        "validade": "1/12/21"
    }
]

function imprimirProdutos(){
    let produtosObj = JSON.parse(JSON.stringify(produtos))
    

    produtosObj.forEach(function(produto){
        console.log("Codigo: "+produto.codigo)
        console.log("Descricao: "+produto.descricao)
        console.log("Peso: "+produto.peso)
        console.log("Valor: "+produto.valor)
        console.log("Validade: "+produto.validade)
})    
}