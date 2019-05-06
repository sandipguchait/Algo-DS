
const Strings = ['a','b','c','d'];

//4*4 = 16 bytes of storage on 32 bit system
Strings[2] // O(1)

// PUSh
Strings.push('e'); // O(1) --> since one sting is added at the last 

//POP
Strings.pop(); // O(1) --> since one sting is deleted from last

//UNSHIFT --> adding data to front of array --> ['x', 'a','b','c','d'];
Strings.unshift('x') // O(n) --> as we have to shift each position of the element 

//SPLICE
String.splice(2,0, 'alien'); // O(n) --> since alien will be added on the 2nd position 
//and 'c will be removed again we shift positions

//-------------------------------------------------------------
// Array of 2 types static and Dynamic arrays 
// --> static --> Size of array already known
// --> dynamic array --> size of array is not fixed or known 