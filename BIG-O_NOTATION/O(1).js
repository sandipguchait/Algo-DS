

// O(1) - Constant Time 
// Very Scalable and Excellent  in Terms of BIG-O
// If number of element  Increaes, it doesnt effect the Operation

function compressFirstBox(box) {
    console.log(box[0]); 
}

//For this function  we can have 100 elements still we will only compute  ONE operation 
// Which is console.log the First element of the array 

// ANOTHER EXAMPLE 

function compressFirstBox(box) {
    console.log(box[0]);
    console.log(box[1]);
    console.log(box[2]);
}

// The above function will run 3 times O(3). 
// Even If we have 100 elements it will run only 3 Operation