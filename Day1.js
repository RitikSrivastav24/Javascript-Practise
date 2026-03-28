function reverseString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i]
    }
    return reversed;

}

function greet(name) {
    return "Hello " + name
}

function add(a, b, c) {
    return a + b + c
}
// console.log(add(1+"2"+3))
// console.log(greet("Ritik"));
// console.log(reverseString("Ritik"))
// console.log([] + [])
// console.log([] + {});

function add(a, b) {
    return a + b;
}
function checkEvenOdd(a) {
    if (a % 2 === 0) {
        return "Even"
    }
    else {
        return "odd"
    }
}
function stringLength(str) {
    return str.length;
}

function square(n) {
    return n * n
}

/* function largestnum(a,b,c){
    if(a>=b && a>= c){
        return a;
    }
    else if(b>=c && b >= c){
        return b
    }
    else{
        return c;
    }
}*/

function largestnum(a, b, c) {
    return Math.max(a, b, c)
}
function strUppercase(str) {
    return str.toUpperCase();
}

function reverseString(str) {
    let reverse = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reverse += str[i]
    }
    return reverse
}
// console.log(reverseString("Ritik"))

// console.log(strUppercase("ritik"));
// console.log(largestnum(8,10,1))
// console.log(square(5))
// console.log(stringLength("Ritik"))
// console.log(checkEvenOdd(6))
// console.log(add(7,9))

// function findVowels(str){
//     let count=0 ;
//     for(let i=0; i<str.length;i++){
//         let char= str[i].toLowerCase();
//         if(char=="a" || char=="e" || char =="i" || char=="o" || char=="u"){
//             count++;
//         }
//     }
//     return count;
// }
// console.log(findVowels("Ritik"))

// function findConsonents(str){
//     let count=0 ;
//     for(let i=0; i<str.length;i++){
//         let char= str[i].toLowerCase();
//         if(char!=="a" && char!=="e" && char !=="i" && char!=="o" && char!=="u"){
//             count++;
//         }
//     }
//     return count;
// }
// console.log(findConsonents("Ritik"))

function checkNum(n) {
    if (n > 0) {
        return "Positive"
    }
    else if (n < 0) {
        return "Negative"
    }
    else {
        return "Zero"
    }
}

console.log(checkNum(0))

function countCharacters(str) {
    let count = 0;
    for (let ch of str) {
        count++;
    }
    return count;
}
console.log(countCharacters("Nitin"));

function arraySum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
};
console.log(arraySum([1, 2, 3, 4, 5]))

function findSmallestNum(a, b, c) {
    return Math.min(a, b, c)
}
console.log(findSmallestNum(4, 6, 1))

/* function factorialOfNum(n){
    if(n<0){
        return "Number should not be negative"
    }
    if(n===0 || n===1){
        return 1;
    }
    else {
        return n* factorialOfNum(n-1)
    }
}
console.log(factorialOfNum(4)); 
*/

function factorial(n) {
    let fact = 1;
    for (let i = 1; i <= n; i++) {
        fact *= i
    }
    return fact;
}
console.log(factorial(4))


// Top 5 patterns that solve 40% of logic issues 

// counter
// suppose if i have to consonents in the given string 
function countConsonents(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        let ch = str[i].toLowerCase();
        if (ch !== "a" && ch !== "e" && ch !== "i" && ch !== "o" && ch !== "u") {
            count++
        }
    }
    return count
}
console.log(countConsonents("Rahul"))

//Accumulator Pattern -- When we to do addition, multiplication
function arrSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum
}
console.log(arrSum([4, 5, 6, 8]));

// Reverse Loop Pattern-- when we need to do array or string reverse
function arrReverse(arr) {
    let reverse = "";
    for (let i = arr.length - 1; i >= 0; i--) {
        reverse += arr[i];
    }
    return reverse;
}
console.log(arrReverse([1, 2, 3, 4]));

// Maximum or Minimum Pattern -- when find the largest or smallest number


// count even numbers in an array [1,2,3,4,5,6,7,8]
function countEven(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            count++
        }
    }
    return count
}
// console.log(countEven([1,2,3,4,5,6,7,8]))


// Now count char in this string "banana"
function countA(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == "a") {
            count++
        }
    }
    return count;
}
//console.log(countA("banana"))
function countN(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "n") {
            count++
        }
    }
    return count;
}
//console.log(countN("banana"))

// count vowels 
function countVowels(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        let char = str[i].toLowerCase();
        if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u") {
            count++
        }
    }
    return count;
}
console.log(countVowels("javascript"));

//reverse the string 
function reverseString(str) {
    let reverse = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reverse += str[i]

    }
    return reverse;
}
//console.log(reverseString("Ritik"))

//palindrome
function isPalindrome(str) {
    str = str.toLowerCase();
    let reverse = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reverse += str[i];
    }
    if (str === reverse) {
        return true;
    }
    else {
        return false
    }

}
//console.log(isPalindrome("Ritik"))

function isPalindrome1(str) {
    let reversed = str.split("").reverse().join("");
    return str === reversed;
}
//console.log(isPalindrome1("level"));



