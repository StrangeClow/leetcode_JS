const isSorted = function(arr) {
    
    const direction = arr[0] > arr[1] ? -1 : 1

    for(let [i, val] of arr.entries()) {
        if(i === arr.length - 1 ) {
          return direction
        }
        // else if() {

        // }
    }
}