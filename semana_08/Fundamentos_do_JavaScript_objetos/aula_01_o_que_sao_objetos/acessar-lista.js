// nosso desafio agora é acessar chaves, 
// lembrando que o objeto é um conjunto, 
// uma dupla de chaves e valores.


const cliente = {
    //  chave_valor
        nome:"André",
        idade: 36,
        cpf:"125432652266",
        email:"andre@email.com"
    }
//criar um array//0     //1      //2       //3
const chaves = ["nome", "idade", "cpf", "email"]

//usar o array
//console.log(cliente[chaves[0]])
                            
chaves.forEach(info => console.log(cliente[info]))

console.log(cliente["nome"])