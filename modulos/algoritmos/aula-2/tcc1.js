/*
Naruto
Sasuke
Sakura
Itachi
Gai
Kakashi
Rock Lee
*/

const naruto = { name: "Naruto", life: 600, dmg: 100 };
const sasuke = { name: "Sasuke", life: 700, dmg: 50 };

fight(naruto, sasuke)

function fight(ninja1, ninja2) {
  //logica da batalha: quem tiver mais life ganha (usa o return pra definir quem ganhou)
  //Se Itachi duelar ele ganha automaticamente

  console.log(`O ${ninja2.name} ganhou`);
}

fullfight(naruto, sasuke)

function fight(ninja1, ninja2) {
    //ganha quem zerar a vida do outro primeiro (usa o return pra definir quem ganhou)
    //Se Itachi duelar ele ganha automaticamente
  
    console.log(`O ${ninja2.name} ganhou`);
  }