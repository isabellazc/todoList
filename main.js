let list = [];
const myList = document.getElementById('list'); 


//add item
function addTodo(action){
    const item = {
        action: action, 
        id: Date.now(),
        completed: false, 
    
    }

    list.push(item)
    renderTodo(item)
}

const input = document.getElementById('new-item');
//Add new item to list 
input.addEventListener('keypress', (event) => {
    if(event.key === "Enter"){
        if(input.value !== ''){
        event.preventDefault()
        addTodo(input.value)
        input.value = "";
        return
    }
        return alert("add a todo. Don't leave it on blank. ")
    }

})

//Add new title to the list
const title = document.getElementById('title');

title.addEventListener('keypress', (event) =>{
    if(event.key === "Enter"){
        
        event.preventDefault()
        return
    }
      
})



function renderTodo(listTodo){

    //add a li
    let liElement = document.createElement('li');
    liElement.innerHTML =` <div  id="${listTodo.id}" class="list-item"><p>${listTodo.action}</p><i class="fa-solid fa-ellipsis-vertical"></i></div>`
        
    myList.appendChild(liElement)

}

//made appear the add todo input

//change the name of the list
//activate dots buttons

