const cliente = {
    //  chave_valor
        nome:"André", // dados tipo string
        idade: 36, // dados tipo numero
        cpf:"125432652266",
        email:"andre@email.com",
        fones:["5591235498", "5521988743124"] //dados tipo array
    }
        // Objeto dentro do outro objeto
    cliente.dependentes = {
        nome:"Sara",
        parentesco:"filha",
        dataNasc:"20/03/2011"
    }

    console.log(cliente)
    // alterando dados do objeto
    cliente.dependentes.nome = "Sara Silva"


    console.log(cliente)