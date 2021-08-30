const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];;
function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
  function criaDias () {
    let pai = document.getElementById('days')
    for (day of dezDaysList) {
      let filho = document.createElement("li")
      filho.innerText = day
      filho.className = "day"
      if (day === 24 || day === 25 || day === 31) {
        filho.className = "day holiday"
        if (day === 4 || day === 11 || day === 18 || day === 25) {
        filho.className = "day friday"}
      } else if (day === 4 || day === 11 || day === 18 || day === 25) {
        filho.className = "day friday"
        if (day === 24 || day === 25 || day === 31) {
          filho.className = "day holiday"}
      }
      pai.appendChild(filho)
    }
  }
criaDias()

function criaBotao (feriados) {
  let botao = document.createElement("button")
  botao.id = "btn-holiday"
  let pai = document.querySelector(".buttons-container")
  botao.innerHTML = feriados
  pai.appendChild(botao)
}
criaBotao('Feriados')

// function mudaCor() {
//   let feriado = document.getElementsByClassName("holiday")
//   for (let i = 0; i<feriado.length;i+=1) { 
//     let dia = feriado[i]; 
//     if (dia.style.backgroundColor === "") {
//       dia.style.backgroundColor = rgb(255, 0, 0) 
//     } else {
//       dia.style.backgroundColor = ''
//     }
    
// }
// document.querySelector("#btn-holiday").addEventListener("click", mudaCor)
function mudaCor() {
  let feriado = document.getElementsByClassName("holiday");
  let backgroundColor = 'rgb(238,238,238)';
  for (let i = 0; i<feriado.length;i+=1) { 
    let dia = feriado[i];
    dia.style.backgroundColor = backgroundColor;
  }
};
document.querySelector("#btn-holiday").addEventListener("click", mudaCor)