var posicaoAleatoria = 1 + Math.floor(Math.random() * 7) //Arredonda um número entre 0 e 7
var parte1 = posicaoAleatoria; //Utiliza o numero arredondado como a primeira parte do navio
var parte2 = parte1 + 1; //Adiciona um numero a parte anterior de modo a que este seja consecutivo
var parte3 = parte2 + 1; //Adiciona um numero a parte anterior de modo a que este seja consecutivo
var parte4 = parte3 + 1; //Adiciona um numero a parte anterior de modo a que este seja consecutivo

var jogada;
var atingidas = 0;
var totalJogadas = 0;

var foiAfundado = false;

while (foiAfundado == false) {
    jogada = prompt("Podes jogar - Escolhe um numero entre 1 e 10:");
    if (jogada < 1 || jogada > 10) { //Verifica se a jogada e inválida
        alert("Jogada inválida. Tenta de novo!"); //Informa o jogador que a jogada e inválida
    } else {
        totalJogadas = totalJogadas + 1; //Atualiza o numero da jogada
        if (jogada == parte1 || jogada == parte2 || jogada == parte3 || jogada == parte4) {
            alert("Acertaste em mais uma parte!");
            atingidas = atingidas + 1; //Numero de partes atingidas
            if (atingidas == 4) { //Verifica se todas as partes foram atingidas
                foiAfundado = true;
                alert("Navio totalmente afundado!"); //Se o jogador acertar em todas as partes, sera apresentada a seguinte mensagem "Navio totalmente afundado!"
            }
        } else {
            alert("Falhaste..."); //Se o jogador falhar no numero, sera apresentada a seguinte mensagem "Falhaste..."
        }

    }

}

var estatistica = "Foi preciso um total de " + totalJogadas + " jogadas para afundar o navio, " + "o que quer dizer que a tua pontaria foi de " + (Math.floor(4/totalJogadas * 100) +"%");

alert(estatistica);