const newTodoInput= document.querySelector('input');
const addTodoButton= document.querySelector('button');
const todolist= document.querySelector('div.todos');
let count=0;
addTodoButton.onclick=function(){
    var input=newTodoInput.value;
    if (input.length === 0){
        alert("Please enter a task")
    }
    else{
        let p =document.createElement('p')
        p.setAttribute("key",count)
        p.innerHTML=input
        todolist.appendChild(p)
        newTodoInput.value=""
        document.querySelector(`p[key="${count}"]`).addEventListener('click',function(){
            todolist.removeChild(this)
        })
        count++
    }
}
