const express = require('express');
const cors = require('cors');

const port = 8000;

// const token = 'cachorro';

//iniciando uma aplicação express (que vai facilitar a criação de endpoints)
const app = express();
app.use(express.json()); //definindo o tipo de resposta como json
app.use(cors());

const enderecos = {
    '60730062':{
        'logradouro': 'Rua Cônego de Castro',
        'Bairro': 'Vila Peri',
        'Cidade': 'Fortaleza',
        'Estado': 'Ceará',
    },
    '12345678':{
        'logradouro': 'Av. Santos Dummont',
        'Bairro': 'Aldeota',
        'Cidade': 'Fortaleza',
        'Estado': 'Ceará',
    },
    '60123123':{
        'logradouro': 'Rua 25 de Março',
        'Bairro': 'Alameda dos Anjos',
        'Cidade': 'Caucaia',
        'Estado': 'Ceará',
    },
}


/* ROTAS */
app.get('/produtos', (req, res) => {
    res.send('Lista de produtos');
})

app.get('/buscar-endereco/:cep', cors(), (req, res) => {

    // if (req.headers.authorization !== token) {
    //     res.status(401);
    //     res.send()

    //     return;
    // }
    




    //recuperando as variaveis na URL
    let parametros = req.params;

    //validando se o cep é valido
    if (parametros.cep.length !== 8) {
        res.status(400);

        res.send({
            'erro': 'Cep invalido',
            'detalhes': `O cep precisa ter 8 digitos, foi informado apenas ${parametros.cep.length}`
        }); 

        return; //encerrando a request
    }

    if (!enderecos[parametros.cep]) {
        res.status(404);

        res.send({
            'erro': 'Cep não encontrado'
        });

        return;
    }

    //buscando no array enderecos o cep passado na url
    let conteudo = enderecos[parametros.cep];

    res.send(conteudo)
})

/* FIM DAS ROTAS*/

//Subindo servidor
app.listen(port, () => {
    console.log('API rodando no endereço localhost:' + port);
});