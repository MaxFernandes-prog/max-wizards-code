let numCarro = 0;
const listaCarros = [criarCarros(true), criarCarros(false), criarCarros(true)];
const circuito = criarCircuito(3, 4);
//pista = 4, curva = 8
tunarCarro(listaCarros[2], "motor", 500);
tunarCarro(listaCarros[2], "pneu", 200);
const corre = realizarCorrida(3);
//criar função que passa dados do circuito
console.log(corre)

function realizarCorrida(carros) {
  for (let i = 0; i < carros; i++) {
    peca(listaCarros[i], "motor");
    peca(listaCarros[i], "freio");
    peca(listaCarros[i], "pneu");

    if(listaCarros[i].motor > 0 && listaCarros[i].freio > 0 && listaCarros[i].pneu > 0)
    return listaCarros[i]
  }
}

function peca(carro, peca) {
  if (carro.Carro_Num === 1 || carro.Carro_Num === 2 || carro.Carro_Num === 3) {
    if (peca === "motor") carro.motor = carro.motor - circuito;
    if (peca === "freio") carro.freio = carro.freio - circuito * 2;
    if (peca === "pneu") carro.pneu = carro.pneu - circuito * 3;
  }
}

function tunarCarro(carro, peca, qualidade) {
  if (carro.Carro_Num === 1 || carro.Carro_Num === 2 || carro.Carro_Num === 3) {
    if (peca === "motor") {
      if (qualidade >= carro.motor) carro.motor = qualidade;
    } else if (peca === "freio") {
      if (qualidade >= carro.freio) carro.freio = qualidade;
    } else if (peca === "pneu") {
      if (qualidade >= carro.pneu) carro.pneu = qualidade;
    }
  }
}

function criarCircuito(pista, curva) {
  pista *= 4;
  curva *= 8;

  return pista + curva;
}

function criarCarros(carro) {
  numCarro++;

  if (carro === false) return `Carro não existe`;
  else return { Carro_Num: numCarro, motor: 100, freio: 100, pneu: 100 };
}
