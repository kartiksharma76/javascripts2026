function candy(ratings) {
    let n = ratings.length;
    let candies = new Array(n).fill(1);

    // Left to Right
    for (let i = 1; i < n; i++) {
        if (ratings[i] > ratings[i - 1]) {
            candies[i] = candies[i - 1] + 1;
        }
    }

    // Right to Left
    for (let i = n - 2; i >= 0; i--) {
        if (ratings[i] > ratings[i + 1]) {
            candies[i] = Math.max(candies[i], candies[i + 1] + 1);
        }
    }

    return candies.reduce((sum, val) => sum + val, 0);
}

console.log(candy([1,0,2])); // 5