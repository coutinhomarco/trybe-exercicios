//Crie uma função que receba um número e retorne seu fatorial.
const factorial = (n) => {
    let fat = 1
    if (n > 0) {
        for (let index = n; index > 0 ; index = index - 1) {
            fat = fat * index
        }
    }
    return fat
}
console.log(factorial(5));

//Crie uma função que receba uma frase e retorne qual a maior palavra.

const longestWord = (string) => {
    let dividido = string.split(' ')
    let maior = 0
    for (palavra of dividido) {
        let count = 0
        for (carac of palavra) {
            count += 1
        }
        maior < count ? (maior = count, am = palavra) : 0
    }
    return console.log(palavra);
}
longestWord("Antônio foi no banheiro e não sabemos o que aconteceu") // retorna 'aconteceu'

