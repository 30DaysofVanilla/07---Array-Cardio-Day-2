    // ## Array Cardio Day 2
    const people = [
      { name: 'Wes', year: 1988 },
      { name: 'Kait', year: 1986 },
      { name: 'Irv', year: 1970 },
      { name: 'Lux', year: 2015 }
    ];
    const comments = [
      { text: 'Love this!', id: 523423 },
      { text: 'Super good', id: 823423 },
      { text: 'You are the best', id: 2039842 },
      { text: 'Ramen is my fav food ever', id: 123523 },
      { text: 'Nice Nice Nice!', id: 542328 }
    ];
    // Some and Every Checks
    // Array.prototype.some() // is at least one person 19 or older?

    const some = arr => {
      for(let i = 0; i < arr.length; i++) {
        if(arr[i].year <= 1999) return true;    
      }
      return false;
    }

    // console.log(some(people));

    // Array.prototype.every() // is everyone 19 or older?
    const every = arr => {
      for(let i = 0; i < arr.length; i++) {
        if(arr[i].year >= 1999) return false;
      }
      return true;
    }

    //console.log(every(people))


    // Array.prototype.find()
    // Find is like filter, but instead returns just the one you are looking for
    // find the comment with the ID of 823423
    const find = (arr, target) =>  arr.filter( comment => comment.id === target ? comment : "Not found");

    console.log(find(comments, 823423))


    // Array.prototype.findIndex()
    // Find the comment with this ID
    // delete the comment with the ID of 823423
    const findIndex = (arr, target) => {
      arr.forEach( (comment, i) => {
        if(comment.id === target) {
          arr.splice(i, 1);
        }
      });
      return arr;
    }

    //console.log(findIndex(comments, 823423))