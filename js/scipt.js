function calcularPedido() {
  let nome = document.getElementById("nome").value;
  let sabor = document.getElementById("sabor").value;
  let tamanho = document.getElementById("tamanho").value;
  let quantidade = Number(document.getElementById("quantidade").value);
  let entrega = document.getElementById("entrega").value;

  let mensagem = document.getElementById("mensagem");

  if (nome == "") {
    mensagem.className = "mensagem erro";
    mensagem.innerHTML = "Erro: Digite o seu nome.";
    return;
  }

  if (sabor == "") {
    mensagem.className = "mensagem erro";
    mensagem.innerHTML = "Erro: Escolha um sabor de pizza.";
    return;
  }

  if (tamanho == "") {
    mensagem.className = "mensagem erro";
    mensagem.innerHTML = "Erro: Escolha o tamanho da pizza.";
    return;
  }

  if (quantidade < 1 || quantidade > 20) {
    mensagem.className = "mensagem erro";
    mensagem.innerHTML = "Erro: A quantidade deve ser entre 1 e 20 pizzas.";
    return;
  }

  let preco = 0;
  let fatias = 0;

  if (tamanho == "media") {
    preco = 45;
    fatias = 6;
  }

  if (tamanho == "grande") {
    preco = 60;
    fatias = 8;
  }

  if (tamanho == "familia") {
    preco = 75;
    fatias = 12;
  }

  let total = preco * quantidade;
  let totalFatias = fatias * quantidade;

  if (quantidade >= 3) {
    total = total - (total * 0.10);
  }

  if (entrega == "entregar") {
    total = total + 10;
  }

  mensagem.className = "mensagem sucesso";
  mensagem.innerHTML =
    "<h3>Pedido Calculado!</h3>" +
    "<p>Cliente: " + nome + "</p>" +
    "<p>Sabor: " + sabor + "</p>" +
    "<p>Quantidade: " + quantidade + " pizza(s)</p>" +
    "<p>Total de fatias: " + totalFatias + "</p>" +
    "<p><strong>Valor Total: R$ " + total.toFixed(2) + "</strong></p>";
}