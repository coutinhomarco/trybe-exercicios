// Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").

const fodase = (numeroEscolhido, callbackFunction) => {
  const numeroAleatorio = Math.ceil(Math.random() * 5)
  const resultado =  callbackFunction(numeroEscolhido, numeroAleatorio)
  return resultado
}
const callback = (chosen, random) => {
  if (chosen === random) {
    return "Parabéns você ganhou"
  } else {
    return "Tente novamente"
  }
}

// console.log(fodase(2,callback));

//3 - Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.
//Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver resposta ("N.A") não altera-se a contagem.