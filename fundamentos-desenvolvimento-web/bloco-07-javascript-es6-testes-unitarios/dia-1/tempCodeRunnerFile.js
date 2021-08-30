const longestWord = (string) => {
    let dividido = string.split(' ')
    let maior = 0
    for (palavra of dividido) {
        let count = 0
        for (carac of palavra) {
            count += 1
        }
        if (maior < count) {
            maior = count
            am = palavra
        }
    }
    return console.log(palavra);
}
longestWord("Antônio foi no banheiro e não sabemos o que aconteceu") // retorna 'aconteceu'