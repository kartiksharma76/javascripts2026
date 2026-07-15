function activitySelection(start, end) {
    let activities = [];

    for (let i = 0; i < start.length; i++) {
        activities.push({
            start: start[i],
            end: end[i]
        });
    }

    activities.sort((a, b) => a.end - b.end);

    let count = 1;
    let lastEnd = activities[0].end;

    console.log(activities[0]);

    for (let i = 1; i < activities.length; i++) {
        if (activities[i].start >= lastEnd) {
            count++;
            lastEnd = activities[i].end;
            console.log(activities[i]);
        }
    }

    return count;
}

let start = [1, 3, 0, 5, 8, 5];
let end = [2, 4, 6, 7, 9, 9];

console.log(activitySelection(start, end));