class Generator {
  reservedList = [];
      
  create(name){
    const sameTypeList = this.reservedList.filter((n) =>
        n.slice(0, name.length) === name);
    if(sameTypeList.length === 0){
        this.reservedList = [...this.reservedList, name + 1];
        return name + 1;
    } else {
        const existedNumberList = sameTypeList.map((n) => {
            return parseInt(n.slice(name.length, n.length), 10)
        });
        
        const allNumberSeries = [...Array(existedNumberList[existedNumberList.length-1])].map((_, idx) => {
            if(existedNumberList.includes(idx)) return idx;
            return null;
        })
        
        for(let i = 0; i < allNumberSeries.length - 1; i++){
            if(allNumberSeries[i + 1] - allNumberSeries[i] !== 1){
                this.reservedList = [...this.reservedList, `${name}${i + 1}`]; 
                return `${name}${i + 1}`;
            }
        }
        this.reservedList = [...this.reservedList, `${name}${allNumberSeries.length + 1}` ];
        return `${name}${allNumberSeries.length + 1}`;
    }
  }
  delete(name) {
    this.reservedList = this.reservedList.filter(n => n !== name);
  }    
}
  
function solution(queries) {
  const generator = new Generator();
  const results = [];
  queries.forEach((query) => {
    const [action, name] = query.split(' ');
    if (action === 'create') {
      results.push(generator.create(name));
    } else if (action === 'delete') {
      generator.delete(name);
    }
  });
  return results;
}



console.log(solution(["create alex", "create alex", "delete alex1", "create alex", "create john"]));

console.log(solution(["create apibox", 
"create apibox", 
"delete apibox1", 
"create apibox", 
"create sitebox"]));