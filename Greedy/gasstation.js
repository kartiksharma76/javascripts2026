function canCompleteCircuit(gas, cost) {

    let total = 0;
    let tank = 0;
    let start = 0;

    for(let i=0;i<gas.length;i++){

        total += gas[i]-cost[i];
        tank += gas[i]-cost[i];

        if(tank < 0){
            start = i+1;
            tank = 0;
        }
    }

    return total >= 0 ? start : -1;
}

console.log(canCompleteCircuit([1,2,3,4,5],[3,4,5,1,2]));