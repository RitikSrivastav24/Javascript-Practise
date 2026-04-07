

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
       let error= false;
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