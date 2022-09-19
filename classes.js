class Track {
    constructor(name, duration) {
      this.name = name;
      this.duration = duration;
      this.pausedOn = 0;
    }
  
    play(time) {
      // TODO: implement this method
      let timeSecond = this.pausedOn + time;
      if (this.duration === 0) {

      }
    }
  
    reset() {
      // TODO: implement this method
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
  