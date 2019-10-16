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

// ROUTE PARAM  -> user/editar/1 PUT E DELETE (GERALMENTE ID'S)
app.get('/users/:id', (req,res) => {
    const { id } = req.params;

    return res.json({message: `Buscando o usuário com o ID ${id}.`});
});


/*
    Porta
*/
app.listen(3333);