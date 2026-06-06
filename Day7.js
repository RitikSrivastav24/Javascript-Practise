// Top 50 JavaScript Logical Questions
// 1. Reverse a string without using built-in reverse().
// Ans

let str = "Check"
let reverse = "";
for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i]
}
// console.log(reverse);
// if we use built in method then 
const str1 = "Built"
let rev = str1.split("").reverse().join("")
// console.log(rev)


// 2. Check if a string is palindrome.
// Ans 
function palindrome(str) {
    /* First Method 
    let left = 0;
    let right= str.length -1 ;
    while(left < right)
    {
        if(str[left] !== str[right]){
            return false
        }
        left++
        right--
    }
    return true
    */

    /* Second Moethod 
    str = str.toLowerCase();
    let reverse = ""
    for (let i = str.length - 1; i >= 0; i--) {
        reverse += str[i]
    }
    if (str === reverse) return true
    else return false
    */

    return str === str.split("").reverse().join("") 
}
//console.log(palindrome("Ritik"))


// 3. Find the factorial of a number.
// Ans 
function factorial(n){
    let result = 1;
    for(let i =1 ; i<=n; i++){
        result *= i;
    }
    return result
}
// console.log(factorial(5))


// 4. Generate Fibonacci series up to N terms.
// Ans :- The Fibonacci series is a sequence where each number is the sum of the previous two numbers.


// 5. Find the largest number in an array.
// Ans
function isLargest(arr){
    let largest= arr[0];
    for(let i = 1; i<arr.length; i++){
        if(arr[i] > largest){
            largest=arr[i]
        }
    }
    return largest
}
console.log(isLargest([12, 45, 7, 89, 23]))
// 6. Find the smallest number in an array.
//Ans

function ismallest(arr){
    let smallest = arr[0];
    for(let i= 1 ; i <arr.length ; i++){
        if(arr[i] < smallest)
        {
            smallest= arr[i]
        }
    }
     return smallest
}
console.log(ismallest([12, 45, 7, 89, 23, ,-4]))
 
// 7. Remove duplicates from an array.

// 8. Sort an array without using sort().
// 9. Check if two strings are anagrams.
// 10. Count vowels and consonants in a string.
// 11. Find the second largest number in an array.
// 12. Merge two arrays without duplicates.
// 13. Find missing number in an array from 1 to N.
// 14. Move all zeros to the end of an array.
// 15. Find the frequency of each character in a string.
// 16. Check if a number is prime.
// 17. Print all prime numbers between 1 and N.
// 18. Find the sum of digits of a number.
// 19. Check if a number is Armstrong number.
// 20. Swap two variables without third variable.
// 21. Flatten a nested array.
// 22. Find intersection of two arrays.
// 23. Find union of two arrays.
// 24. Rotate an array by K positions.
// 25. Find maximum occurring character in a string.
// 26. Convert first letter of every word to uppercase.
// 27. Find longest word in a sentence.
// 28. Count occurrences of each word in a sentence.
// 29. Check if brackets are balanced.
// 30. Find duplicate elements in an array.
// 31. Implement debounce function.
// 32. Implement throttle function.
// 33. Deep clone an object.
// 34. Create your own map() function.
// 35. Create your own filter() function.
// 36. Create your own reduce() function.
// 37. Find all pairs in array whose sum equals target.
// 38. Find subarray with maximum sum.
// 39. Implement binary search.
// 40. Implement bubble sort.
// 41. Implement selection sort.
// 42. Implement insertion sort.
// 43. Find longest substring without repeating characters.
// 44. Check if two objects are equal.
// 45. Convert array into grouped object by property.
// 46. Implement currying function.
// 47. Create a custom promise implementation.
// 48. Implement event emitter pattern.
// 49. Create a memoization function.
// 50. Build a simple LRU cache implementation.