// Q.1 - Reverse a string without using built-in reverse(). 
// Soluton :-
function reverseStr(str){
    let reverse="";
    for(let i=str.length-1;i>=0;i--){
        reverse+= str[i]
    }
    return reverse
}

  
//console.log(reverseStr("Ritik"))

// Q.2 - Check if a string is palindrome.
// Solution : Palindrome is a number if we reverse the number then the output is same. example 121 if we reverse this the output will be same -- 121 