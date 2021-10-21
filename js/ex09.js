function criarPessoa(nome, idade, altura, peso, sexo){ 
    return { nome: nome,
             idade: idade,
             altura:altura,
             peso:peso,
             sexo:sexo 
            }; 
} 

let pessoa1=criarPessoa("Juju", 20, 1.7, 15, "M")
let pessoa2=criarPessoa("Jojo", 15, 1.2, 10, "F")

function adicionarAtributo(pessoa){     
    if(pessoa.idade >= 18){
         cpf = 46589874587
        pessoa.cpf=cpf
    }   
}


function exibirPessoa(pessoa){       
        for(let dado in pessoa){
            console.log(dado + " - " + pessoa[dado] )
        }
        console.log("")
    }



