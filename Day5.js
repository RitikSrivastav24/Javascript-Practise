function isAnagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }

}

function countChars(str) {
    let count = {};
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        count[char] = (count[char] || 0) + 1;
    }
    return count;
}
//console.log(countChars("Ritik"));

function hasDuplicate(str) {
    let count = {};
    for (let i = 0; i < str.length; i++) {
        let char = str[i]
        count[char] = (count[char] || 0) + 1;
        if (count[char] > 1) {
            return true
        }

    }
    return false;
}

//console.log(hasDuplicate("ab"))

function hasRepeating(str) {
    let count = {};
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        count[char] = (count[char] || 0) + 1;
        if (count[char] > 1) {
            return char;
        }
    }
    return false;
}
//console.log(hasRepeating("aab"))

function isAnagram(str1, str2) {

    if (str1.length !== str2.length) {
        return false;
    }

    let count = {};

    // Step 1: count
    for (let i = 0; i < str1.length; i++) {
        let char = str1[i];
        count[char] = (count[char] || 0) + 1;
    }

    // Step 2: check
    for (let i = 0; i < str2.length; i++) {
        let char = str2[i];

        if (count[char] > 0) {
            count[char]--;
        } else {
            return false;
        }
    }

    return true;
}

//console.log(isAnagram("ab","ba"));     // true
//console.log(isAnagram("hello","world")); // false

function twoSum(myArr, target) {
    let map = {};
    for (let i = 0; i < myArr.length; i++) {
        let num = myArr[i]
        let diff = target - num
        if(map[diff]){
            return [diff , num]
        }
        map[num]= true;
    }
    return [];
}
console.log(twoSum([2,7,11,5,15], 16)); // [2,7]