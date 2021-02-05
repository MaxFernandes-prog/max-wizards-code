const nameM = "Max";
let pontosMax = 0;

const nameL = "Lucas";
let pontosLucas = 0;

const nameP = "Pietro";
let pontosPietro = 0;

function pontuacao(score, valor) {
  if (valor > 0) {
    score += valor;
    return score;
  }

  return 0;
}

pontosMax = pontuacao(pontosMax, 20);
pontosLucas = pontuacao(pontosLucas, 10);
pontosPietro = pontuacao(pontosPietro, -30);

console.log(pontosMax, pontosLucas, pontosPietro);
