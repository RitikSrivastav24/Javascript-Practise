// Function who takes function as a argument or return a function is called Higher Order Function.

// *** Function as a argument
function personName(name) {
    return "Hello " + name;
}
function hof(callback) {
    const name = "Ritik";
    console.log(callback(name))
}
hof(personName)
// *** Here hof is higher order function because it accepts another function(personname)


// *** returning a function
function multiplier(factor) {
    return function (num) {
        return num * factor;
    }
}
const double = multiplier(2);
//console.log(double(5));
// *** here multiplier is a higher order function because it return a function.

// These are very commonly used--
// 1. map()
// 2. reduce()
// 3. filter()
// 4. foreach()

let arr = [1, 2, 3, 4, 5]
let example = arr.map(n => n * 2);
//console.log(example)

// *** Real Life Example 
function isAuth(user){
    return user==="admin"
}
function secureLogin(fn){
    return function(user){
        if(isAuth(user)){
            return fn(user)
        }
        else{
            return "Access Denied"
        }
    }
}
function deleteData(user){
    return `${user} deleted Data`
}
const secureDeletion= secureLogin(deleteData)
console.log(secureDeletion("admin"));
console.log(secureDeletion("guest"));
