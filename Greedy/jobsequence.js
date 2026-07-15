function jobSequencing(jobs) {

    jobs.sort((a, b) => b.profit - a.profit);

    let maxDeadline = Math.max(...jobs.map(job => job.deadline));

    let slots = new Array(maxDeadline).fill(false);

    let profit = 0;

    for (let job of jobs) {

        for (let j = job.deadline - 1; j >= 0; j--) {

            if (!slots[j]) {
                slots[j] = true;
                profit += job.profit;
                break;
            }
        }
    }

    return profit;
}

let jobs = [
    {id:1, deadline:2, profit:100},
    {id:2, deadline:1, profit:19},
    {id:3, deadline:2, profit:27},
    {id:4, deadline:1, profit:25},
    {id:5, deadline:3, profit:15}
];

console.log(jobSequencing(jobs));