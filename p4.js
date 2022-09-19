function solution(memory, queries) {
    memory = [0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0] ;
    queries = [[0, 2], [0, 1], [0, 1], [1, 2], [1, 4], [0, 4]];

    let x;
    let ID;
      
    if (queries[i][0] === 0) {
        let x = queries[i][1];
        return x;
    } else if (queries[i][0] === 1) {
        let ID = queries[i][1];
        return ID;
    }


    for (let i = 0; i < queries.length; i++) {
        if (queries[i][0] === 0) {
            x = queries[i][1];
            return x;
        } else if (queries[i][0] === 1) {
            ID = queries[i][1];
            return ID;
        }
        
        for (let j = 0; j < memory.length; j++) {
            if (memory[j].toString() === 0) {
               
            }
        }
        if (x >= 1) {
            memory
        }


    

    let mem = {
        1: "0",
        2: "00",
        3: "000",
        4: "0000"
    }
    }
    
    

}

let queries = [[0,2],[2,3]];

console.log(queries[1][1]);