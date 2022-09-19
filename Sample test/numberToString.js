/**Convert a non-negative integer to its equivalent representation as words in English. */
function solution(num) {
  
    let ones = {1: "one",2: "two",3: "three",4: "four",5: "five",6: "six",7: "seven",8: "eight",9: "nine"}

    let tens = {10: "ten",11: "eleven",12: "twelve",13: "thirteen",14: "fourteen",15: "fifteen",16: "sixteen",17: "seventeen",18: "eighteen",19: "nineteen"}

    let prefixes = {2: "twenty",3: "thirty",4: "fourty",5: "fifty",6: "sixty",7: "seventy",8: "eighty",9: "ninety"}

    //let suffixes = {1: "",2: "thousand",3: "million",4: "trillion"}

    function twoDigit(num) {
        let numText = "";
        if (num < 10) {
            return `"${ones[num]}"`;
        }
        if (num in tens) {
            numText += tens[num];
        } else {
            numText += prefixes[num.toString().charAt(0)];
            if (num.toString().charAt(1) !== "0") {
                numText += "-" + ones[num.toString().charAt(1)];
            }
        }
        return `"${numText}"`;
    }

    function threeDigit(num) {
        let numText = "";
        if (num == 0) {
            return "";
        }
        if (num < 100) {
            numText += twoDigit(num);
            return numText;
        }
        numText += ones[num.toString().charAt(0)];
        numText += " hundred ";
        if (num.toString().substr(1) !== "00") {
            numText+= twoDigit(parseInt(num.toString().substr(1))).replace(/["]+/g, '');
        }
        return `"${numText}"`;
    }

    function fourDigit(num) {
        let numText = "";
        if (num == 0) {
            return "";
        }
        if (num < 1000) {
            numText += threeDigit(num);
            return numText;
        }
        numText += ones[num.toString().charAt(0)];
        numText += " thousand ";
        if (num.toString().substr(1) !== "000") {
            numText+= threeDigit(parseInt(num.toString().substr(1))).replace(/["]+/g, '');
        }
        return `"${numText}"`;
    }

    function fiveDigit(num) {
        let numText = "";
        if (num == 0) {
            return "";
        }
        if (num < 10000) {
            numText += fourDigit(num);
            return numText;
        }
        if (num.toString().charAt(0) + num.toString().charAt(1) < 20) {
            numText += tens[num.toString().charAt(0) + num.toString().charAt(1)];
            //numText += " thousand ";
            if (num.toString().substr(1) !== "0000") {
                //numText = numText + "-" + fourDigit(parseInt(num.toString().substr(1))).replace(/["]+/g, '');
                //numText + "-" + 
                //return `"${numText}"`;
                let str =  fourDigit(parseInt(num.toString().substr(1))).replace(/["]+/g, '');
                let str1 = str.indexOf(" ");
                let str2 = str.substring(str1+1);
                numText += " " + str2;
                return `"${numText}"`;
            }
        }
        if (num.toString().charAt(0) + num.toString().charAt(1) > 20) {
            numText += prefixes[num.toString().charAt(0)];
            //numText += " thousand ";
            if (num.toString().substr(1) !== "0000") {
            numText = numText + "-" + fourDigit(parseInt(num.toString().substr(1))).replace(/["]+/g, '');
            return `"${numText}"`;
            }
        }  
    }

    function sixDigit(num) {
        let numText = "";
        if (num == 0) {
            return "";
        }
        if (num < 100000) {
            numText += fiveDigit(num);
            return numText;
        }
        numText += ones[num.toString().charAt(0)];
        numText += " hundred ";
        if (num.toString().substr(1) !== "00000") {
            numText +=fiveDigit(parseInt(num.toString().substr(1))).replace(/["]+/g, '');    
        }
        return `"${numText}"`;
    }

    function sevenDigit(num) {
        let numText = "";
        if (num == 0) {
            return "";
        }
        if (num < 1000000) {
            numText += sixDigit(num);
            return numText;
        }
        numText += ones[num.toString().charAt(0)];
        numText += " million ";
        if (num.toString().substr(1) !== "000000") {
            numText +=sixDigit(parseInt(num.toString().substr(1))).replace(/["]+/g, '');   
        }
        return `"${numText}"`;
    }

    let numText = "";
    if (num == 0) {
        return "";
    }
    if (num < 10000000) {
        numText += sevenDigit(num);
        return numText;
    }
    numText += prefixes[num.toString().charAt(0)];
    /**numText += ones[num.toString().charAt(1)];
    numText += " thousand ";*/
    if (num.toString().substr(1) !== "000000") {
        numText = numText + " " + sevenDigit(parseInt(num.toString().substr(1))).replace(/["]+/g, '');
    }
    return `"${numText}"`;
}



console.log(solution(1)); // "one"
console.log(solution(123)); // "one hundred twenty-three"
console.log(solution(12345)); // "twelve thousand three hundred fourty-five"
console.log(solution(123456)); // "one hundred twenty-three thousand four hundred fifty-six"
console.log(solution(1234567)); // "one million two hundred thirty-four thousand five hundred sixty-seven"
console.log(solution(3594)); // "three thousand five hundred ninety-four"