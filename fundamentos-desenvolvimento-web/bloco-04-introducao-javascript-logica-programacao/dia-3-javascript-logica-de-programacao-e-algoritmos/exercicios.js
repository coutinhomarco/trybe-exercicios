const n = 7;
let s = '*'
let b = ' '

/////////////////////////////
// //quadrado

// for (let index = 1; index<= n; index+= 1) {
//     console.log(s.repeat(n))
// }


/////////////////////////////
// //triangulo

// for (let index = 1; index<= n; index+= 1) {
//     console.log(s.repeat(index))
// }


/////////////////////////////
// //triangulo invertido

// for (let index = 1; index<=n; index+=1) {
//     console.log(b.repeat(n-index),s.repeat(index));
// }


/////////////////////////////
//piramide

// for (let index = 1;index<=5;index+=2) {
//     let teste = (n-index)/2
//     if (teste < 1){
//         teste = 0
//     }
//     console.log(b.repeat(teste),s.repeat(index),b.repeat(teste));
// }


/////////////////////////////
// BONUS


// for (let index = 0; index<=n ; index+=2) {
//     teste2 = (n-index)/2
//     if (index>1) {
//         console.log(b.repeat(teste2),'*',b.repeat(index-2),'*',b.repeat(teste2))
//         if(index=n) {
//             console.log(s.repeat(n));

//         }

//     }
//     else{
//         console.log(b.repeat(teste2),'*',b.repeat(teste2));
//     }
// }





for (let index = 1; index <= n; index+=2) {
    let aa = (n-index)/2
    if (index === n ) {
        console.log(b.repeat(aa),s.repeat(n))
    }
    else if (index>=3) {
        console.log(b.repeat(aa),'*',b.repeat(index-2),'*');

    }
    else {
        console.log(b.repeat(aa),s.repeat(1),b.repeat(aa))
    }
}