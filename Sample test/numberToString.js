/**Convert a non-negative integer to its equivalent representation as words in English. */
function solution(num) {
  
    let ones = {0: "Zero",1: "One",2: "Two",3: "three",4: "Four",5: "Five",6: "Six",7: "Seven",8: "Eight",9: "Nine"}

    let tens = {10: "Ten",11: "Eleven",12: "Twelve",13: "Thirteen",14: "Fourteen",15: "Fifteen",16: "Sixteen",17: "Seventeen",18: "Eighteen",19: "Nineteen"}

    let prefixes = {2: "Twenty",3: "Thirty",4: "Forty",5: "Fifty",6: "Sixty",7: "Seventy",8: "Eighty",9: "Ninety"}

    //let suffixes = {1: "",2: "thousand",3: "million",4: "trillion"}

    function twoDigit(num) {
        let numText = "";
        if (num < 10) {
            return `${ones[num]}`;
        }
        if (num in tens) {
            numText += tens[num];
        } else {
            numText += prefixes[num.toString().charAt(0)];
            if (num.toString().charAt(1) !== "0") {
                numText += " " + ones[num.toString().charAt(1)];
            }
        }
        return `${numText}`;
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
        numText += " Hundred ";
        if (num.toString().substr(1) !== "00") {
            numText+= twoDigit(parseInt(num.toString().substr(1))).replace(/["]+/g, '');
        }
        return `${numText}`;
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
        numText += " Thousand ";
        if (num.toString().substr(1) !== "000") {
            numText+= threeDigit(parseInt(num.toString().substr(1))).replace(/["]+/g, '');
        }
        return `${numText}`;
    }

    function fiveDigit(num) {
        let numText = "";
        if (num == 0) {
            return ones[num];
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
                return `${numText}`;
            }
        }
        if (num.toString().charAt(0) + num.toString().charAt(1) > 20) {
            numText += prefixes[num.toString().charAt(0)];
            //numText += " thousand ";
            if (num.toString().substr(1) !== "0000") {
            numText = numText + " " + fourDigit(parseInt(num.toString().substr(1))).replace(/["]+/g, '');
            return `${numText}`;
            }
        }  
    }

    function sixDigit(num) {
        let numText = "";
        if (num == 0) {
            return ones[num];
        }
        if (num < 100000) {
            numText += fiveDigit(num);
            return numText;
        }
        numText += ones[num.toString().charAt(0)];
        numText += " Hundred ";
        if (num.toString().substr(1) !== "00000") {
            numText +=fiveDigit(parseInt(num.toString().substr(1))).replace(/["]+/g, '');    
        }
        return `${numText}`;
    }

    function sevenDigit(num) {
        let numText = "";
        if (num == 0) {
            return ones[num];
        }
        if (num < 1000000) {
            numText += sixDigit(num);
            return numText;
        }
        numText += ones[num.toString().charAt(0)];
        numText += " Million ";
        if (num.toString().substr(1) !== "000000") {
            numText +=sixDigit(parseInt(num.toString().substr(1))).replace(/["]+/g, '');   
        }
        return `${numText}`;
    }

    let numText = "";
    if (num == 0) {
        return ones[num];
    }
    if (num < 10000000) {
        numText += sevenDigit(num);
        return numText;
    }
   
    /**numText += ones[num.toString().charAt(1)];
    numText += " thousand ";*/

    if (num.toString().charAt(0) + num.toString().charAt(1) < 20) {
        numText += tens[num.toString().charAt(0) + num.toString().charAt(1)];
        //numText += " thousand ";
        if (num.toString().substr(1) !== "000000") {
            //numText = numText + "-" + fourDigit(parseInt(num.toString().substr(1))).replace(/["]+/g, '');
            //numText + "-" + 
            //return `"${numText}"`;
            let str =  sevenDigit(parseInt(num.toString().substr(1))).replace(/["]+/g, '');
            let str1 = str.indexOf(" ");
            let str2 = str.substring(str1+1);
            numText += " " + str2;
            return `${numText}`;
        }
    }
    if (num.toString().charAt(0) + num.toString().charAt(1) > 20) {
        numText += prefixes[num.toString().charAt(0)];
        //numText += " thousand ";
        if (num.toString().substr(1) !== "000000") {
        numText = numText + " " + sevenDigit(parseInt(num.toString().substr(1))).replace(/["]+/g, '');
        return `${numText}`;
        }
    }  
    //return `"${numText}"`;
}



console.log(solution(1)); // "one"
console.log(solution(123)); // "one hundred twenty-three"
console.log(solution(12345)); // "twelve thousand three hundred fourty-five"
console.log(solution(123456)); // "one hundred twenty-three thousand four hundred fifty-six"
console.log(solution(1234567)); // "one million two hundred thirty-four thousand five hundred sixty-seven"
console.log(solution(19000016)); // "three thousand five hundred ninety-four"
console.log(solution(1000));
console.log(solution(2000000010));
console.log(solution(987650015));
//console.log(solution());


//19000016
//2000000010
//987650015
//1000 "One Thousand";


