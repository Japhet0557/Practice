class Generator {
    reservedList = [];
        
    create(hostType){
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
    delete(hostname) {
      this.reservedList = this.reservedList.filter(name => name !== hostname);
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
  