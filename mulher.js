const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

function mostraMulher(request, response){
    response.json({
        nome: 'Mitski',
        imagem: 'https://i.guim.co.uk/img/media/a7006c663d1afe6521075d07c31300a34c7fe64c/0_242_5472_3283/master/5472.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=bef8a5ac63739457324e52746576bd77',
        minibio: 'cantora, compositora e musicista nipo-americana. Mitski lançou por conta seus dois primeiros álbuns, Lush e Retired from Sad, New Career in Business, enquanto ainda estudava no Conservatório de Música da Purchase College. ',
    })
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}
app.use(router.get('/mulher', mostraMulher))
app.listen(porta, mostraPorta)


