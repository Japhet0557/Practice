/* FizzBuzzer implementation goes here */

class FizzBuzzer {
  constructor(n) {
    this.max = n;
  }

  fizzBuzz(n) {
    n = this.max;
  let answer = [];
  for (let i = 1; i <= n; i++) {  
    if (i % 15 === 0) {
      answer.push("FizzBuzz");
    } else if (i % 3 === 0) {
      answer.push("Fizz");
    } else if (i % 5 === 0) {
      answer.push("Buzz");
    } else {
     answer.push(i.toString());
   }
   
  }
  return answer;
}
}

//let gh = new FizzBuzzer(5);




/* Tests */

function solution(n) {
  const fb = new FizzBuzzer(n);
  return JSON.stringify({
    max: fb.max,
    fizzBuzz: fb.fizzBuzz(),
    'hasOwnProperty.max': fb.hasOwnProperty('max'),
    'hasOwnProperty.fizzBuzz': fb.hasOwnProperty('fizzBuzz')
  });
}

console.log(solution(30));