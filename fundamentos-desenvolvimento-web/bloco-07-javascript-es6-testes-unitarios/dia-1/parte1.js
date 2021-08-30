const testingScope = (escopo) => {
    if (escopo === true) {
      let ifScope = `Não devo ser utilizada fora do meu escopo (if)`;
      ifScope = `${ifScope} +  ótimo, fui utilizada no escopo !`;
      console.log(ifScope);
    } else {
      let elseScope = `Não devo ser utilizada fora meu escopo (else)`;
      console.log(elseScope);
    }
  }

  testingScope(false);

  ///////////////////////////////////////////////

  const oddsAndEvens = [13, 3, 4, 10, 7, 2];

  // Seu código aqui.
  function ordena(vetor) {
      vetor[0] = 2
      vetor[1] = 3
      vetor[2] = 4
      vetor[3] = 7
      vetor[4] = 10
      vetor[5] = 13
      return vetor
  }
  console.log(ordena(oddsAndEvens)); // será necessário alterar essa linha 😉