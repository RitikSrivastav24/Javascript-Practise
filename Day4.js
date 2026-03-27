// find most frequent numbers 
function findMostFrequent(arr) {
    let count = {};
    let maxCount = 0;
    let mostFrequent;
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        count[num] = (count[num] || 0) + 1;

        if (count[num] > maxCount) {
            maxCount = count[num];
            mostFrequent = num
        }
    }
    return mostFrequent;
}

//console.log(findMostFrequent([1, 2, 2, 3, 3, 4, 5, 5, 6, 6, 4, 1, 2, 3, 5, 8, 3, 3, 3, 3]))

// Find First Non-Repeating Character 
function firstNonRepeating(str) {
    let count = {};
    for (let i = 0; i < str.length; i++) {
        let char = str[i];

    }
}