
function operations(status,cardHolder,cardNumber,amount,cardLimit) {
  var stat = status;
  var name = cardHolder;
  var number = cardNumber;
  var myAmount = amount;
  var limit = cardLimit;

  let luhnCheck = number => {
    let arr = (number + '')
      .split('')
      .reverse()
      .map(x => parseInt(x));
    let lastDigit = arr.splice(0, 1)[0];
    let sum = arr.reduce((acc, val, i) => (i % 2 !== 0 ? acc + val : acc + ((val * 2) % 9) || 9), 0);
    sum += lastDigit;
    return sum % 10 === 0;
  };
  
  let add = (stat,name,number,limit, ) => {
    let myName = name;
    let myNumber = number;
    let cardLimit = limit;
    let balance = 0;
    let addStatus = stat;
    let array = [];
    let arr = [];
  
    if (luhnCheck(number) === true) {
      let add = [{status: addStatus, name: myName, number: myNumber, limit: cardLimit}];
        
      array.push(add[0].status); 
      array.push(add[0].name);
      array.push(add[0].number);
      array.push(add[0].limit);

    } else {
        let error = [];
        error.push(myName,"error");
        return error;
    }

    arr.push(array[1]);
    arr.push(balance);
    
    return arr;
    
  }
  
  let charge = (stat,name, myAmount) => {
    let amountCharge = myAmount;
    let myName1 = name;
    let addStatus1 = stat;
    let arr = [];
    if (amountCharge > limit) {
      return 0;
    }
    
    //if (add() === "error") {
     // return "";
    //}
    arr.push(addStatus1); 
    arr.push(myName1);
    arr.push(amountCharge);
  
    
    //if (name != def[1]) {
        //return "";
    //}
  
    //let myCharge = [{status: "charge", name: name, amount: balance}];
  
  //let def1 = charge();
    return arr;
  }
  
  let credit = (stat,name, myAmount) => {
    let amountCredit =  myAmount;
    let myName = name;
    let addStatus = stat;
    if (charge() === "") {
        return "";
    }
    //if (myName != def1[1]) {
       // return "";
    //}
    //let myCharge = [{status: "credit", name: myName, amount: credit}];
    let arr = [];
    
    arr.push(addStatus); 
    arr.push(myName);
    arr.push(amountCredit);
  
    return arr;
  }


  if (stat === "Add") {
    //let myArray = [];
    //myArray.push(stat);
    //myArray.push(name);
   // myArray.push(number);
    //myArray.push(myAmount);
    //myArray.push(limit);

    return add(stat,name,number,limit);
  }

  if (stat === "Charge") {
    //let myArray = [];
    //myArray.push(stat);
    //myArray.push(name);
    //myArray.push(myAmount);

    return charge(stat,name,myAmount);

  }

  if (stat === "Credit") {
    //let myArray = [];
    //myArray.push(stat);
    //myArray.push(name);
    //myArray.push(myAmount);

    return credit(stat,name,myAmount);

  }

  //let def = add();
  //let def1 = charge();
  //let def2 = credit();

  /**if(def[0] === def1[1] && def1[1] === def2[1]) {
    let result = def1[2] - def2[2];

    return result;
  }*/
  
}

console.log(operations("Add", "Tom", 4111111111111111, 500, 4000));
console.log(operations("Charge", "Tom", 4111111111111111, 500, 4000));
console.log(operations("Credit", "Tom", 4111111111111111, 200, 4000));

