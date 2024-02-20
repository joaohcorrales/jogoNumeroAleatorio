alert("Boas vindas ao jogo do número secreto!")
let numeroSelecionado
let quantidadeDeTentativas = 1
let numeroMaximo = 100
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1)
console.log(numeroSecreto)

for (let i = 0; numeroSelecionado != numeroSecreto; i++ ) {
    numeroSelecionado = prompt(`Escolha um número entre 1 e ${numeroMaximo}`)
    if (numeroSelecionado == numeroSecreto) {
        break
    } else {
        if (numeroSelecionado > numeroSecreto) {
            alert(`O número inserido ${numeroSelecionado} é MAIOR do que o número secreto, tente de novo!`)
        } else {
            alert(`O número inserido ${numeroSelecionado} é MENOR do que o número secreto, tente de novo!`)
        }
        quantidadeDeTentativas++
    }
}

let palavraTentativa = quantidadeDeTentativas > 1 ? 'tentativas' : 'tentiva'
alert(`Isso aí, você descobriu o número secreto (${numeroSecreto}) com ${quantidadeDeTentativas} ${palavraTentativa}! `)

// if (quantidadeDeTentativas > 1) {
//     alert(`Isso aí, você descobriu o número secreto (${numeroSecreto}) com ${quantidadeDeTentativas} tentativas! `)
// } else {
//     alert(`Isso aí, você descobriu o número secreto (${numeroSecreto}) com ${quantidadeDeTentativas} tentativa! `)

// }