
// Space Complexity refers to the amount of memory a progrram takes

// Example:

function booo(n) {
    for(let i = 0; i < n.length; i++) {
        console.log('booooo')
    }
}

// The above Function has a Space Complexity of O(1)
// As we see inside the function we donot allocate any extraspace for the program to run


function arraySpace(n) {
    let hiArray = [];
    for(let i = 0; i < n.length; i++) {
        hiArray[i] = 'hello'
    }
    return hiArray;
}

// ABOVE Function has O(n) space Complexity

// In this above function we see that we have allocated an space of hiArray
// and we fill it with 'hello' as many times as input which is not in our control
// so for every single element included more space is allocated. 