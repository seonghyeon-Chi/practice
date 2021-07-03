<<<<<<< HEAD
console.log(12)
=======
function findTheBug(word) {
    for (let i = 0; i < word.length; i ++) {
      if (word[i] === '#') {
        return i*3;
      }
    }
  }

let bug1 = '12#568';
console.log(findTheBug(bug1));
>>>>>>> b6737ff4da3341313576158e39586abe1dfd9309

