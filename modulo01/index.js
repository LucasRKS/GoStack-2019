const express = require('express');

const app = express();

/*
    ROTAS
*/
app.get('/teste', (req,res) => res.json({message: 'Hello World!' }));

/*
    Porta
*/
app.listen(3333);