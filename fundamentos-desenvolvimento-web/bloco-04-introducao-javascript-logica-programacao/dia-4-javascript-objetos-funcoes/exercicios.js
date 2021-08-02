/////////////////////////////////////////////////////////////
//Parte I - Objetos e For/In

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

//1-Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. Valor esperado no console: 
//Bem-vinda, Margarida

console.log('Bem-vinda, '+ info.personagem)

//2-Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e,
// em seguida, imprima o objeto no console. Valor esperado no console:

info.recorrente = 'Sim'

console.log(info);

//3-Faça um for/in que mostre todas as chaves do objeto. Valor esperado no console:
//personagem
//origem
//nota
//recorrente

for (let index in info) {
    console.log(index);
}

//4-Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto.

for (let index in info) {
    console.log(info[index]);
}

/////////////////////////////////////////////////////////////

//Parte II - Funções

//1-Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

function verificaPalindrome(str) {
    separaString =  str.split("")
    reverteString = separaString.reverse()
    juntaString = reverteString.join("")
    if (juntaString === str) {
        return true
    }
    else{
        return false
    }
}

console.log(verificaPalindrome('adedanha'))


//2-Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

let vetor = [2, 3, 6, 7, 10, 1];
function indexMaior(vetor) {
    let biggest = -100;
    for (let number of vetor) {
        if (number > biggest) {
            biggest = number
        }
    }
    return vetor.indexOf(biggest)
}
console.log(indexMaior(vetor));

//3-Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

let vetor = [2, 4, 6, 7, 10, 0, -3];
function indexMenor(vetor) {
    let smallest = 10000;
    for (let number of vetor) {
        if (number<smallest) {
            smallest=number
        }
    }
    return vetor.indexOf(smallest)
}
console.log(indexMenor(vetor));


//4-Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

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