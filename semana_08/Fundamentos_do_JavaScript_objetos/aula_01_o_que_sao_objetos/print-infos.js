//desafio vamos ter que acessar um objeto com informações de um cliente, 
//e exibir essas informações no console,

const cliente = {
    //  chave_valor
        nome:"André",
        idade: 36,
        cpf:"125432652266",
        email:"andre@email.com"
    }

    //console.log(cliente.nome, cliente.idade)
    console.log(`Meu nome é ${cliente.nome} e tenho ${cliente.idade}`)


    // acessando chave cpf, usando substring para mostrar os 3 primeiros digitos
    console.log(cliente.cpf.substring(0,3))