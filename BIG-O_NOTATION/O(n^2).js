

// O(n^2) --> Quadratic Time 
// Every time number of element Increases the Operations increases by ^2 times
// Is Poor in Performance 

function logAllPairOfBoxes(boxes) {
    boxes.forEach(function(firstBox) { // O(n)
        boxes.forEach(function(secondBox){ // O(n)
            console.log(firstBox, secondBox);
        })
    });
};

// O( n * n) --> O(2n)

//  Nested Functions are muktiplied when calculated
// Every time number of element Increases the Operations increases by ^2 times

// Here in the above function we see if number of boxes increases the number of Operations increases 
// for both the FirstBox and secondBox respectively
