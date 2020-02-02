const express = require('express');
const mongoose = require('mongoose');
const requereDir = require('require-dir');
const cors = require('cors');

requereDir('./src/models');

// Init app
const app = express();
// permissão para o envio de dados no formato de JSON
app.use(express.json());
// permissão para acesso remoto / dominios diferentes ao do servidor
app.use(cors());

// rotas
app.use('/api', require('./src/routes'))

// Init DB
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true, useUnifiedTopology: true } , (err)=>{
    if(err != null){
        console.log("Houve com a conexao do banco: ", err);
    }
});

app.listen(3001, ()=>{
    console.log("Server run localhost:3001")
});