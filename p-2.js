
let ones = {
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine"
}

let tens = {
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen"
}

let prefixes = {
    2: "twenty",
    3: "thirty",
    4: "fourty",
    5: "fifty",
    6: "sixty",
    7: "seventy",
    8: "eighty",
    9: "ninety"
}

let suffixes = {
    1: "",
    2: "thousand",
    3: "million",
    4: "trillion"
}

function twoDigit(num) {
    let numText = "";

    if (num < 10) {
        return ones[num];
    }

    if (num in tens) {
        numText += tens[num];
    } else {
        numText += prefixes[num.toString().charAt(0)];

        if (num.toString().charAt(1) !== "0") {
            numText += "-" + ones[num.toString().charAt(1)];
        }
    }

    return numText;
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
        numText+= twoDigit(parseInt(num.toString().substr(1)));
    }

    return numText;
}


console.log(threeDigit(3500));