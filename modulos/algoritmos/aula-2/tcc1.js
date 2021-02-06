const naruto = { name: "Naruto", life: 600, dmg: 110 };
const sasuke = { name: "Sasuke", life: 620, dmg: 100 };
const sakura = { name: "Sakura", life: 300, dmg: 50 };
const kakashi = { name: "Kakashi", life: 700, dmg: 210 };
const gai = { name: "Gai", life: 720, dmg: 200 };
const itachi = { name: "Itachi", life: 700, dmg: 150 };

console.log(`
Primeira Luta, o ninja que tiver mais life depois do primeiro golpe vence
`);

fight(naruto, sasuke);

function fight(ninja1, ninja2) {

  if (ninja1.name === ninja2.name) {
    return console.log(`O ninja não pode lutar consigo mesmo
    `);
  } else {

    if (ninja1.name != "Itachi" && ninja2.name != "Itachi") {
      ninja1.life -= ninja2.dmg;
      ninja2.life -= ninja1.dmg;

      if (ninja1.life > ninja2.life) {
        return console.log(`Em um embate entre ${ninja1.name} e ${ninja2.name}, o vencedor é: ${ninja1.name}!
        `);
      } else if (ninja2.life > ninja1.life) {
        return console.log(`Em um embate entre ${ninja1.name} e ${ninja2.name}, o vencedor é: ${ninja2.name}!
        `);
      } else {
        return console.log(`Houve um empate
        `);
      }
    } else {
      return console.log(`Em um embate entre ${ninja1.name} e ${ninja2.name}, o vencedor é: Itachi!
      `);
    }
  }
}

console.log(`
Luta até a morte, o ninja que permanecer vivo ao final da luta, vence
`);

fullfight(itachi, gai);

function fullfight(ninja1, ninja2) {

  if (ninja1.name === ninja2.name) {
    return console.log(`O ninja não pode lutar consigo mesmo
    `);
  } else {
    if (ninja1.name != "Itachi" && ninja2.name != "Itachi") {
      do {
        ninja2.life -= ninja1.dmg;
        ninja1.life -= ninja2.dmg;

        if (ninja1.life > 0 && ninja2.life <= 0) {
          return console.log(`Em um embate entre ${ninja1.name} e ${ninja2.name}, o vencedor é: ${ninja1.name}!
          `);
        } else if (ninja2.life > 0 && ninja1.life <= 0) {
          return console.log(`Em um embate entre ${ninja1.name} e ${ninja2.name}, o vencedor é: ${ninja2.name}!
          `);
        } else if (ninja2.life <= 0 && ninja1.life <= 0) {
          return console.log(`Houve um empate
          `);
        }
      } while (ninja1.life > 0 && ninja2.life > 0);
    } else {
      return console.log(`Em um embate entre ${ninja1.name} e ${ninja2.name}, o vencedor é: Itachi!
      `);
    }
  }
}
