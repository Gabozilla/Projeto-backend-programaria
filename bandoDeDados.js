const mongoose = require('mongoose')
require('dotenv').config()

async function conectaBandoDeDados(){
   try{ 
        console.log('Conexão com o Banco de Dados iniciou!')

         await mongoose.connect(process.env.MONGO_URL)

         console.log('Conexão com o Banco de Dados feita com sucesso!')
   }catch(erro){
        console.log('Erro')
   }

}

module.exports = conectaBandoDeDados

