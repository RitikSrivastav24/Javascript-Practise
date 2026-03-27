function arrSum(arr){
    let sum=0;
    for(let i = 0; i<arr.length; i++){
        sum+= arr[i];
    }
    return sum
    
}
//console.log(arrSum([4,5,6,8]))
// let arr = [1,2,3]
// let sum= arr.reduce((accu, curr)=>{
//     return accu+curr
// })
// console.log(sum)



function oddNum(arr){
    let count=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i] % 2 !==0){
             count++
        }
    }
    return count
}//console.log(oddNum([1,2,3,4,5,9]))
function countOdd(arr){
    return arr.filter(num => num % 2 !== 0)
}
//console.log(countOdd([1,2,3,4,5,6]))



// find max number 
function maxNumber(arr){
    return arr.reduce((a,b) => Math.max(a,b), -Infinity)
}
//console.log(maxNumber([1,2,3,4,5,6,78]))
function getMaxNumber(ar){
    return Math.max.apply(null, ar)
}
//console.log(getMaxNumber([1,2,3,4,5,6,78,89]))

function getMaxNum(arr){
    let max=arr[0];
    for(let i =0 ;i<arr.length;i++){
        if(arr[i] > max ){
            max=arr[i]
        }
    }
    return max;
}
//console.log(getMaxNum([1,2,3,-4]))

// reverse words in sentence 
function reverseWords(){
    let str= "Hello World"
    let reverse= str.split(" ").reverse().join(" ")
    return reverse
}
//console.log(reverseWords());

// function uppercaseWords(str){
//     str.split=" ";
//     for(let i=0; i<str.length; i++){
//         let uppercase= str.toCapitalize();
//         return uppercase;
//     }
// }

function uppercaseWords(str){
    return str.split(" ").map(words => words.charAt(0).toUpperCase() + words.slice(1)).join(" ")
}
console.log(uppercaseWords("Ritik is coding "))