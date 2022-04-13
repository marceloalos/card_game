var carta1 = {
    nome: "Merida",
    imagem:
      "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fs2.glbimg.com%2FdkYGYqWKe4iWplmPTGneG1MKAa4%3D%2Fsmart%2Fe.glbimg.com%2Fog%2Fed%2Ff%2Foriginal%2F2014%2F04%2F02%2Fmerida5.jpg&f=1&nofb=1",
    atributos: {
      Cantar: 4,
      Magia: 2,
      Bravura: 9
    }
  };
  var carta2 = {
    nome: "Bela",
    imagem:
      "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F3.bp.blogspot.com%2F-BuATYNY7g30%2FVBXYtHBMbXI%2FAAAAAAAAG1Q%2FZkxBdpGT6Mw%2Fs1600%2FAvatar-Princesa-Bela.jpg&f=1&nofb=1",
    atributos: {
      Cantar: 8,
      Magia: 3,
      Bravura: 7
    }
  };
  var carta3 = {
    nome: "Rapunzel",
    imagem:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F66%2Fb5%2Fb1%2F66b5b1513d974773535e1575e972fb6f.jpg&f=1&nofb=1",
    atributos: {
      Cantar: 7,
      Magia: 9,
      Bravura: 5
    }
  };
  var carta4 = {
    nome: "Tina",
    imagem:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.elo7.com.br%2Fproduct%2Fzoom%2F2182087%2Fpainel-para-festa-infantil-princesa-e-o-sapo-painel-princesa-e-o-sapo.jpg&f=1&nofb=1",
    atributos: {
      Cantar: 6,
      Magia: 4,
      Bravura: 8
    }
  };
  var carta5 = {
    nome: "Elsa",
    imagem:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fapi.time.com%2Fwp-content%2Fuploads%2F2014%2F12%2Felsa-upon-a-time-disney.jpg&f=1&nofb=1",
    atributos: {
      Cantar: 8,
      Magia: 10,
      Bravura: 4
    }
  };
  var carta6 = {
    nome: "Branca de Neve",
    imagem:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F2.bp.blogspot.com%2F-Irrpdiz1AYk%2FWBKHe_cb_xI%2FAAAAAAAAQt0%2FBTovvmn_tLspScBcuCzvaffnWYedL6bogCLcB%2Fs1600%2FBerry-Snow-White-Disney-Wallpaper.jpg&f=1&nofb=1",
    atributos: {
      Cantar: 10,
      Magia: 5,
      Bravura: 2
    }
  };
  var carta7 = {
    nome: "Ariel",
    imagem:
      "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimages2.fanpop.com%2Fimage%2Fphotos%2F14600000%2FAriel-the-little-mermaid-14629313-1280-1024.jpg&f=1&nofb=1",
    atributos: {
      Cantar: 6,
      Magia: 9,
      Bravura: 6
    }
  };
  var carta8 = {
    nome: "Moana",
    imagem:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.mundiario.com%2Fmedia%2Fmundiario%2Fimages%2F2017%2F03%2F19%2F2017031915474551161.jpg&f=1&nofb=1",
    atributos: {
      Cantar: 7,
      Magia: 5,
      Bravura: 10
    }
  };
  var carta9 = {
    nome: "Cinderela",
    imagem:
      "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimages6.fanpop.com%2Fimage%2Fphotos%2F32900000%2FDisney-Princess-disney-princess-32996367-600-600.jpg&f=1&nofb=1",
    atributos: {
      Cantar: 8,
      Magia: 7,
      Bravura: 4
    }
  };
  var carta10 = {
    nome: "Jasmine",
    imagem:
      "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F2.bp.blogspot.com%2F-UD37j6Jquac%2FUOhYjxkatjI%2FAAAAAAAAQpQ%2FzcFDdTciKjY%2Fs1600%2FDisney%2BPrincess%2BJasmine%2BWallpapers%2B09.jpg&f=1&nofb=1",
    atributos: {
      Cantar: 7,
      Magia: 2,
      Bravura: 8
    }
  };
  
  var cartas = [
    carta1,
    carta2,
    carta3,
    carta4,
    carta5,
    carta6,
    carta7,
    carta8,
    carta9,
    carta10
  ];
  var cartaJogador;
  var cartaMaquina;
  
  function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * 10);
    cartaMaquina = cartas[numeroCartaMaquina];
    console.log(numeroCartaMaquina);
  
    var numeroCartaJogador = parseInt(Math.random() * 10);
  
    while (numeroCartaJogador == numeroCartaMaquina) {
      var numeroCartaJogador = parseInt(Math.random() * 10);
    }
    console.log(numeroCartaJogador);
    cartaJogador = cartas[numeroCartaJogador];
  
    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = false;
  
    exibirCartaJogador();
  }
  
  function exibirCartaJogador() {
    var divCartaJogador = document.getElementById("carta-jogador");
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
    // divCartaJogador.style.backgroundImage = "url (" + cartaJogador.imagem + ")";
  
    var moldura =
      '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute">';
    var tagHTML = "div id='opcoes' class='carta-status'>";
  
    var opcoesTexto = "";
  
    for (var atributo in cartaJogador.atributos) {
      opcoesTexto +=
        "<input type='radio' name='atributo' value='" +
        atributo +
        "'>" +
        atributo +
        " " +
        cartaJogador.atributos[atributo] +
        "<br>";
    }
    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;
  
    divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
  }
  
  function obtemItemSelecionado() {
    var radioSelecionado = document.getElementsByName("atributo");
  
    for (var i = 0; i < radioSelecionado.length; i++) {
      if (radioSelecionado[i].checked == true) {
        return radioSelecionado[i].value;
      }
    }
  }
  
  function jogar() {
    var atributoSelecionado = obtemItemSelecionado();
    var elementoResultado = document.getElementById("resultado");
  
    if (
      cartaJogador.atributos[atributoSelecionado] >
      cartaMaquina.atributos[atributoSelecionado]
    ) {
      divResultado = "<p class='resultado-final'>Venceu</p>";
    } else if (
      cartaJogador.atributos[atributoSelecionado] <
      cartaMaquina.atributos[atributoSelecionado]
    ) {
      divResultado = "<p class='resultado-final'>Perdeu</p>";
    } else {
      divResultado = "<p class='resultado-final'>Empatou</p>";
    }
    elementoResultado.innerHTML = divResultado;
  
    document.getElementById("btnJogar").disabled = true;
  
    exibirCartaMaquina();
  }
  
  function exibirCartaMaquina() {
    var divCartaMaquina = document.getElementById("carta-maquina");
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
    // divCartaJogador.style.backgroundImage = "url (" + cartaJogador.imagem + ")";
  
    var moldura =
      '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute">';
    var tagHTML = "div id='opcoes' class='carta-status'>";
  
    var opcoesTexto = "";
  
    for (var atributo in cartaMaquina.atributos) {
      opcoesTexto +=
        "<p type='text' name='atributo' value='" +
        atributo +
        "'>" +
        atributo +
        " " +
        cartaMaquina.atributos[atributo] +
        "</p>";
    }
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;
  
    divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
  }
  