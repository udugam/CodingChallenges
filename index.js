// Given a list of integers and a single sum value, return the first two values (parse from the left please) in order of appearance that add up to form the sum.

// Negative numbers and duplicate numbers can and will appear.
// NOTE: There will also be lists tested of lengths upwards of 10,000,000 elements. Be sure your code doesn’t time out.

//Essentially we're going to itterate through the array and check if the next element value is equal to (sum-current element value)

function consecutiveSum(list,sum) {
    list.forEach(function(element) {
        list.reduce(function(element) {
            
        })
    })
}

consecutiveSum([11, 3, 7, 5],10);