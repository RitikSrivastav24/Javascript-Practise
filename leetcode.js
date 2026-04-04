// Q.1 Square Each Element in an Array
var functionArray= function(arr){
    let result=[];
    for(let i=0; i<arr.length; i++){
        result[i] = arr[i] * arr[i]
    }
    return result;
}
console.log(functionArray([1,2,3,4]))
