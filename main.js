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

//display options for every todo
/*const moreMenu = document.getElementsByClassName('dropbtn');
for(let i = 0; i < moreMenu.length; i++){
    moreMenu[i].addEventListener('click', ()=>{
        let content = moreMenu[i].getElementsByClassName('dropdown-content');
        content[0].classList.remove('hidden')
    })
}*/


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
        event.target.style.textDecoration = 'line-through'
    }else{
        event.target.style.textDecoration = 'none'
    }
    
})



//Render list
function renderTodo(listTodo){

    //add a li
    let liElement = document.createElement('li');
    liElement.innerHTML =` 
    <div  id="${listTodo.id}" class="list-item">
    <p>${listTodo.action}</p>
    <i class="dropbtn fa-solid fa-ellipsis-vertical">
    <div class=" dropdown-content">
    <a href="#">Delete</a>
    <a href="#">Edit</a>
    </div></i>
    
    </div>
   `
        
    myList.appendChild(liElement)
    console.log(list)

}



//crossline items when click
//settings button in the top left
//night mode
//activate dots buttons

