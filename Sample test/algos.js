/** ROMAN NUMERIC
 * function solution(num) {
  if (typeof num !== 'number') 
  return false; 
  
  let digits = String(+num).split(""),
  key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
  "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
  "","I","II","III","IV","V","VI","VII","VIII","IX"],
  toRomanNum = "",
  i = 3;
  while (i--)
  toRomanNum = (key[+digits.pop() + (i * 10)] || "") + toRomanNum;
  return Array(+digits.join("") + 1).join("M") + toRomanNum;
  }
  
  console.log(solution(333));*/




/** EXPONENTIAL CALCULATION 
 * function solution(base, exp) {
    let sum = base;  
    for (let i =2; i <= exp; i++) {
      sum *= base;
    }
    return sum;

}

console.log(solution(2,5));*/



/** function solution(word1, word2) {
  if (typeof (word1) != "string" || typeof ( word2) != "string") {
    return false;
  } 
  if (word1.length !=  word2.length) {
    return false;
  }
  word1 = word1.toLocaleLowerCase();
  word2 =  word2.toLocaleLowerCase();
  let word1Match = {}
  let word2Match = {}
  for (let char of word1) {
      word1Match[char] = (word1Match[char] || 0) + 1
  }
  for (let char of  word2) {
      word2Match[char] = (word2Match[char] || 0) + 1
  }
  for (let char in word1Match) {
      if (word1Match[char] != word2Match[char]) {
          return false
      }
  }
  return true

}


console.log(solution("cook","nace"));*/


function solution(listA, listB) {
  sum = 0;
  
  for (let i = 0; i < listA.length; i++) {
      sum += listA[i] * listB[i];
      
  }
 
  return sum;
}

console.log(solution([-36, 76, -53, 36, -76, -81, -1], [66, 42, 5, -67, -33, -72, -90]));



 






