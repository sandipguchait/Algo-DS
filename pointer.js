
// Pointer is just a reference '

const object1 = { a: true };
const object2 = object1;
object1.a = 'booys'

console.log('1', object1); // booys
console.log('2', object3); // booys

// If we delete Object1 feom the memory, the object wont be full deleted as Object2 is referencing 
// the memeory location of object1. THIS is called as GARBAGE COLLECTION  