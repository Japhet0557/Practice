
function operations(add,charge,credit) {
  add = [];
  charge = [];
  credit = [];
  
  let createCreditCard = (stat,name,number,limit) => {
    let myName = name;
    let myNumber = number;
    let cardLimit = limit;
    let balance = 0;
    let addStatus = stat;
    //let array = [];
    let arr = [];

    let luhnCheck = myNumber => {
      let arr = (myNumber + '')
        .split('')
        .reverse()
        .map(x => parseInt(x));
      let lastDigit = arr.splice(0, 1)[0];
      let sum = arr.reduce((acc, val, i) => (i % 2 !== 0 ? acc + val : acc + ((val * 2) % 9) || 9), 0);
      sum += lastDigit;
      return sum % 10 === 0;
    };
  
    if (luhnCheck(myNumber) === true) {
      arr.push(myName);
      arr.push(balance);

    } else {
        let error = [];
        error.push(myName,"error");
        return error;
    }

    return arr;
  }
  
  let increaseBalance = (stat,name, myAmount) => {
    if (stat === "string") {
      return "must be string";
    }
    if (name === "string") {
      return "must be string";
    }
    if (isNaN(myAmount)) {
      return "must be number";
    }
    let amountCharge = myAmount;
    let myName1 = name;
    let addStatus1 = stat;
    let arr = [];
    
    arr.push(addStatus1); 
    arr.push(myName1);
    arr.push(amountCharge);
  
    return arr;
    
  }
  
  let decreaseBalance = (stat,name, myAmount) => {
    if (stat === "string") {
      return "must be string";
    }
    if (name === "string") {
      return "must be string";
    }
    if (isNaN(myAmount)) {
      return "must be number";
    }
    let amountCredit =  myAmount;
    let myName = name;
    let addStatus = stat;
    if (increaseBalance() === "") {
        return "";
    }
    
    let arr = [];
    
    arr.push(addStatus); 
    arr.push(myName);
    arr.push(amountCredit);
    
    return arr;
    
  }

  let final = () => {
    let operation = [add,charge,credit];

    let num = operation.length;
   
    let creditCard = createCreditCard; 
    let increase = increaseBalance;
    let decrease = decreaseBalance;

    for (let i = 0; i < num; i++) {
      for (let j = 0; j < 1; j++) {
        if (operation[i][j] === "Add") {
          return creditCard(add.toString());
        }
        if (operation[i][j] === "Charge") {
          return increase(charge.toString());
        }
        if (operation[i][j] === "Credit") {
          return decrease(credit.toString());
        }
      }
    }
    
    let inc = increase();
    let dec = decrease();
    if (inc[1] === dec[1]) {
      let finalBalance = inc[2] - dec[2];
      let arr = [];
      arr.push(inc[1]);
      arr.push(finalBalance);
      
      return arr;
    }
  
  }

  return final(add,charge,credit);

}

console.log(operations(["Add","Tom",4111111111111111,4000],["Charge","Tom",500],["Credit","Tom", 200]));
//console.log(operations("Charge", "Tom", 500));
//console.log(operations("Credit", "Tom", 4111111111111111, 200, 4000));

