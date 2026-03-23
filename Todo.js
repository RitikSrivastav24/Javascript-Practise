let todos = [
    { text: "Study JS", completed: false },
    { text: "Today is last day of js", completed: false },
    { text: "I am a student", completed: false }
]

//console.log(todos)

function addTodo(text){
    let newTodo={
        text:text,
        completed:false
    };
    todos.push(newTodo)
}
addTodo("Next Part is React")
//console.log(todos)

function deleteTodo(index){
    todos.splice(index, 1)
}
deleteTodo(1)
//console.log(todos)

function toggleTodo(index){
    todos[index].completed=!todos[index].completed;

}
toggleTodo(0)
console.log(todos)