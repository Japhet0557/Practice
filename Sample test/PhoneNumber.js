/** Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a 
 phone number.

Example
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
*/

/**
 let formatPhoneNumber = (str) => {
  //Filter only numbers from the input
  let cleaned = ('' + str).replace(/\D/g, '');
  
  //Check if the input is of correct length
  let match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);

  if (match) {
    return '(' + match[1] + ') ' + match[2] + '-' + match[3]
  };

  return null
};

console.log(formatPhoneNumber(2568413679));
 */


function createPhoneNumber(numbers) {
    let numToString = numbers;

    if (numToString.length > 10) {
        return "must be only ten numbers";
    }

    for (let i = 0; i < numToString.length; i++) {
        if(numToString[i] < 0 || numToString[i] > 10) {
            return "numbers must between 0 and 9";
        }
        if(isNaN(numToString[i])) {
            return "not a number";
        }
    }

    if (typeof(numToString) != "string") {
        numToString = numToString.toString().replace(/,/g,"").match(/^(\d{3})(\d{3})(\d{4})$/);
        
        return '(' + numToString[1] + ') ' + numToString[2] + '-' + numToString[3];
    } 


}

console.log(createPhoneNumber(1112455786));
    
  