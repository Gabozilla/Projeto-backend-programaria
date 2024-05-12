const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

const mulheres = [
        {
            nome: 'Mitski',
            imagem: 'https://i.guim.co.uk/img/media/a7006c663d1afe6521075d07c31300a34c7fe64c/0_242_5472_3283/master/5472.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=bef8a5ac63739457324e52746576bd77',
            minibio: 'Cantora, compositora e musicista nipo-americana. Mitski lançou por conta seus dois primeiros álbuns, Lush e Retired from Sad, New Career in Business, enquanto ainda estudava no Conservatório de Música da Purchase College. ',
        },

        {
            nome: 'Lana del Rey',
            imagem: 'https://numero.twic.pics/2024-01/lana-del-rey-skims-6.jpg?twic=v1/quality=83/truecolor=true/output=jpeg',
            minibio: 'Cantora, compositora, modelo e poetisa americana',
        },

        {
            nome: 'Melanie Martinez',
            imagem: 'https://pbs.twimg.com/media/F091lveagAAcQS0.jpg',
            minibio: 'Cantora, compositora, diretora e atriz estadunidense. Melanie se tornou conhecida por suas canções com letras polêmicas e por seu estilo e cabelo de duas cores. Suas letras combinam um lado obscuro com seu jeito super meigo',
        }
]

function mostraMulheres(request, response){
    response.json(mulheres)

}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta)


