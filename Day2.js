// find largest number in array
function findLargest(arr){
    let largest=arr[0]
    for(let i=0;i<arr.length;i++){
        if(arr[i]>largest){
            largest=arr[i]
        }
    }
    return largest;
}
//console.log(findLargest([-1,-23,-5,-6,-7]));


// find second largest number in array
function findSecondLargest(arr){
    let largest = -Infinity;
    let secondLargest = -Infinity;
    for(let i=0; i<arr.length;i++){
        if(arr[i]>largest){
            secondLargest= largest;
            largest = arr[i];
        }
        else if(arr[i]>secondLargest && arr[i] !== largest){
            secondLargest=arr[i]
        }
    }
    return secondLargest;
}
//console.log(findSecondLargest([4,5,6,7,6,7]))


function secondMethod(arr){
    arr.sort((a,b) =>{
        return a-b;
    })
    return arr[arr.length-2];
}
//console.log(secondMethod([4,5,6,7,6,7])) // The only with this is in sort methods sort the array in ascending order when it sort this in ascending it becones[4,5,6,6,7,7]  so here 7 beconds second largest that looping method is better.


// find smallest number
function findSmallest(arr){
    let smallest=arr[0]
    for(let i=1;i<arr.length;i++){
        if(arr[i]<smallest){
            smallest=arr[i]
        }
    }
    return smallest;
}
//console.log(findSmallest([4,8,1,9,3]));


//find sum of the array
function findSum(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum+= arr[i]
    }
    return sum;
}
console.log(findSum([2,3,5,6]))