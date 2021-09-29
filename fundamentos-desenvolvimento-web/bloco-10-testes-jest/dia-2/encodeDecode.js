function encode(str) {
    let string = str.split('');
    let strings = [];
    for (let letter of string) {
      if (letter === 'a') {
        strings.push('1');
      } else if (letter === 'e') {
        strings.push('2');
      } else if (letter === 'i') {
        strings.push('3');
      } else if (letter === 'o') {
        strings.push('4');
      } else if (letter === 'u') {
        strings.push('5');
      } else {
        strings.push(letter);
      }
    }
    return strings.join('');
  }
  
  function decode(str) {
    let string = str.split('');
    let strings = [];
    for (let letter of string) {
      if (letter === '1') {
        strings.push('a');
      } else if (letter === '2') {
        strings.push('e');
      } else if (letter === '3') {
        strings.push('i');
      } else if (letter === '4') {
        strings.push('o');
      } else if (letter === '5') {
        strings.push('u');
      } else {
        strings.push(letter);
      }
    }
    return strings.join('');
  }

 module.exports = {encode, decode} 