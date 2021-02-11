const nome = "Max";
const peso = 160;
const altura = 1.8;

const imc = peso / Math.pow(altura, 2);

if (imc >= 30) {
  console.log(`${nome}, você está acima do peso`);
} else {
  console.log(`${nome}, você não está acima do peso`);
}
