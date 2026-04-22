// Q.1 Square Each Element in an Array
var functionArray = function (arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result[i] = arr[i] * arr[i]
    }
    return result;
}
//console.log(functionArray([1,2,3,4]))

function EvenNum(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            result.push(arr[i])
        }
    }
    return result;
}
console.log(EvenNum([1, 23, 4, 56]));


// Q.3 Given an array and a function fn, return a new array where each element is transformed using fn.

function givenArr(arr, fn) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result[i] = fn(arr[i], i);

    }
    return result;
}
console.log(givenArr([1, 2, 3, 4], (x) => x * 2))

let result = [1, 2, 3, 4].map((x, i) => x * 2);
// console.log(result)

// *******  Memoize  ************
/*Q- Given a function fn, return a memoized version of that function.
      
A memoized function is a function that will never be called twice with the same inputs. Instead it will return a cached value.

You can assume there are 3 possible input functions: sum, fib, and factorial.
sum accepts two integers a and b and returns a + b. Assume that if a value has already been cached for the arguments (b, a) where a != b, it cannot be used for the arguments (a, b). For example, if the arguments are (3, 2) and (2, 3), two separate calls should be made.
fib accepts a single integer n and returns 1 if n <= 1 or fib(n - 1) + fib(n - 2) otherwise.
factorial accepts a single integer n and returns 1 if n <= 1 or factorial(n - 1) * n otherwise.
*/
// Solution
function memoize(fn) {
    let cache = {};
    return function (...args) {
        let key = JSON.stringify(args);
        if (key in cache) {
            return cache[key];
        }

        let result = fn(...args)
        cache[key] = result;
        return result;
    }

}

/* Given an asynchronous function fn and a time t in milliseconds, return a new time limited version of the input function.
   fn takes arguments provided to the time limited function.

   The time limited function should follow these rules:
   
   If the fn completes within the time limit of t milliseconds, the time limited function should resolve with the result.
   If the execution of the fn exceeds the time limit, the time limited function should reject with the string "Time Limit Exceeded".
*/

// Solution
    var timeLimit = function (fn, t) {
    
        return async function (...args) {
            return new Promise((resolve, reject) => {
                const timer = setTimeout(() => {
                    reject("Time Limit Exceeded")
                }, t)
    
                fn(...args)
                    .then((res) => {
                        clearTimeout(timer)
                        resolve(res)
                    })
                    .catch((err) => {
                        clearTimeout(timer)
                        reject(err)
                    })
    
            })
        }
    };