/**class Generator {
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
  */


class Track {
  constructor(name, duration) {
    this.name = name;
    this.duration = duration;
    this.pausedOn = 0;
  }

  play(time) {
    // TODO: implement this method
    return this.pausedOn += time;
  }

  reset() {
    // TODO: implement this method
    return this.pausedOn;
  }

  toString() {
    return `Track(name = ${this.name}, duration = ${this.duration}, pausedOn = ${this.pausedOn})`;
  }
}

class Playlist {
  constructor() {
    this.trackList = [];
  }

  addTrack(name, duration) {
    // TODO: implement this method
   return this.trackList.push(`Track(name = ${name}, duration = ${duration})`);
  }

  deleteTrack(name) {
    // TODO: implement this method
  }

  playTrack(name, time) {
    // TODO: implement this method
  }

  resetTrack(name) {
    // TODO: implement this method
  }

  trackIndexByName(name) {
    // TODO: implement this method
    return -1;
  }

  moveTrack(name, toIndex) {
    const index = this.trackIndexByName(name);
    if (index === toIndex) {
      return;
    }
    // TODO: complete the implementation of this method
  }

  toString() {
    return '[' + this.trackList.map(track => track.toString()).join(', ') + ']';
  }
}

function solution(commands, names, parameters) {
  const playlist = new Playlist();
  const result = [];

  for (let i = 0; i < commands.length; i++) {
    if (commands[i] === 'add') {
      playlist.addTrack(names[i], parameters[i]);
    } else if (commands[i] === 'delete') {
      playlist.deleteTrack(names[i]);
    } else if (commands[i] === 'play') {
      playlist.playTrack(names[i], parameters[i]);
    } else if (commands[i] === 'reset') {
      if (names[i] === '') {
        playlist.resetTrack();
      } else {
        playlist.resetTrack(names[i]);
      }
    } else if (commands[i] === 'move') {
      playlist.moveTrack(names[i], parameters[i]);
    } else { // commands[i] === 'get'
      result.push(playlist.toString());
    }
  }

  return result;
}

/**commands:
["add", 
 "play", 
 "get", 
 "add", 
 "get"]
names:
["Clair de Lune", 
 "Clair de Lune", 
 "", 
 "Toxicity", 
 ""]
parameters: [303, 603, 0, 283, 0]
Output:
["[Track(name = Clair de Lune, duration = 303)]", 
 "[Track(name = Clair de Lune, duration = 303), Track(name = Toxicity, duration = 283)]"]
Expected Output:
["[Track(name = Clair de Lune, duration = 303, pausedOn = 300)]", 
 "[Track(name = Clair de Lune, duration = 303, pausedOn = 300), Track(name = Toxicity, duration = 283, pausedOn = 0)]"] */

 /**commands:
["add", 
 "get", 
 "add", 
 "get"]
names:
["Loveless Love", 
 "", 
 "\"Long Gone(From the Bowlin Green)\"", 
 ""]
parameters: [1000, 0, 660, 0]
Output:
["[Track(name = Loveless Love, duration = 1000)]", 
 "[Track(name = Loveless Love, duration = 1000), Track(name = \"Long Gone(From the Bowlin Green)\", duration = 660)]"]
Expected Output:
["[Track(name = Loveless Love, duration = 1000, pausedOn = 0)]", 
 "[Track(name = Loveless Love, duration = 1000, pausedOn = 0), Track(name = \"Long Gone(From the Bowlin Green)\", 
 duration = 660, pausedOn = 0)]"] */

 /**commands:
["add", 
 "play", 
 "get", 
 "add", 
 "play", 
 "play", 
 "get", 
 "play", 
 "get"]
names:
["I Still Miss Someone", 
 "I Still Miss Someone", 
 "", 
 "Toxicity", 
 "I Still Miss Someone", 
 "I Still Miss Someone", 
 "", 
 "I Still Miss Someone", 
 ""]
parameters: [1, 751, 0, 584, 1, 824, 0, 220, 0]
Output:
["[Track(name = I Still Miss Someone, duration = 1)]", 
 "[Track(name = I Still Miss Someone, duration = 1), Track(name = Toxicity, duration = 584)]", 
 "[Track(name = I Still Miss Someone, duration = 1), Track(name = Toxicity, duration = 584)]"]
Expected Output:
["[Track(name = I Still Miss Someone, duration = 1, pausedOn = 0)]", 
 "[Track(name = I Still Miss Someone, duration = 1, pausedOn = 0), Track(name = Toxicity, duration = 584, pausedOn = 0)]", 
 "[Track(name = I Still Miss Someone, duration = 1, pausedOn = 0), Track(name = Toxicity, duration = 584, pausedOn = 0)]"] */

 /**commands:
["add", 
 "get", 
 "play", 
 "get", 
 "reset", 
 "get", 
 "play", 
 "get", 
 "reset", 
 "get", 
 "reset", 
 "get", 
 "reset", 
 "get"]
names:
["\"Aunt Hagars Blues\"", 
 "", 
 "\"Aunt Hagars Blues\"", 
 "", 
 "\"Aunt Hagars Blues\"", 
 "", 
 "\"Aunt Hagars Blues\"", 
 "", 
 "", 
 "", 
 "", 
 "", 
 "\"Aunt Hagars Blues\"", 
 ""]
parameters: [1000, 0, 447, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0]
Output:
["[Track(name = \"Aunt Hagars Blues\", duration = 1000)]", 
 "[Track(name = \"Aunt Hagars Blues\", duration = 1000)]", 
 "[Track(name = \"Aunt Hagars Blues\", duration = 1000)]", 
 "[Track(name = \"Aunt Hagars Blues\", duration = 1000)]", 
 "[Track(name = \"Aunt Hagars Blues\", duration = 1000)]", 
 "[Track(name = \"Aunt Hagars Blues\", duration = 1000)]", 
 "[Track(name = \"Aunt Hagars Blues\", duration = 1000)]"]
Expected Output:
["[Track(name = \"Aunt Hagars Blues\", duration = 1000, pausedOn = 0)]", 
 "[Track(name = \"Aunt Hagars Blues\", duration = 1000, pausedOn = 447)]", 
 "[Track(name = \"Aunt Hagars Blues\", duration = 1000, pausedOn = 0)]", 
 "[Track(name = \"Aunt Hagars Blues\", duration = 1000, pausedOn = 1)]", 
 "[Track(name = \"Aunt Hagars Blues\", duration = 1000, pausedOn = 0)]", 
 "[Track(name = \"Aunt Hagars Blues\", duration = 1000, pausedOn = 0)]", 
 "[Track(name = \"Aunt Hagars Blues\", duration = 1000, pausedOn = 0)]"] */

 /**commands:
["add", 
 "add", 
 "add", 
 "add", 
 "get", 
 "delete", 
 "get", 
 "delete", 
 "get", 
 "add", 
 "add", 
 "get", 
 "delete", 
 "get", 
 "delete", 
 "get"]
names:
["Suite for solo cello #1 in G major", 
 "St. Matthew Passion (Matthauspassion)", 
 "\"I Dont Know Where Im Bound\"", 
 "I Still Miss Someone", 
 "", 
 "I Still Miss Someone", 
 "", 
 "\"I Dont Know Where Im Bound\"", 
 "", 
 "Orchestral Suite #2 in B minor", 
 "Piano Sonata #8 in C minor(\"Pathetique\"),Op. 13", 
 "", 
 "Suite for solo cello #1 in G major", 
 "", 
 "Orchestral Suite #2 in B minor", 
 ""]
parameters: [956, 568, 791, 1, 0, 0, 0, 0, 0, 1, 1000, 0, 0, 0, 0, 0]
Output:
["[Track(name = Suite for solo cello #1 in G major, duration = 956), Track(name = St. Matthew Passion (Matthauspassion), duration = 568), Track(name = \"I Dont Know Where Im Bound\", duration = 791), Track(name = I Still Miss Someone, duration = 1)]", 
 "[Track(name = Suite for solo cello #1 in G major, duration = 956), Track(name = St. Matthew Passion (Matthauspassion), duration = 568), Track(name = \"I Dont Know Where Im Bound\", duration = 791), Track(name = I Still Miss Someone, duration = 1)]", 
 "[Track(name = Suite for solo cello #1 in G major, duration = 956), Track(name = St. Matthew Passion (Matthauspassion), duration = 568), Track(name = \"I Dont Know Where Im Bound\", duration = 791), Track(name = I Still Miss Someone, duration = 1)]", 
 "[Track(name = Suite for solo cello #1 in G major, duration = 956), Track(name = St. Matthew Passion (Matthauspassion), duration = 568), Track(name = \"I Dont Know Where Im Bound\", duration = 791), Track(name = I Still Miss Someone, duration = 1), Track(name = Orchestral Suite #2 in B minor, duration = 1), Track(name = Piano Sonata #8 in C minor(\"Pathetique\"),Op. 13, duration = 1000)]", 
 "[Track(name = Suite for solo cello #1 in G major, duration = 956), Track(name = St. Matthew Passion (Matthauspassion), duration = 568), Track(name = \"I Dont Know Where Im Bound\", duration = 791), Track(name = I Still Miss Someone, duration = 1), Track(name = Orchestral Suite #2 in B minor, duration = 1), Track(name = Piano Sonata #8 in C minor(\"Pathetique\"),Op. 13, duration = 1000)]", 
 "[Track(name = Suite for solo cello #1 in G major, duration = 956), Track(name = St. Matthew Passion (Matthauspassion), duration = 568), Track(name = \"I Dont Know Where Im Bound\", duration = 791), Track(name = I Still Miss Someone, duration = 1), Track(name = Orchestral Suite #2 in B minor, duration = 1), Track(name = Piano Sonata #8 in C minor(\"Pathetique\"),Op. 13, duration = 1000)]"]
Expected Output:
["[Track(name = Suite for solo cello #1 in G major, duration = 956, pausedOn = 0), Track(name = St. Matthew Passion (Matthauspassion), duration = 568, pausedOn = 0), Track(name = \"I Dont Know Where Im Bound\", duration = 791, pausedOn = 0), Track(name = I Still Miss Someone, duration = 1, pausedOn = 0)]", 
 "[Track(name = Suite for solo cello #1 in G major, duration = 956, pausedOn = 0), Track(name = St. Matthew Passion (Matthauspassion), duration = 568, pausedOn = 0), Track(name = \"I Dont Know Where Im Bound\", duration = 791, pausedOn = 0)]", 
 "[Track(name = Suite for solo cello #1 in G major, duration = 956, pausedOn = 0), Track(name = St. Matthew Passion (Matthauspassion), duration = 568, pausedOn = 0)]", 
 "[Track(name = Suite for solo cello #1 in G major, duration = 956, pausedOn = 0), Track(name = St. Matthew Passion (Matthauspassion), duration = 568, pausedOn = 0), Track(name = Orchestral Suite #2 in B minor, duration = 1, pausedOn = 0), Track(name = Piano Sonata #8 in C minor(\"Pathetique\"),Op. 13, duration = 1000, pausedOn = 0)]", 
 "[Track(name = St. Matthew Passion (Matthauspassion), duration = 568, pausedOn = 0), Track(name = Orchestral Suite #2 in B minor, duration = 1, pausedOn = 0), Track(name = Piano Sonata #8 in C minor(\"Pathetique\"),Op. 13, duration = 1000, pausedOn = 0)]", 
 "[Track(name = St. Matthew Passion (Matthauspassion), duration = 568, pausedOn = 0), Track(name = Piano Sonata #8 in C minor(\"Pathetique\"),Op. 13, duration = 1000, pausedOn = 0)]"] */


 /**commands:
["add", 
 "add", 
 "add", 
 "add", 
 "get", 
 "move", 
 "get", 
 "move", 
 "get", 
 "add", 
 "add", 
 "get", 
 "move", 
 "get", 
 "move", 
 "get"]
names:
["\"Long Gone(From the Bowlin Green)\"", 
 "Symphony #9 in D minor(\"Choral\"),Op. 125", 
 "I Walk the Line", 
 "Jackie Cane", 
 "", 
 "Symphony #9 in D minor(\"Choral\"),Op. 125", 
 "", 
 "I Walk the Line", 
 "", 
 "OoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOo", 
 "Toxicity", 
 "", 
 "Toxicity", 
 "", 
 "Toxicity", 
 ""]
parameters: [1, 509, 1, 568, 0, 0, 0, 2, 0, 1, 1000, 0, 3, 0, 2, 0]
Output:
["[Track(name = \"Long Gone(From the Bowlin Green)\", duration = 1), Track(name = Symphony #9 in D minor(\"Choral\"),Op. 125, duration = 509), Track(name = I Walk the Line, duration = 1), Track(name = Jackie Cane, duration = 568)]", 
 "[Track(name = \"Long Gone(From the Bowlin Green)\", duration = 1), Track(name = Symphony #9 in D minor(\"Choral\"),Op. 125, duration = 509), Track(name = I Walk the Line, duration = 1), Track(name = Jackie Cane, duration = 568)]", 
 "[Track(name = \"Long Gone(From the Bowlin Green)\", duration = 1), Track(name = Symphony #9 in D minor(\"Choral\"),Op. 125, duration = 509), Track(name = I Walk the Line, duration = 1), Track(name = Jackie Cane, duration = 568)]", 
 "[Track(name = \"Long Gone(From the Bowlin Green)\", duration = 1), Track(name = Symphony #9 in D minor(\"Choral\"),Op. 125, duration = 509), Track(name = I Walk the Line, duration = 1), Track(name = Jackie Cane, duration = 568), Track(name = OoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOo, duration = 1), Track(name = Toxicity, duration = 1000)]", 
 "[Track(name = \"Long Gone(From the Bowlin Green)\", duration = 1), Track(name = Symphony #9 in D minor(\"Choral\"),Op. 125, duration = 509), Track(name = I Walk the Line, duration = 1), Track(name = Jackie Cane, duration = 568), Track(name = OoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOo, duration = 1), Track(name = Toxicity, duration = 1000)]", 
 "[Track(name = \"Long Gone(From the Bowlin Green)\", duration = 1), Track(name = Symphony #9 in D minor(\"Choral\"),Op. 125, duration = 509), Track(name = I Walk the Line, duration = 1), Track(name = Jackie Cane, duration = 568), Track(name = OoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOo, duration = 1), Track(name = Toxicity, duration = 1000)]"]
Expected Output:
["[Track(name = \"Long Gone(From the Bowlin Green)\", duration = 1, pausedOn = 0), Track(name = Symphony #9 in D minor(\"Choral\"),Op. 125, duration = 509, pausedOn = 0), Track(name = I Walk the Line, duration = 1, pausedOn = 0), Track(name = Jackie Cane, duration = 568, pausedOn = 0)]", 
 "[Track(name = Symphony #9 in D minor(\"Choral\"),Op. 125, duration = 509, pausedOn = 0), Track(name = \"Long Gone(From the Bowlin Green)\", duration = 1, pausedOn = 0), Track(name = I Walk the Line, duration = 1, pausedOn = 0), Track(name = Jackie Cane, duration = 568, pausedOn = 0)]", 
 "[Track(name = Symphony #9 in D minor(\"Choral\"),Op. 125, duration = 509, pausedOn = 0), Track(name = \"Long Gone(From the Bowlin Green)\", duration = 1, pausedOn = 0), Track(name = I Walk the Line, duration = 1, pausedOn = 0), Track(name = Jackie Cane, duration = 568, pausedOn = 0)]", 
 "[Track(name = Symphony #9 in D minor(\"Choral\"),Op. 125, duration = 509, pausedOn = 0), Track(name = \"Long Gone(From the Bowlin Green)\", duration = 1, pausedOn = 0), Track(name = I Walk the Line, duration = 1, pausedOn = 0), Track(name = Jackie Cane, duration = 568, pausedOn = 0), Track(name = OoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOo, duration = 1, pausedOn = 0), Track(name = Toxicity, duration = 1000, pausedOn = 0)]", 
 "[Track(name = Symphony #9 in D minor(\"Choral\"),Op. 125, duration = 509, pausedOn = 0), Track(name = \"Long Gone(From the Bowlin Green)\", duration = 1, pausedOn = 0), Track(name = I Walk the Line, duration = 1, pausedOn = 0), Track(name = Toxicity, duration = 1000, pausedOn = 0), Track(name = Jackie Cane, duration = 568, pausedOn = 0), Track(name = OoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOo, duration = 1, pausedOn = 0)]", 
 "[Track(name = Symphony #9 in D minor(\"Choral\"),Op. 125, duration = 509, pausedOn = 0), Track(name = \"Long Gone(From the Bowlin Green)\", duration = 1, pausedOn = 0), Track(name = Toxicity, duration = 1000, pausedOn = 0), Track(name = I Walk the Line, duration = 1, pausedOn = 0), Track(name = Jackie Cane, duration = 568, pausedOn = 0), Track(name = OoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOoOo, duration = 1, pausedOn = 0)]"] */


 /**commands:
["add", 
 "delete", 
 "get", 
 "add", 
 "get", 
 "add", 
 "move", 
 "get", 
 "move", 
 "get", 
 "delete", 
 "get"]
names:
["Toccata and Fugue, for organ in D minor", 
 "Toccata and Fugue, for organ in D minor", 
 "", 
 "Piano Sonata #8 in C minor(\"Pathetique\"),Op. 13", 
 "", 
 "Toccata and Fugue, for organ in D minor", 
 "Piano Sonata #8 in C minor(\"Pathetique\"),Op. 13", 
 "", 
 "Piano Sonata #8 in C minor(\"Pathetique\"),Op. 13", 
 "", 
 "Piano Sonata #8 in C minor(\"Pathetique\"),Op. 13", 
 ""]
parameters: [925, 0, 0, 1000, 0, 214, 0, 0, 0, 0, 0, 0]
Output:
["[Track(name = Toccata and Fugue, for organ in D minor, duration = 925)]", 
 "[Track(name = Toccata and Fugue, for organ in D minor, duration = 925), Track(name = Piano Sonata #8 in C minor(\"Pathetique\"),Op. 13, duration = 1000)]", 
 "[Track(name = Toccata and Fugue, for organ in D minor, duration = 925), Track(name = Piano Sonata #8 in C minor(\"Pathetique\"),Op. 13, duration = 1000), Track(name = Toccata and Fugue, for organ in D minor, duration = 214)]", 
 "[Track(name = Toccata and Fugue, for organ in D minor, duration = 925), Track(name = Piano Sonata #8 in C minor(\"Pathetique\"),Op. 13, duration = 1000), Track(name = Toccata and Fugue, for organ in D minor, duration = 214)]", 
 "[Track(name = Toccata and Fugue, for organ in D minor, duration = 925), Track(name = Piano Sonata #8 in C minor(\"Pathetique\"),Op. 13, duration = 1000), Track(name = Toccata and Fugue, for organ in D minor, duration = 214)]"]
Expected Output:
["[]", 
 "[Track(name = Piano Sonata #8 in C minor(\"Pathetique\"),Op. 13, duration = 1000, pausedOn = 0)]", 
 "[Track(name = Piano Sonata #8 in C minor(\"Pathetique\"),Op. 13, duration = 1000, pausedOn = 0), Track(name = Toccata and Fugue, for organ in D minor, duration = 214, pausedOn = 0)]", 
 "[Track(name = Piano Sonata #8 in C minor(\"Pathetique\"),Op. 13, duration = 1000, pausedOn = 0), Track(name = Toccata and Fugue, for organ in D minor, duration = 214, pausedOn = 0)]", 
 "[Track(name = Toccata and Fugue, for organ in D minor, duration = 214, pausedOn = 0)]"] */


 /**commands:
["add", 
 "delete", 
 "get", 
 "add", 
 "play", 
 "get", 
 "reset", 
 "get", 
 "add", 
 "move", 
 "get"]
names:
["Yellow Dog Blues", 
 "Yellow Dog Blues", 
 "", 
 "Big River", 
 "Big River", 
 "", 
 "", 
 "", 
 "Symphony #9 in D minor(\"Choral\"),Op. 125", 
 "Big River", 
 ""]
parameters: [1, 0, 0, 591, 1000, 0, 0, 0, 1, 1, 0]
Output:
["[Track(name = Yellow Dog Blues, duration = 1)]", 
 "[Track(name = Yellow Dog Blues, duration = 1), Track(name = Big River, duration = 591)]", 
 "[Track(name = Yellow Dog Blues, duration = 1), Track(name = Big River, duration = 591)]", 
 "[Track(name = Yellow Dog Blues, duration = 1), Track(name = Big River, duration = 591), Track(name = Symphony #9 in D minor(\"Choral\"),Op. 125, duration = 1)]"]
Expected Output:
["[]", 
 "[Track(name = Big River, duration = 591, pausedOn = 409)]", 
 "[Track(name = Big River, duration = 591, pausedOn = 0)]", 
 "[Track(name = Symphony #9 in D minor(\"Choral\"),Op. 125, duration = 1, pausedOn = 0), Track(name = Big River, duration = 591, pausedOn = 0)]"] */
 