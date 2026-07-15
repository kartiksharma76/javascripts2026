function minPlatforms(arr, dep){

    arr.sort((a,b)=>a-b);
    dep.sort((a,b)=>a-b);

    let i = 1;
    let j = 0;
    let platforms = 1;
    let result = 1;

    while(i < arr.length && j < dep.length){

        if(arr[i] <= dep[j]){
            platforms++;
            i++;
        }else{
            platforms--;
            j++;
        }

        result = Math.max(result, platforms);
    }

    return result;
}

let arrival = [900,940,950,1100,1500,1800];
let departure = [910,1200,1120,1130,1900,2000];

console.log(minPlatforms(arrival, departure));