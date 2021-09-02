// Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").

const fodase = (numeroEscolhido, callbackFunction) => {
  const numeroAleatorio = Math.ceil(Math.random() * 5)
  const resultado =  callbackFunction(numeroEscolhido, numeroAleatorio)
  console.log(numeroAleatorio);
  return resultado
}
const callback = (chosen, random) => {
  if (chosen === random) {
    return "Parabéns você ganhou"
  } else {
    return "Tente novamente"
  }
}

console.log(fodase(2,callback));