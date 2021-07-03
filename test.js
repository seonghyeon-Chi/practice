function findTheBug(word) {
    for (let i = 0; i < word.length; i ++) {
      if (word[i] === '#') {
        return i*3;
      }
    }
  }

let bug1 = '12#568';
console.log(findTheBug(bug1));
