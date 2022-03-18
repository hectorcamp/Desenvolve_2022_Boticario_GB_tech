const clientes = [
    {
        nome: 'Andre',
        cpf: '12543652266',
        dependentes: [{
            nome: 'Sara Silva',
            parentesco: 'filha',
            dataNasc: '20/03/2011'
        },
         {
            nome: 'Samia Maria',
            parentesco: 'filha',
            dataNasc: '04/01/2014'
        }],  
    },
    {
        nome: 'Juliana',
        cpf: '12551545456',
        dependentes: [{
            nome: 'Sophia',
            parentesco: 'filha',
            dataNasc: '30/08/2020'
        }],
    }     
]

const listaDependentes = [...clientes[0].dependentes,...clientes[1].dependentes]

console.log(listaDependentes)