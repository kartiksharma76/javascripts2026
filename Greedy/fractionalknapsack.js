function fractionalKnapsack(items, capacity) {

    items.sort((a, b) => (b.value / b.weight) - (a.value / a.weight));

    let totalValue = 0;

    for (let item of items) {

        if (capacity >= item.weight) {
            capacity -= item.weight;
            totalValue += item.value;
        } else {
            totalValue += item.value * (capacity / item.weight);
            break;
        }
    }

    return totalValue;
}

let items = [
    {value: 60, weight: 10},
    {value: 100, weight: 20},
    {value: 120, weight: 30}
];

console.log(fractionalKnapsack(items, 50));