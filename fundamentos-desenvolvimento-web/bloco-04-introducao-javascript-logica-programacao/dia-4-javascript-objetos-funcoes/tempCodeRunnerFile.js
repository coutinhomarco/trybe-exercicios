let vetor = [2, 3, 2, 5, 8, 2, 3]
contagem = {}
function contadorNumero(vetor) {
    let maior = -2
    for (key in vetor) {
        count = 0
        for (number of vetor){
            if(vetor[key] === number){
                count+=1
                contagem[vetor[key]] = count
            }
        }       
    }
    return contagem
}
contagem = contadorNumero(vetor)
let maior = 0
function escolheMaior(contagem) {
    for (key in contagem) {
        
        if (contagem[key]>maior) {
            maior = key
        }
    }
    return maior
}
console.log(escolheMaior(contagem));