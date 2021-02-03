let primNum = 4
let segNum = 2

let a = 2
let b = 12
let c = -14

const soma_valores = primNum + segNum
const subtracao_valores = primNum - segNum
const divisao_valores = primNum / segNum
const multiplicacao_valores = primNum * segNum

console.log(`
------------------------------------------------------------
ATIVIDADE
------------------------------------------------------------

De acordo com os valores: ${primNum} e ${segNum}, o cálculo da soma de ${primNum} + ${segNum} resulta em ${soma_valores}

A subtração para este cálculo, determinado como: ${primNum} - ${segNum}, resulta em ${subtracao_valores}

A realização da divisão para este cálculo, dado como: ${primNum} / ${segNum}, resulta em ${divisao_valores}

Para realizar o cálculo de multiplicação, com os valores: ${primNum} * ${segNum}, resulta em ${multiplicacao_valores}`)

console.log(`
------------------------------------------------------------
DESAFIO 1
------------------------------------------------------------

A raiz quadrada de ${primNum} é ` + Math.sqrt(primNum) + `

O expoente de ${primNum} é ` + Math.exp(primNum))

const delta = (b* b) - (4* a * c)
const x1 = (-b + Math.sqrt(delta)) / 2 * a
const x2 = (-b - Math.sqrt(delta)) / 2 * a

console.log(`
------------------------------------------------------------
DESAFIO 2
------------------------------------------------------------

Para um cálculo de bháskara, dado ${a}x² + ${b}x + ${c},
 
o valor de x1 é ${x1}
 o valor de x2 é ${x2}
 `)