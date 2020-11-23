const perguntas = [//Perguntas  
    //01-Saudações
    ["oi","ola","eai"], 
    ["bom dia"], 
    ["boa tarde"],
    ["boa noite"],
    //02-Ajuda
    ["pode me ajudar","preciso de ajuda","poderia ajudar"],
    //03-Vendas de Veiculos
    ["vendas de veiculos","veiculos","vendas de carros","carros"],
    //04-Veiculos Indisponiveis
    ["nissan","hyundai","toyota","bmw","landrover","land rover"],
    //05-Veiculos Disponiveis
    ["volkswagen","volkswagens","volks","vw"],
    //5.1-VolksWagen
    ["golf","gol","jetta","fox","amarok","polo"],
    //5.2-Fiat
    ["fiat"],
    //5.3-Fiat
    ["uno","strada","palio","idea","punto","cronos"],
    //5.4-Chevrolet
    ["chevrolet"],
    //5.5-Escolha Chevrolet
    ["onix","cruze","astra","corsa","camaro","prisma"],
    //5.6-Ford
    ["ford"],
    //5.7-Escolha Ford
    ["ka","fiesta","focus","fusion","edge","mustang"],
    //5.8-Renault 
    ["renault"],
    //5.9-Escolha Renault
    ["clio","megane","sandero","duster","kwid","fluence"],
    //5.10-Honda
    ["honda"],
    //5.11-Escolha Honda
    ["civic","city","fit","hr-v","wr-v","accord","hrv","wrv"],
    //06-Vendas de Pecas
    ["vendas de pecas","peca","pecas"], 
    //07-Pecas Disponiveis
    ["lanterna","farol","retrovisor","escapamento","suspencao"],
    //7.1-Parachoque
    ["parachoque","parachoques"],
    //7.2-Parachoques
    ["traseiro","dianteiro"],
    //08-Pedido
    ["confirmar"],
    //09-Cancelamento
    ["cancelar"],
    //10-Vendas de Acessorios
    ["vendas de acessorios","acessorio","acessorios"],
    //11-Acessorios Disponiveis
    ["tapete","som","multimidia","capas","rack de teto"],
    //12-Agendamentos
    ["agendamentos","revisao","agendamento"],
    //13-Agendamentos
    ["revisao","oficina","funilaria"],
    //14-Consorcios
    ["consorcio","consorcios"],
    //15-Agradecimentos
    ["obrigado","vlw","valeu","valew","muito obrigado"],
    //16-Despedidas
    ["xau","flw","falow","falou","ate mais"],
  ]; 

const respostas = [//Respostas
    //01-Saudações
    ["Oi! Seja bem vindo(a) ao ChatBot da Concessionaria Multicar.",
     "Ola! Seja bem vindo(a) ao ChatBot da Concessionaria Multicar.",
     "Opa! Seja bem vindo(a) ao ChatBot da Concessionaria Multicar."], 
    ["Bom Dia. Em que posso lhe ajudar?"],
    ["Boa Tarde. Como posso ti ajudar?"],
    ["Boa Noite. Em que posso lhe ser útil?"],
    //02-Ajuda
    ["Sim! Posso ajudar com os seguintes assuntos: Vendas de veículos, vendas de peças e acessórios, agendamentos de revisão, oficina e funilaria, e consórcios. Digite qual assunto deseja tratar."],
    //03-Vendas de Veiculos
    ["Certo, Qual marca de carro o senhor(a) tem interesse?",
     "Maravilha, Temos as seguintes marcas disponiveis: Chevrolet, Fiat, Ford, Honda, Renault e Volkswagen."],
    //04-Veiculos Indisponiveis
    ["Desculpe, no momento não temos esta marca disponível.",
     "Desculpa, mas esta marca esta indisponível no momento."],
    //05-VolksWagen
    ["Temos os seguintes modelos dessa marca: Golf, Gol, Jetta, Fox, Amarok, Polo",
     "Somente Golf, Gol, Jetta, Fox, Amarok e Polo, estão disponíveis no momento. Digite sua escolha:"],
    //5.1-Escolha VolksWagen
    ["Ótima escolha! Irei verificar as melhores ofertas desta marca para o senhor(a)",
     "Perfeito! Estou consultando nosso banco de dados para lhe trazer as melhores ofertas."],
    //5.2-Fiat
    ["Temos os seguintes modelos dessa marca: Uno, Strada, Palio, Idea, Punto, Cronos",
     "Somente Uno, Strada, Palio, Idea, Punto e Cronos, estao disponiveis no momento. Digite sua escolha:"],
    //5.3-Escolha Fiat
    ["Ótima escolha! Irei verificar as melhores ofertas desta marca para o senhor(a)",
     "Perfeito! Estou consultando nosso banco de dados para lhe trazer as melhores ofertas."],
    //5.4-Chevrolet
    ["Temos os seguintes carros dessa marca: Onix, Cruze, Astra, Corsa, Camaro, Prisma",
     "Somente Onix, Cruze, Astra, Corsa, Camaro e Prisma, estao disponiveis no momento. Digite sua escolha:"], 
    //5.5-Escolha Chevrolet
    ["Ótima escolha! Irei verificar as melhores ofertas desta marca para o senhor(a)",
     "Perfeito! Estou consultando nosso banco de dados para lhe trazer as melhores ofertas."],
    //5.6-Ford
    ["Temos os seguintes modelos dessa marca: Ka, Fiesta, Focus, Fusion, Edge, Mustang",
     "Somente Ka, Fiesta, Focus, Fusion, Edge e Mustang, estao disponiveis no momento. Digite sua escolha:"],
    //5.7-Escolha Ford
    ["Ótima escolha! Irei verificar as melhores ofertas desta marca para o senhor(a)",
     "Perfeito! Estou consultando nosso banco de dados para lhe trazer as melhores ofertas."],
    //5.8-Renault 
    ["Temos os seguintes modelos dessa marca: Clio, Megane, Sandero, Duster, Kwid, Fluence",
     "Somente Clio, Megane, Sandero, Duster, Kwid e Fluence, estao disponiveis no momento. Digite sua escolha:"],
    //5.9-Escolha Renault
    ["Ótima escolha! Irei verificar as melhores ofertas desta marca para o senhor(a)",
     "Perfeito! Estou consultando nosso banco de dados para lhe trazer as melhores ofertas."],
    //5.10-Honda
    ["Temos os seguintes modelos dessa marca: Civic, City, Fit, HR-V, WR-V, Accord",
     "Somente Civic, City, Fit, HR-V, WR-V e Accord, estao disponiveis no momento. Digite sua escolha:"],
    //5.11-Escolha Honda
    ["Ótima escolha! Irei verificar as melhores ofertas desta marca para o senhor(a)",
     "Perfeito! Estou consultando nosso banco de dados para lhe trazer as melhores ofertas."],
    //06-Vendas de Pecas
    ["Informe qual peça o senhor(a) está procurando:"],
    //07-Pecas Disponiveis
    ["Beleza, Digite 'confirmar' para confirmar o seu pedido. Ou 'cancelar' para cancelar a requisição.",],
    //7.1-Parachoque
    ["Voce deseja comprar o Parachoque Traseiro ou o Parachoque Dianteiro?"],
    //7.2-Pedido Realizado parachoques
    ["Pedido Realizado com Sucesso! O Senhor(a) irá receber um e-mail com todas as informações do pedido."],
    //08-Pedido
    ["Pedido Realizado com Sucesso! O Senhor(a) irá receber um e-mail com todas as informações de sua requisição."],
    //09-Cancelamento
    ["Pedido Cancelado!","Requisição Cancelada!"],
    //10-Vendas de Acessorios
    ["Digite o acessorio que deseja:"],
    //11-Acessorios Disponiveis
    ["Beleza, Digite 'confirmar' para confirmar o seu pedido. Ou 'cancelar' para cancelar a requisição."],
    //12-Agendamentos
    ["Qual tipo de Agendamento, o senhor(a) deseja solicitar? Revisao, Oficina ou Funilaria?"],
    //13-Agendamentos
    ["Verifiquei nossa agenda, e temos o dia '20/12/2020' disponivel. Digite 'confirmar' para confirmar. Ou 'cancelar' para cancelar o agendamento."],
    //14-Consorcios
    ["Desculpe, opção indisponível no momento. Por favor tente mais tarde."],
    //15-Agradecimentos
    ["De nada.","Por nada, e sempre um prazer ajudar.","Por nada","Eu que agradeço! Tenha um ótimo dia."],
    //16-Despedidas
    ["Tchau, Agradecemos a preferência, volte sempre!","Falow meu parceiro!","Até breve!"],
  ];
  
  const alternative = ["Desculpe, nao entendi. Digite Novamente:"];
  const tchau = ["Ate Mais! Foi um prazer conhece-lo(a)"];
  document.addEventListener("DOMContentLoaded", () => {
      const inputField = document.getElementById("input")
      inputField.addEventListener("keydown", function(e) {
          if (e.code === "Enter") {
              let input = inputField.value;
              inputField.value = "";
              output(input);
      }
    });
  });
  
  function output(input) {
    let product;
    let text = input.toLowerCase().replace(/[^\w\s\d]/gi, "");
    if (compare(perguntas, respostas, text)) {
      product = compare(perguntas, respostas, text);
    } else if (text.match(/tchau/gi)) {
      product = tchau[Math.floor(Math.random() * tchau.length)];
    } else {
      product = alternative[Math.floor(Math.random() * alternative.length)];
    }
    addChat(input, product);
  }

  function compare(perguntasArray, respostasArray, string) {
    let item;
    for (let x = 0; x < perguntasArray.length; x++) {
      for (let y = 0; y < respostasArray.length; y++) {
        if (perguntasArray[x][y] == string) {
          items = respostasArray[x];
          item = items[Math.floor(Math.random() * items.length)];
        }
      }
    }
    return item;
  }

  function addChat(input, product) {
    const mainDiv = document.getElementById("main");
    let userDiv = document.createElement("div");
    userDiv.id = "user";
    userDiv.innerHTML = `Voce: <span id="user-response">${input}</span>`;
    mainDiv.appendChild(userDiv);
  
    let botDiv = document.createElement("div");
    botDiv.id = "bot";
    botDiv.innerHTML = `Bot: <span id="bot-response">${product}</span>`;
    mainDiv.appendChild(botDiv);
    speak(product);
  }
