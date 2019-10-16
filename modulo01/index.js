const express = require('express');

const app = express();

/*
    ROTAS
    BODY PARAMS  -> {nome: Lucas}
*/

// QUERY PARAMS -> ?pagina=1 (Filtros e informações adicionais)
app.get('/testeQuery', (req,res) => {
    const { nome } = req.query; //?nome=Lucas

    return res.json({message: `Olá Sr. ${nome}!` });
});

const users = ['Diego', 'Lucas', 'Robertinho'];
// ROUTE PARAM  -> user/editar/1 PUT E DELETE (GERALMENTE ID'S)
app.get('/users/:index', (req,res) => {
    const { index } = req.params;

    return res.json({message: `Buscando o usuário ${users[index]}.`});
});



/*
    Porta
*/
app.listen(3333);