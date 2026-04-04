// Q.1 Square Each Element in an Array
var functionArray= function(arr){
    let result=[];
    for(let i=0; i<arr.length; i++){
        result[i] = arr[i] * arr[i]
    }
    return result;
}
//console.log(functionArray([1,2,3,4]))

function EvenNum(arr){
    let result= [];
    for(let i=0;i<arr.length;i++){
        if(arr[i] % 2 ===0){
            result.push(arr[i])
        }
    }
    return result;
}
console.log(EvenNum([1,23,4,56]));


// Q.3 Given an array and a function fn, return a new array where each element is transformed using fn.

function givenArr(arr, fn){
    let result=[];
    for(let i =0 ; i<arr.length; i++){
        result[i]= fn(arr[i], i);

    }
    return result;
}
console.log(givenArr([1,2,3,4], (x) => x* 2))

let result=[1,2,3,4].map((x,i) => x*2);
console.log(result)