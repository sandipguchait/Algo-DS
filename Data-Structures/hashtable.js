

//HashTable

let user = {
  age: 54,
  name: 'kylie',
  magic: true,
  scream: function() {
    console.log('ahhhhhhhh');
  }
}

// accessing hash tables
user.age  // O(1)
// --> 54
user.spell ='abra kadabra'; // O(1)  --> adds spell elemnt to the user object 
// --> let user = {
//   age: 54,
//   name: 'kylie',
//   magic: true,
//   spell ='abra kadabra',
//   scream: function() {
//     console.log('ahhhhhhhh');
//   }
// }

user.scream() // O(1)

// Hash collision is a major problem in hash table, since on hash table memory allocation
// is randomly generated by hashfunction , so on a single memory location we can have 
// 2 piece of information and then we can have a collision , which is time consuming to solve. 
// hash collision has O(n/k) --> O(n)