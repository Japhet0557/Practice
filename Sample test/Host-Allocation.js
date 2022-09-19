/**Implement the missing code, denoted by ellipses. You may not modify the pre-existing code.
Hostnames consist of an alphabetic host type (e.g. "apibox") concatenated with a host number 
(eg: "apibox1", "apibox2", etc. are valid hostnames).

Your task is to create a class called Tracker that supports two operations:

allocate(hostType), which reserves the first available hostname and returns it;
deallocate(hostname), which should release that hostname back into the pool.
The input for this task is an array of sequential queries in string form, where a query of type "A <hostType>" means a call to tracker.allocate(<hostType>), and query of type "D <hostname>" means a call tracker.deallocate(<hostname>). The output should be an array of return values of all allocate calls.

There is already a prewritten piece of code that handles the input / output and makes allocate / deallocate calls, so you just need to create the Tracker class that implements them.

Note that deallocating a non-allocated hostname is a valid operation.

Example

For queries = ["A apibox", "A apibox", "D apibox1", "A apibox", "A sitebox"], the output should be
solution(queries) = ["apibox1", "apibox2", "apibox1", "sitebox1"].

This is how it should work for an already initialized Tracker class instance tracker:

>> tracker.allocate('apibox');
"apibox1"

>> tracker.allocate('apibox');
"apibox2"

>> tracker.deallocate('apibox1');

>> tracker.allocate('apibox');
"apibox1"

>> tracker.allocate('sitebox');
"sitebox1"
Input/Output

[execution time limit] 4 seconds (js)

[input] array.string queries

An array of strings representing queries to the tracker.

queries[i] = "A <hostType>" means that you should call tracker.allocate(<hostType>) and return the reserved hostname.
queries[i] = "D <hostname>" means that you should call tracker.deallocate(<hostname>) and return nothing.
It is guaranteed that all host numbers of the deallocating queries won't exceed 999. */


class Tracker {
  reservedList = [];
      
  allocate(hostType){
    const sameTypeList = this.reservedList.filter((name) =>
        name.slice(0, hostType.length) === hostType);
    if(sameTypeList.length === 0){
        this.reservedList = [...this.reservedList, hostType + 1];
        return hostType + 1;
    } else {
        const existedNumberList = sameTypeList.map((name) => {
            return parseInt(name.slice(hostType.length, name.length), 10)
        });
        
        const allNumberSeries = [...Array(existedNumberList[existedNumberList.length-1])].map((_, idx) => {
            if(existedNumberList.includes(idx)) return idx;
            return null;
        })
        
        for(let i = 0; i < allNumberSeries.length - 1; i++){
            if(allNumberSeries[i + 1] - allNumberSeries[i] !== 1){
                this.reservedList = [...this.reservedList, `${hostType}${i + 1}`]; 
                return `${hostType}${i + 1}`;
            }
        }
        this.reservedList = [...this.reservedList, `${hostType}${allNumberSeries.length + 1}` ];
        return `${hostType}${allNumberSeries.length + 1}`;
    }
  }
  deallocate(hostname) {
    this.reservedList = this.reservedList.filter(name => name !== hostname);
  }    
}
  
  function solution(queries) {
    var tracker = new Tracker();
    var results = [];
    queries.forEach(function (query) {
      var [action, name] = query.split(' ');
      if (action === 'A') {
        results.push(tracker.allocate(name));
      } else if (action === 'D') {
        tracker.deallocate(name);
      }
    });

    return results;
  }

  console.log(solution(["A apibox", 
  "A apibox", 
  "D apibox1", 
  "A apibox", 
  "A sitebox"]));
  console.log(solution(["A u", 
  "A hk", 
  "A hk"]));
  console.log(solution(["A alex", "A alex", "D alex1", "A alex", "A john"]));


  /**Ans: ["apibox1", 
  "apibox2", 
  "apibox1", 
  "sitebox1"] */


 /**["A u", 
 "A hk", 
 "A hk"]
Output:
["u1", 
 "hk1", 
 "hk1"]
Expected Output:
["u1", 
 "hk1", 
 "hk2"] */