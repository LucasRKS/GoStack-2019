const express = require('express');

const app = express();
app.use(express.json());

/*
    MIDDLEWARES (Fuções que sempre rodam ao requisitar uma rota)
*/
app.use((req,res,next) => {
    console.time('Request');
    console.log(`Método ${req.method} chamado pela URL ${req.url}.`);

    //next -> não bloqueia a requisição
    next();

    console.timeEnd('Request');
});

//Verifica se foi passado o ID
const checkUserExists = (req,res,next) => {
    if(!req.body.name)
        return res.status(400).json({message: 'Username is required.'}); //Bad Request

    return next();
}

//Verifica se existe o usuário no array
const checkUserInArray = (req,res,next) => {
    if(!users[req.params.index])
        return res.status(400).json({message: 'User does not exists.'});
    
    return next();
} 

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
app.get('/users/:index', checkUserInArray, checkUserInArray, (req,res) => {
    const { index } = req.params;

    return res.json({message: `Buscando o usuário ${users[index]}.`});
});

// BODY PARAMS  -> {nome: Lucas}
//Adiciona um usuário
app.post('/users', checkUserExists, (req,res) => {
    const { name } = req.body;

    users.push(name);

    return res.json(users);
});

//Edita um usuário
app.put('/users/:index', checkUserExists, checkUserInArray, (req,res) => {
    const { index } = req.params;
    const { name }  = req.body;
    
    users[index] = name;

    return res.json(users);
});

//Exclui um usuário
app.delete('/users/:index', checkUserInArray, (req,res) => {
    const { index } = req.params;
    
    users.splice(index, 1);
    
    return res.json(users);
});

/*
    Porta da aplicação
*/
app.listen(3333);