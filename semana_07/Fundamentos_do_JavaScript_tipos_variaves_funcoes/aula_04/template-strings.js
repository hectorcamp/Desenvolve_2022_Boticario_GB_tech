// Template strings



const nome = "Ju";
const idade = 2021-1981;
const cidadeDeNascimento = "São Paulo";


// Jeito errado e porque usar template string
// const apresentacao = "meu nome é " + nome + ", minha idade é " + idade + " e nasci na cidade de " + cidadeDeNascimento;
const apresentacao = `meu nome é ${nome}, minha idade é ${idade} e nasci na cidade ${cidadeDeNascimento}`;

console.log(apresentacao);
 