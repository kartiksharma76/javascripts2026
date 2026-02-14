// Selection Sort Algorithm
// Step 1: Find smallest element
// Step 2: Swap with first position
// Step 3: Repeat for remaining array

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let min = i;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        // swap
        let temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp;
    }
    return arr;
}
console.log(selectionSort([4, 2, 7, 1]));
