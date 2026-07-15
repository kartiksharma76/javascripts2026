function minCoins(coins, amount) {

    coins.sort((a, b) => b - a);

    let result = [];

    for (let coin of coins) {

        while (amount >= coin) {
            amount -= coin;
            result.push(coin);
        }
    }

    return result;
}

console.log(minCoins([1,2,5,10], 18));