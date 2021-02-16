let numCarro = 0;
const listaCarros = [criarCarros(true), criarCarros(false), criarCarros(true)];
const circuito = criarCircuito(3, 4),
  dific = calculoCircuito(circuito);
tunarCarro(listaCarros[2], "motor", 500);
tunarCarro(listaCarros[2], "pneu", 200);

correr(listaCarros, dific);

function correr(carros, circuito) {
  for (let i = 0; i < carros; i++) {
    if (peca(carros[i], circuito)) {
      console.log(`O carro ${carros[i]} passou na corrida
      `);
    } else {
      console.log(`O carro ${carros[i]} não passou na corrida
      `);
    }
  }
}

function peca(carro, circuito) {
  if (carro.Carro_Num === 1 || carro.Carro_Num === 2 || carro.Carro_Num === 3) {
    carro.motor -= circuito.difPista - circuito.difCurva;
    carro.freio -= (circuito.difPista - circuito.difCurva) * 2;
    carro.pneu -= (circuito.difPista - circuito.difCurva) * 3;
  }

  if (carro.motor <= 0 || carro.freio <= 0 || carro.pneu <= 0) {
    return false;
  } else return true;
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
  return {
    pistas: { percurso: pista, dificuldade: 4 },
    curvas: { percurso: curva, dificuldade: 4 },
  };
}

function calculoCircuito(circuito) {
  const dificil = {
    difPista: circuito.pistas.trajeto * circuito.pistas.dificuldade,
    difCurva: circuito.curvas.percurso * circuito.curvas.dificuldade,
  };
  return dificil;
}

function criarCarros(carro) {
  numCarro++;

  if (carro === false) return `Carro não existe`;
  else return { Carro_Num: numCarro, motor: 100, freio: 100, pneu: 100 };
}
