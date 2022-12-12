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

//Add new item to list 
const input = document.getElementById('new-item');

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

//mark as completed
let ul = document.getElementById('list');
ul.addEventListener('click' ,(event)=>{
    if(event.target.style.textDecoration != 'line-through'){
       
        event.target.style.textDecoration = 'line-through' //fix this: it's also putting a line on the x
        list.forEach(element => {
            if(element.action === event.target.innerHTML){
                element.completed = true
            }
            
        })
    }else{
        event.target.style.textDecoration = 'none'
        list.forEach(element => {
            if(element.action === event.target.innerHTML){
                element.completed = false
            }
            
        })
    }
    
})
//delete todo
ul.addEventListener('click', (event)=>{
    if (event.target.classList.contains('deleteBttn')){
       //delete item from the list 
       //delete li from ul
    }
    return
})


//Render list
function renderTodo(listTodo){

    //add a li
    let liElement = document.createElement('li');
    liElement.innerHTML =` 
    <div  id="${listTodo.id}" class="list-item">
    <p>${listTodo.action}</p>
    </div></i>
    
    </div>
   `
        
    myList.appendChild(liElement)

}



//night mode


