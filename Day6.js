// Q.1 - Reverse a string without using built-in reverse(). 
// Soluton :-
function reverseStr(str) {
    let reverse = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reverse += str[i]
    }
    return reverse
}

function revMethod(str) {
    return str.split("").reverse().join("")
}
// console.log(revMethod("Hello"))

//console.log(reverseStr("Ritik"))

// Q.2 - Check if a string is palindrome.
/* Solution : Palindrome is a number if we reverse the number then the output is same. example 121 if we 
   reverse this, the output will be same -- 121 */

function isPalindrome(str) {
    // str= str.toLowerCase();

    // let  result= str.split("").reverse().join("");

    // if (result === str) {
    //     return true
    // }
    // else {
    //    return false
    // }

    str = str.toLowerCase();

    let start = 0;
    let end = str.length - 1

    while (start < end) {
        if (str[start] !== str[end]) {
            return false;
        }
        start++
        end--
    }
    return true
}

//console.log(isPalindrome("nitiN"))


// Q.3 . Find the factorial of a number?
// Solution:

function factorial(num){
    let result = 1;
    for(let i=1; i<=num; i++){
        result= result* i
    }
    return result
}

// console.log(factorial(6))



