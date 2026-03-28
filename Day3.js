// count odd numbers in an array.
function countOddNumbers(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            count++
        }
    }
    return count;
}
//console.log(countOddNumbers([1,2,3,45,6,7]));


//find duplicates in an array
function findDuplicates(arr) {
    let seen = [];
    let duplicates = [];
    for (let i = 0; i < arr.length; i++) {
        if (seen.includes(arr[i])) {  //includes checked that element is already present or not.
            duplicates.push(arr[i]);
        }
        else {
            seen.push(arr[i]);
        }
    }
    return duplicates;
}
//console.log(findDuplicates([1,2,3,2,4,5,1]));

//find unique values in an array
function findUniqueValues(arr) {
    let unique = [];
    for (let i = 0; i < arr.length; i++) {
        if (!unique.includes(arr[i])) {
            unique.push(arr[i])
        }
    }
    return unique;
}
console.log(findUniqueValues([1, 2, 3, 2, 4, 5, 1]));