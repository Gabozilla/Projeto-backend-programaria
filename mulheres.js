const express = require("express") //iniciando o express
const router = express.Router() //configurando a 1 parte da rota
const conectaBandoDeDados = require("./bandoDeDados") // ligando ao arquivo BD
conectaBandoDeDados() //chamando a função que conecta o BD
const cors = require('cors') //pacote cors que permite consumir essa API no front-end

const Mulher = require("./mulherModel")
 

const app = express() //iniciando o app
app.use(express.json())
app.use(cors())

const porta = 3333 //criando a porta


//GET
async function mostraMulheres(request, response){
    try{
        const mulheresVindasDoBancoDeDados = await Mulher.find() //esperando a conexão, quando acontecer quero buscar todas as mulheres presentes na lista cientistas

        response.json(mulheresVindasDoBancoDeDados)
    }catch (erro){
        console.log(erro)
    }
}

//POST
async function criaMulher(request, response) {

    const novaMulher = new Mulher({
        nome: request.body.nome,
        imagem: request.body.imagem,
        minibio: request.body.minibio
    })
    try{
        const mulherCriada = await novaMulher.save()
        response.status(201).json(mulherCriada)
    }catch(erro){
        console.log(erro)
    }
}

//PATCH
async function corrigeMulher(request, response){
    try{
        const mulherEncontrada = await Mulher.findById(request.params.id)

        if(request.body.nome){
            mulherEncontrada.nome = request.body.nome
        }
    
        if(request.body.imagem){
            mulherEncontrada.imagem = request.body.imagem
        }
    
        if(request.body.minibio){
            mulherEncontrada.minibio = request.body.minibio
        }

        const mulherAtualizadaNoBD = await mulherEncontrada.save()
        response.json(mulherAtualizadaNoBD)

    }catch(erro){
        console.log(erro)
    }
}

//DELETE
  async  function deletaMulher(request, response){
    try{
        await Mulher.findByIdAndDelete(request.params.id)
        response.json({message:'Mulher deletada com sucesso!'})
    }catch(erro){
        console.log(erro)
    }
}   

//PORTA
function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}
app.listen(porta, mostraPorta) //servidor ouvindo a porta


app.use(router.get('/mulheres', mostraMulheres)) //config rota GET /mulheres
app.use(router.post('/mulheres', criaMulher)) //config rota POST /mulheres
app.use(router.patch('/mulheres/:id', corrigeMulher)) //config rota PATCH /mulheres/:id
app.use(router.delete('/mulheres/:id', deletaMulher)) //config rota DELETE /mulheres/:id



