/**const alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'

function decode(ciphertext, shift) {
  
  if (typeof shift != 'number' || shift % 1 || shift < 0 || shift > 35) return null
  let abc = alpha.slice(-shift) + alpha.slice(0, -shift)
  var table = []
  for (let j = 0; j < abc.length; j += 6) table.push(abc.slice(j, j + 6).split(''))
  
  var res = [], words = ciphertext.split(' ')
  
  for (let word of words) {
    var w = ''
    for (let cell of word.split('.')) {
      if (cell == '') continue
      if (cell.length != 2 || cell[0] > '6' || cell[1] > '6') return null
      let [i, j] = cell.split('').map(v => +v - 1)
      w += table[i][j]
    }
    res.push(w)
  }
  return res.join(' ')  
}

  console.log(decode(ciphertext, shifted));*/


  /**function removeFirstWord(str) {
    const indexOfSpace = str.indexOf(' ');
  
    return str.substring(indexOfSpace + 1);
  }*/

  function snakeToCamel(str){
    return str.replace(
      /(?!^)_(.)/g,
      (_, char) => char.toUpperCase()
    );
  }
  
  console.log(removeFirstWord('Hello World')); // 👉️ World
  console.log(removeFirstWord('hello nm')); // 👉️ 'hello'
  console.log(removeFirstWord('one two three')); // 👉️ two three