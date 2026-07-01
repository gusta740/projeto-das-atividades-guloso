const express = require('express');
const app = express();

const usuarios = [
  "jorge",
  "vine",
  "antony"
];

const tarefas = [
  "Fazer o trabalho de História",
  "Estudar Matemática",
  "Entregar atividade de Ciências"
];

const reservas = [
  "Laboratório de Informática",
  "Quadra Esportiva",
  "Biblioteca"
];

const turmas = [
  "1º Ano A",
  "2º Ano B",
  "3º Ano T"
];

app.get('/usuarios', (req, res) => {
  res.json(usuarios);
});

app.get('/tarefas', (req, res) => {
  res.json(tarefas);
});

app.get('/reservas', (req, res) => {
  res.json(reservas);
});

app.get('/status', (req, res) => {
  res.send('Sistema ativo!');
});

app.get('/turmas', (req, res) => {
  res.json(turmas);
});
app.get('/', (req, res) => {
    res.send(`
      <h1>Sistema Escolar</h1>
      <ul>
        <li><a href="/usuarios">Usuários</a></li>
        <li><a href="/tarefas">Tarefas</a></li>
        <li><a href="/reservas">Reservas</a></li>
        <li><a href="/status">Status</a></li>
        <li><a href="/turmas">Turmas</a></li>
      </ul>
    `);
  });

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});