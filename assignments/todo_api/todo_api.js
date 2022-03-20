const allTaskButton = document.querySelector('.all_task');
const completedButton = document.querySelector('.completed_task');
const pendingButton = document.querySelector('.pending_task');
const todoList = document.querySelector('.todo_task');

fetchtodo();

async function fetchtodo(){
    let result=await fetch('https://jsonplaceholder.typicode.com/todos');
    let fetched_data=await result.json();
    allTaskButton.addEventListener("click", () => {
        loadItems(fetched_data);
        });
    completedButton.addEventListener("click", () => {
        let completedTodoList = fetched_data.filter(element => element.completed);
        loadItems(completedTodoList);
    });
    pendingButton.addEventListener("click", () => {
        let pendingTodoList = fetched_data.filter(element => !element.completed);
        loadItems(pendingTodoList);
    });
}

function loadItems(fetched_data){
        let filtered_result='';
    fetched_data.forEach((task) => {
        let trigger
        if (task.completed) {
            trigger = "COMPLETED"
        }
        else {
            trigger = "PENDING"
        }
        filtered_result+=`<div class="whole_value">
                <h4>${task.title}</h4>
                <p >UserId : ${task.userId}</p>
                <p >ID : ${task.id}</p>
                <p >Status : ${trigger}</p>
                </div>`
}); todoList.innerHTML=filtered_result;}