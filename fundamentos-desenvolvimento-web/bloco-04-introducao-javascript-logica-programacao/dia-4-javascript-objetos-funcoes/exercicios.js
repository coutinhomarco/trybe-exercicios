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

//5-Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

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

// for (key in contagem) {
//     console.log(key)
// }


//6-Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.

function somatorioN(N){
    let somatorio = 0
    for (let index = 1; index<=N;index+=1) {
        somatorio += index
    }
    return somatorio
}
console.log(somatorioN(5))