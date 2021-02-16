const naruto = { name: "Naruto", life: 600, dmg: 110 };
const sasuke = { name: "Sasuke", life: 620, dmg: 100 };
const sakura = { name: "Sakura", life: 300, dmg: 50 };
const kakashi = { name: "Kakashi", life: 700, dmg: 210 };
const gai = { name: "Gai", life: 720, dmg: 200 };
const itachi = { name: "Itachi", life: 700, dmg: 150 };

console.log(`
Primeira Luta, o ninja que tiver mais life depois do primeiro golpe vence
`);

const luta = fight(naruto, sasuke);

console.log(luta);

// Ganha aquele que tiver mais vida depois de um ataque
// O Itachi sempre vence

function fight(ninja1, ninja2) {
  if (nome(ninja1, ninja2)) {
    return `O ninja não pode lutar consigo mesmo`;
  } else {
    if (itachis(ninja1, ninja2)) {
      if (ninja1.life > ninja2.life) {
        return `Em um embate entre ${ninja1.name} e ${ninja2.name}, o vencedor é: ${ninja1.name}!`;
      } else if (ninja2.life > ninja1.life) {
        return `Em um embate entre ${ninja1.name} e ${ninja2.name}, o vencedor é: ${ninja2.name}!`;
      } else {
        return `Houve um empate`;
      }
    } else {
      return `Em um embate entre ${ninja1.name} e ${ninja2.name}, o vencedor é: Itachi!`;
    }
  }
}

function nome(ninja1, ninja2) {
  if (ninja1.name === ninja2.name)
    return true;
  else
    return false;
}

function itachis(ninja1,ninja2) {
    if(ninja1.name != "Itachi" && ninja2.name != "Itachi")
        return true;
    else   
        return false;
}

function vida(ninja1, ninja2) {
    ninja1.life -= ninja2.dmg;
    ninja2.life -= ninja1.dmg;
    return [ninja1.life, ninja2.life];
}

console.log(`
Luta até a morte, o ninja que permanecer vivo ao final da luta, vence
`);

const lutaMortal = fullfight(itachi, gai);

console.log(lutaMortal);

// Ganha quem sobreviver depois de vários ataques
// O Itachi sempre vence

function fullfight(ninja1, ninja2) {
  if (ninja1.name === ninja2.name) {
    return `O ninja não pode lutar consigo mesmo`;
  } else {
    if (ninja1.name != "Itachi" && ninja2.name != "Itachi") {
      do {
        ninja2.life -= ninja1.dmg;
        ninja1.life -= ninja2.dmg;

        if (ninja1.life > 0 && ninja2.life <= 0) {
          return `Em um embate entre ${ninja1.name} e ${ninja2.name}, o vencedor é: ${ninja1.name}!`;
        } else if (ninja2.life > 0 && ninja1.life <= 0) {
          return `Em um embate entre ${ninja1.name} e ${ninja2.name}, o vencedor é: ${ninja2.name}!`;
        } else if (ninja2.life <= 0 && ninja1.life <= 0) {
          return `Houve um empate`;
        }
      } while (ninja1.life > 0 && ninja2.life > 0);
    } else {
      return `Em um embate entre ${ninja1.name} e ${ninja2.name}, o vencedor é: Itachi!`;
    }
  }
}
