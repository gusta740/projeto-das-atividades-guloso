console.log("=== Atividade 9 ===\n");

console.log("1. JSON com os dados de um aviso escolar:");
console.log({
  titulo: "Feira de Ciências",
  data: "15/08/2026",
  local: "Quadra da escola"
});

console.log("\n2. JSON com os dados de uma tarefa:");
console.log({
  titulo: "Trabalho de História",
  materia: "História",
  prazo: "20/08/2026"
});

console.log("\n3. Pedido e resposta de um login:\n");

console.log("Pedido (Request):");
console.log("POST /login HTTP/1.1");
console.log("Host: localhost:3000");
console.log("Content-Type: application/json");
console.log({
  email: "ana@escola.com",
  senha: "123456"
});

console.log("\nResposta (Response):");
console.log("HTTP/1.1 200 OK");
console.log("Content-Type: application/json");
console.log({
  mensagem: "Login realizado com sucesso"
});

console.log("\n4. Por que o servidor usa o código 201?");
console.log(
  "O código 201 indica que um novo registro foi criado com sucesso no servidor."
);

console.log("\n5. Passo a passo do cadastro de um usuário:");
console.log("1. O usuário preenche o formulário com nome, e-mail e perfil.");
console.log("2. O navegador envia uma requisição POST para o servidor.");
console.log("3. O servidor recebe os dados enviados.");
console.log("4. O servidor salva o novo usuário no banco de dados.");
console.log("5. O servidor responde com o código 201 Created.");
console.log("6. O navegador recebe a resposta e informa que o cadastro foi realizado com sucesso.");