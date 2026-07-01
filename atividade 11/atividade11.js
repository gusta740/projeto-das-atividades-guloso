const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Bem-vindo ao Sistema Escolar!');
});

app.get('/sobre', (req, res) => {
  res.send('Este projeto foi desenvolvido para auxiliar na gestão escolar.');
});

app.get('/equipe', (req, res) => {
  res.send('Nossa equipe trabalha em conjunto para desenvolver o Sistema Escolar.');
});

app.get('/contato', (req, res) => {
  res.send('Para entrar em contato, procure a secretaria da escola.');
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});