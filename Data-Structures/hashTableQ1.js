
// Google question
//Given an array = [2,5,1,2,3,4,7,5,2,5];
//It should return 2

//Given an array = [2,5,1,6,3,5,7];
//It should return 5

// Find out the first recurring Element in the Array


// first method -- arrays
function firstRecurringCharacter1(input) {
  for(let i = 0; i < input.length ; i++) {
    for(let j = i+1; j < input.length ; j++) {
      if(input[i] === input[j]) {
        return input[i];
      } 
    }
  }
  return undefined;
}; 
//time omplex -->  O(n^2)
// space complex --> O(1) 

firstRecurringCharacter1([2,5,1,2,3,4,7,5,2,5]);

// Hashtable method 

function firstRecurringCharacter2(input) {
  let map = {};
  for ( let i = 0; i< input.length; i++) {
    if(map[input[i]] !== undefined) {
      return input[i]
      // Loops and stores each elemnt with key and value pair on map --> { '2' : 0 , '5':1}
    } else  {
      map[input[i]] = i ;
      // When loop finds a same elemnt with same key collision occurs and loops sops and returns undefined
      // an move to else statement and return the value on input[i]
    }
  }
  return undefined;
}; 
//space complex --> O(n)
// time --> O(n)

firstRecurringCharacter2([2,5,1,6,3,5,7]);

