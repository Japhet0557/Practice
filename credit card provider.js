/**three input commands must be handled, passed with space delimited arguments, via stdin or a file passed on the command line
 * -- ("account","charges","summary")
 * "Add" will create a new credit card for a given name, card number, and limit
 * --Card numbers should be validated using Luhn 10
 * --New cards start with a $0 balance
 * "Charge" will increase the balance of the card associated with the provided name by the amount specified
 * --Charges that would raise the balance over the limit are ignored as if they were declined
 * --Charges against Luhn 10 invalid cards are ignored
 * "Credit" will decrease the balance of the card associated with the provided name by the amount specified
 * --Credits that would drop the balance below $0 will create a negative balance
 * --Credits against Luhn 10 invalid cards are ignored
 * when all input has been read and processed, a summary should be generated and written to stdout
 * the summary should include the name of each person followed by a colon and balance
 * the names should be displayed alphabetically
 * display "error" instead of the balance if the credit card number does not pass Luhn 10
 */

 /**function solution(operations) {
    operations = [];
    let cardHolder = "";
    let cardNumber = "";
    let cardLimit = "";

    if (cardHolder != "string") {
        return "cardHolder must be string";
    }
    if (isNaN(cardNumber) || cardNumber > 19) {
        return "cardNumber must be integer and must be at most 19";
    }
    operations.push(cardHolder);
    operations.push(cardNumber);
    operations.push(cardLimit);

   //for (let i = 0; i )

   return operations;

}*/

/**function add(cardHolder, cardNumber, limit) {
 
        let num = cardNumber;

        let luhnCheck = num => {
            let arr = (num + '')
            .split('')
            .reverse()
            .map(x => parseInt(x));
            let lastDigit = arr.splice(0, 1)[0];
            let sum = arr.reduce((acc, val, i) => (i % 2 !== 0 ? acc + val : acc + ((val * 2) % 9) || 9), 0);
            sum += lastDigit;
            return sum % 10 === 0;
        };

    let add = [{"status": "add", "name": cardHolder, "number": cardNumber, "limit": limit}];
    

   
    
    
    console.log operations;
    

}*/


let cardHolder;
let cardNumber;
let limit;
let status;

let luhnCheck = cardNumber => {
    let arr = (cardNumber + '')
      .split('')
      .reverse()
      .map(x => parseInt(x));
    let lastDigit = arr.splice(0, 1)[0];
    let sum = arr.reduce((acc, val, i) => (i % 2 !== 0 ? acc + val : acc + ((val * 2) % 9) || 9), 0);
    sum += lastDigit;
    return sum % 10 === 0;
  };

//console.log(g);
//console.log(luhnCheck('5454545454545454'));
console.log(luhnCheck(4111111111111111));

const add = (add,cardHolder, cardNumber, limit, ) => {
    let name = cardHolder;
    let number = cardNumber;
    let cardLimit = limit;
    let balance = 0;
    let addStatus = add;
    let array = [];
    let arr = [];

    if (luhnCheck(number) === true) {
        let add = [{status: addStatus, name: name, number: number, limit: cardLimit}];
        
        array.push(add[0].status.toString()); 
        array.push(add[0].name.toString());
        array.push(add[0].number.toString());
        array.push(add[0].limit.toString());

        return array;
    
    } else {
        let error = [];
        error.push(name,"error");
        return error;
    }

    
    arr.push(array[1]);
    arr.push(balance);
    
    return arr;
    
}

let def = add();





const charge = (cardHolder, amount) => {
    let balance = amount;
    let myName = cardHolder;
    if (balance > def[3]) {
        return 0;
    }
    if (def[1] === "error") {
        return "";
    }
    if (myName != def[1]) {
        return "";
    }

    let myCharge = [{status: "charge", name: myName, amount: balance}];
    let arr = [];
    
    arr.push(myCharge[0].status.toString()); 
    arr.push(myCharge[0].name.toString());
    arr.push(myCharge[0].amount.toString());

    return arr;
}


let def1 = charge();

const credit = (cardHolder, amount) => {
    let credit =  amount;
    let myName = cardHolder;
    if (def1 === "") {
        return "";
    }
    if (myName != def1[1]) {
        return "";
    }
    let myCharge = [{status: "credit", name: myName, amount: credit}];
    let arr = [];
    
    arr.push(myCharge[0].status.toString()); 
    arr.push(myCharge[0].name.toString());
    arr.push(myCharge[0].amount.toString());

    return arr;
}

let def2 = credit();

function operations(add,charge,credit) {
            let o = [];
            o.push(add);
            let c = [];
            c.push(charge);
            let cre = [];
            cre.push(credit)


            if (o[0] === "Add"){
                def.push(o);

                return def;
            }
            if (c[0] === "Charge"){
                def1.push(c);

                return def1;
            }
            if (cre[0] === "Credit"){
                def2.push(cre);

                return def2;
            }
    
        
    //if (option1[1] === "Add") {
       // def.push(operations);
        //let arr = [];
        //arr.push(operations[1]);
        //arr.push(balance);
            
         //return def;
    //}
        
       /**  let option2 = operations.push(def, def1, def2); 

           
           

    
           

            if (option2) {
                let result = def1[2] - def2[2];
                let arr = [];
                if (def1[1] === def2[1]) {
                    arr.push(def1[1]);
                    arr.push(result);

                    return operations;
                } else {
                    return "error";
                }
            }*/
        
}



//console.log(def);
//console.log(a());
//console.log(def1);
//console.log(def2);
console.log(operations(["Add", "Tom", 4111111111111111, 1000],["Charge", "Tom", 1000],["Credit", "Tom", 400]));
//console.log(solution(["Tom", 4111111111111111, "$1000"]));