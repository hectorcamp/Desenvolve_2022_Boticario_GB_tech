const Services = require('../services/Services')
const database = require('../models')

class PessoasServices extends Services {
  constructor(){
    super('Pessoas')
  }

  async pegaRegistrosAtivos(where = {}){
    return database[this.nomeDoModelo].findAll({ where: { ...where} })
  }

  async pegaTodosOsRegistros(where = {}){
    return database[this.nomeDoModelo]
    .scope('todos')
    .findAll({ where: { ...where} })
   }
  }
  //pareiaqui
module.exports = PessoasServices