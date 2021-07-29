let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
/////////////////////////////////////////////
// //1- Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;

// for (let number of numbers) {
//     console.log(number);
// }


/////////////////////////////////////////////
// //2 - Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

// let sum = 0;
// for (let number of numbers) {
//     sum = sum + number;
// }
// console.log(sum)


/////////////////////////////////////////////
// //3-Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

// let sum = 0;
// for (let number of numbers) {
//     sum += number;
// }
// let media = sum / numbers.length
// console.log(media)


/////////////////////////////////////////////
// //4 Com o mesmo código do exercício anterior,
// // caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". 
// //Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

// let sum = 0;
// for (let number of numbers) {
//     sum += number;
// }
// let media = sum / numbers.length
// console.log(media)

// if (media<20) {
//     console.log("valor menor ou igual a 20")

// }
// else if (media>20) {
//     console.log("valor maior que 20")
// }


/////////////////////////////////////////////
// //5 - Utilizando for , descubra qual o maior valor contido no array e imprima-o

// let biggest = -100000000
// for (let number of numbers) {
//     if (number>biggest) {
//         biggest = number
//     }
// }
// console.log(biggest)


/////////////////////////////////////////////
// //6 - Descubra quantos valores ímpares existem no array e imprima o resultado. 
// //Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

// let count = 0
// for (let number of numbers) {
//     if (number%2 != 0) {
//         count += 1
//     }
// }
// console.log(count)


/////////////////////////////////////////////
//7 - Utilizando for , descubra qual o menor valor contido no array e imprima-o;

// let smallest = 500000
// for (number of numbers) {
//     if (number<smallest) {
//         smallest = number
//     }
// }
// console.log(smallest)


/////////////////////////////////////////////
// 8 - Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;

// let vetor = []
// for (let index = 1; index<=25; index+=1) {
//     vetor.push(index) 
// }
// // console.log(vetor)


/////////////////////////////////////////////
// 9 - Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .

// for (let numero of vetor) {
//     console.log(numero/2)
// }