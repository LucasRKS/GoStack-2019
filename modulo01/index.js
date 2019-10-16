const express = require('express');

const app = express();
app.use(express.json());

/*
    ROTAS
*/

// CRUD -> Create, Read, Update, Delete

// QUERY PARAMS -> ?pagina=1 (Filtros e informações adicionais)
//Primeira rota (teste)
app.get('/testeQuery', (req,res) => {
    const { nome } = req.query; //?nome=Lucas

    return res.json({message: `Olá Sr. ${nome}!` });
});

const users = ['Diego', 'Lucas', 'Robertinho', 'Júnior'];

//Lista todos os usuários
app.get('/users', (req,res) => {
    return res.json(users);
});

// ROUTE PARAM  -> user/editar/1 PUT E DELETE (GERALMENTE ID'S)
//Lista usuário pelo ID (ROUTE PARAMS)
app.get('/users/:index', (req,res) => {
    const { index } = req.params;

    return res.json({message: `Buscando o usuário ${users[index]}.`});
});

// BODY PARAMS  -> {nome: Lucas}
//Adiciona um usuário
app.post('/users', (req,res) => {
    const { name } = req.body;

    users.push(name);

    return res.json(users);
});

//Edita um usuário
app.put('/users/:index', (req,res) => {
    const { index } = req.params;
    const { name }  = req.body;
    
    users[index] = name;

    return res.json(users);
});

//Exclui um usuário
app.delete('/users/:index', (req,res) => {
    const { index } = req.params;
    
    users.splice(index, 1);
    
    return res.json(users);
});

/*
    Porta da aplicação
*/
app.listen(3333);