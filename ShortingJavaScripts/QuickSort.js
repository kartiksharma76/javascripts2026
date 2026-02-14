// Quick Sort Algorithm
// Step 1: Choose pivot element
// Step 2: Smaller left, greater right
// Step 3: Recursively sort both parts

function quickSort(arr) {
    if(arr.length <= 1)return arr;

    let pivot = arr[arr.length - 1];
    let left = [];
    let right = [];
    
    for(let i = 0; i<arr.length -1; i++){
        if(arr[i] < pivot){
            left.push(arr[i]);
        }else{
            right.push(arr[i]);
        }
    }
    return[...quickSort(left), pivot, ...quickSort(right)];
}
console.log(quickSort([7,3,9,2]));
