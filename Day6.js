// Q.1 - Reverse a string without using built-in reverse(). 
// Soluton :-
function reverseStr(str){
    let reverse="";
    for(let i=str.length-1;i>=0;i--){
        reverse+= str[i]
    }
    return reverse
}

  
console.log(reverseStr("Ritik"))