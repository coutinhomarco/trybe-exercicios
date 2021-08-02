let vetor = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
function maiorPalavra(vetor) {
    let maior = '' 
    for (nome of vetor) {
        count = 0
        for (caracter of nome) {
            count += 1
            if (count > maior.length) {
                maior = nome
            }                     
        }
    }
    return maior
}
console.log(maiorPalavra(vetor));