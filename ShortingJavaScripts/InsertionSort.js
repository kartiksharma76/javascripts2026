// Insertion Sort Algorithm
// Step 1: Start from second element
// Step 2: Compare with previous elements
// Step 3: Insert at correct position

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
    return arr;
}