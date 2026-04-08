const promiseOne= new Promise(function(resolve, reject){
    setTimeout(() => {
        console.log("Asynch task is complete!!")
        resolve();
    }, 1000);
})

promiseOne.then(function(){
    console.log("Promise is consumed!")
})

new Promise(function(resolve,reject){
    setTimeout(() => {
        console.log("Async task 2!")
        resolve();
    }, 1000);
}).then(function(){
    console.log("Async task 2 is consumed!")
})

// how to pass actuall value
const promiseThree= new Promise(function(resolve,reject){
    setTimeout(()=>{
        resolve({username:"Ritik", email:"ritik@ritik.com"})
    },1000)
})
promiseThree.then(function(user){
    console.log(user)
})

// chaining
const promiseFour= new Promise(function(resolve, reject){
    setTimeout(()=>{
       let error= true;
       if(!error){
        resolve({username:"abc", password:"123"})
       }
       else{
        reject("Something went wrong!!")
       }
    },1000)
});

promiseFour.then((user)=>{
    console.log(user)
    return user.username
}).then((username)=>{
    console.log(username)
}).catch(function(error){
    console.log(error)
}).finally(()=> console.log("Finally code runs"))


const promiseFive= new Promise(function(resolve,reject){
    setTimeout(() => {
        let error=true;
        if(!error){
            resolve({username:"Javascript", password:123})
        }
        else{
            reject("Error : JS went wrong!")
        }
        
    }, 1000);
})

// consuming promiseFive using async & await

 async function consumedPromiseFive() {
    try {
        const response= await promiseFive
    console.log(response);
        
    } catch (error) {
     console.log(error)   
    }
    
}
consumedPromiseFive()

// async function getAllUsers() {
//     const response= await fetch("https://jsonplaceholder.typicode.com/users");
//     const data= await response.json(); // we have to create await response.json also because it is taking time also so we have to wait fot this also.
//     console.log(data)
// }
// getAllUsers()

// writing this again by using then and catch

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data)
})
.catch((error)=>{
    console.log(error)
})