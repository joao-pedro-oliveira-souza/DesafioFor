
const cardapio = {
    100: { nome: "Cachorro Quente", preco: 1.20 },
    101: { nome: "Bauru Simples", preco: 1.30 },
    102: { nome: "Bauru com ovo", preco: 1.50 },
    103: { nome: "Hambúrguer", preco: 1.20 },
    104: { nome: "Cheeseburguer", preco: 1.30 },
    105: { nome: "Refrigerante", preco: 1.00 }
  };

  function abrirCardapio() {
    alert(`                                                    \n
           100 - ${cardapio[100].nome} R$${cardapio[100].preco}\n
           101 - ${cardapio[101].nome} R$${cardapio[101].preco}\n
           102 - ${cardapio[102].nome} R$${cardapio[102].preco}\n
           103 - ${cardapio[103].nome} R$${cardapio[103].preco}\n
           104 - ${cardapio[104].nome} R$${cardapio[104].preco}\n
           105 - ${cardapio[105].nome} R$${cardapio[105].preco}\n
    `)
  }


  function fazerPedido() {
    let totalGeral = 0;
  
    while (true) {
      const codigo = parseInt(prompt("Digite o código do item desejado:"));
      const quantidade = parseInt(prompt("Digite a quantidade desejada:"));
    
      if (!cardapio[codigo]) {
        alert("Código inválido!");
        continue;
      }
    
      const preco = cardapio[codigo].preco;
      const totalItem = preco * quantidade;
      totalGeral += totalItem;
    
      alert(`${cardapio[codigo].nome} - Valor: R$ ${totalItem.toFixed([2])}`);
    
      const encerrarPedido = confirm("Deseja encerrar o pedido?");
    
      if (encerrarPedido) {
        break;
      }
    }
    
    alert(`Total do pedido: R$ ${totalGeral.toFixed([2])}`);
  }
