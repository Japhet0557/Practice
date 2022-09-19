/**
•	Build a 5 × 5 Polybius square for the given keyword consisting of distinct letters:
    o	first, fill the square with the letters of the keyword row by row.
    o	then, continue filling the square with all the letters in alphabetical order except for those that 
    are already in the square.
    o	add the final (26th) letter to the cell with coordinates (row, column).
•	Now each letter can be associated with two integers, the indices of a row and a column of the Polybius 
    square containing it. In order to encode a letter, replace it with a concatenation of string 
    representations of these two integers.
•	Make the lengths of the given plaintext message and the keyword equal (if one string is shorter than another 
    one, consider the cyclic string obtained from it and take its prefix of the length equal to the length of the 
    longer string).
•	Finally, encode the letters of both strings obtained on the previous step and add up the values at the same 
    positions. The resulting list of integers is the desired ciphertext.Given some plaintext to encode, a keyword 
    and the coordinates of a Polybius square cell which will contain two letters, return the encoded text.
Example
For plaintext = "codesignal", keyword = "keyword", row = 1, and column = 2, the output should be
solution(plaintext, keyword, row, column) = [36, 27, 35, 26, 66, 55, 54, 54, 35, 54].
 */

function solution(plaintext,keyword,row,column) {
    let polybius = [["k","e","y","w","o"],["r","d","a","b","c"],["f","g","h","i","j"],["l","m","n","p","q"],["s","t","u","v","x"]];

    let newRow = row;
    let newCol = column;
    for (let i = 0; i < polybius.length; i++) {
        for (let j = 0; j < polybius[i].length; j++) {
            if (polybius[i] === newRow && polybius[j] === newCol) {
                return polybius[i][j].push("z");
            }
        }
    }
        
    let plaintextFunction = () => {
        let plaintextVariable = plaintext;
        let keywordVariable = keyword;
        let text = [];
        if (plaintextVariable) {
            for (let i = 0; i < plaintext.length; i++) { 
                text.push(plaintext.charAt(i));  
            }
        }
        if (text.length != keywordVariable.length) {
            for (let i = 0; i < plaintext.length; i++) {
                if (text.length != keywordVariable.length) {
                    text.push(plaintext.charAt(i));
                }
            }
        }
        let arr = [];  
        text.forEach(element => {
            for (let i = 0; i < polybius.length; i++) {
                for (let j = 0; j < polybius[i].length; j++) {
                    if (polybius[i][j] === element) {
                        let a = i + 1;
                        let b = j + 1;
                        let result = a + ""+ b;
                        arr.push(result);
                    } 
                }
            }  
        });

        return arr;
    }

    let keywordFunction = () => {
        let plaintextVariable = plaintext;
        let keywordVariable = keyword;
        let text = [];
        if (keywordVariable) {
            for (let i = 0; i < keyword.length; i++) { 
                text.push(keyword.charAt(i));  
            }
        }
        if (text.length != plaintextVariable.length) {
            for (let i = 0; i < plaintext.length; i++) {
                if (text.length != plaintextVariable.length) {
                    text.push(keyword.charAt(i));
                }
            }
         }
        
        let arr = [];  
        text.forEach(element => { 
            for (let i = 0; i < polybius.length; i++) {
                for (let j = 0; j < polybius[i].length; j++) {
                    if (polybius[i][j] === element) {
                        let a = i + 1;
                        let b = j + 1;
                        let result = a + ""+ b;
                        arr.push(result);
                    } 
                }
            }  
        });

        return arr;
    }
  
    let plaintextToInt = () => {
        let arr = [];
        let result = plaintextFunction();
        for (let i = 0; i < result.length; i++) {
            arr.push(parseInt(result[i]));
        }
        return arr;
    }

    let keywordToInt = () => {
        let arr = [];
        let result = keywordFunction();
        for (let i = 0; i < result.length; i++) {
            arr.push(parseInt(result[i]));
        }
        return arr;
    }

    let plain = plaintextToInt();
    let key = keywordToInt();

    let finalResult = [];

    for (let i = 0; i < plaintext.length; i++) {
        finalResult.push(plain[i]+key[i]);
    }
    
    return finalResult;
} 

console.log(solution("codesignal","keyword",1,2));
 //console.log(solution("keyword"));