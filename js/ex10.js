let veiculos = {
    descricao: 'Fusion',
    tamanho: 2,
    peso:900,
    velocidade: 250,
    capacidade:5,
    rodas:4,
    
    retornarValores: function(){
        for(let atributos in veiculos){
            veiculos.toString();
        }
        
        let texto = `Descrição: ${this.descricao}| Tamanho: ${this.tamanho}| Peso: ${this.peso}| Velocidade: ${this.velocidade}| Capacidade: ${this.capacidade}| Rodas:${this.rodas}`

        return texto  
    }
}

function adicionarAtributo(){
    veiculos.propulsao =["humana", "vela"]
    veiculos.origem = {"pais":"Brasil", "ano": 1996}

    for(let dado in veiculos){
        console.log(dado + " - " + veiculos[dado])
    }   
}