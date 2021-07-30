const n = 5;
let s = '*'
let b = ' '

/////////////////////////////
// //quadrado

for (let index = 1; index<= n; index+= 1) {
    console.log(s.repeat(n))
}


/////////////////////////////
// //triangulo

for (let index = 1; index<= n; index+= 1) {
    console.log(s.repeat(index))
}


/////////////////////////////
// //triangulo invertido

for (let index = 1; index<=n; index+=1) {
    console.log(b.repeat(n-index),s.repeat(index));
}


/////////////////////////////
//piramide

for (let index = 1;index<=5;index+=2) {
    let teste = (n-index)/2
    if (teste < 1){
        teste = 0
    }
    console.log(b.repeat(teste),s.repeat(index),b.repeat(teste));
}