function gerarCorAleatoria() {
    const letrasHex = '0123456789ABCDEF';
    let cor = '#';
    for (let i = 0; i < 6; i++) {
      cor += letrasHex[Math.floor(Math.random() * 16)];
    }
    return cor;
  }
  function mudarcor() {
    // Obtém uma cor aleatória
    const novaCor = gerarCorAleatoria();
    // Define a nova cor de fundo
    document.body.style.backgroundColor = novaCor;
  }
  // Adiciona um ouvinte de evento ao botão
  document.getElementById('meuBotao').addEventListener('click', mudarCorDeFundo);

  //colocar uma estrutura de repetição, toda vez que clicar mudar de cor 
