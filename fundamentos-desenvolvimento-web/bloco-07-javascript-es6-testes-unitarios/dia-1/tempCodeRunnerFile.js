
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
longestWord("Antônio foi no banheiro e não sabemos o que aconteceuu") // retorna 'aconteceu'

