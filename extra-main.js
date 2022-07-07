let list = [];

//add item
function addTodo(action){
    return {
        action: action, 
        id: Date.now(),
        completed: false, 
    }
}

const submitButton = document.getElementById('submit-item');
const input = document.getElementById('new-item');
//Add new item to list 
submitButton.addEventListener('click', (event) => {
    event.preventDefault()
    let newItem = addTodo(input.value)
    list.push(newItem)
    console.log(list)
    renderTodo()
    
})



const myList = document.getElementById('list'); 
function renderTodo(){

    for(let i = 0; i < list.length; i++){
        //add a li
        let liElement = document.createElement('li');
        liElement.innerHTML =` <div  id="${list[i].id}" class="list-item"><p>${list[i].action}</p><i class=" delete-button fa-solid fa-x"></i></div>`
        
    myList.appendChild(liElement)
        //put the info inside the li
        //append the li to mylist
    }
   