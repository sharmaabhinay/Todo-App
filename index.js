// let input = document.getElementById('input');
// let add = document.getElementById('add');
// let edit = document.getElementById('edit');
// let trash = document.getElementById('trash');
// let ol = document.getElementById('ol');
// let clear = document.getElementById('clear')

// window.addEventListener('keydown',(e)=> {
//     if(e.key == "Enter"){
//         addItem();
//         input.value = "";
//     }else if(e.key == 'Delete'){
//         clearAll();
//     }
// })

// input.addEventListener('keyup',()=> {
//     let val = input.value;
//     if(val.trim() != 0){
//         add.classList.add('active')
//     }else{
//         add.classList.remove('active')
//         // add.style.cursor = 'notAllowed'
//     }
// })
// showTasks();
// function addItem(){
//     let userData = input.value;
//     let getItem = localStorage.getItem('New Todo');
//     if(getItem == null){
//         listArray = [];
//     }else{
//         listArray = JSON.parse(getItem);
//     }listArray.push(userData)
//     localStorage.setItem('New Todo', JSON.stringify(listArray));
//     showTasks();

// }
// function showTasks(){
//     let getItem = localStorage.getItem('New Todo');
//     if(getItem == null){
//         listArray = [];
//     }else{
//         listArray = JSON.parse(getItem);
//     };
//     let newLists = '';
    
//     listArray.forEach((element,index) => {
//         newLists += `<li class="lists">${element} <span class="iconContainer"><i class="fa-solid fa-pen-to-square editIcon" onClick="editIcon()" style="margin-right:1rem;"></i><i class="fa-solid fa-trash" onClick="deleteIcon(${index})" style="color:brown;"></i></span></li>`
//     });
//     ol.innerHTML = newLists;
//     input.value = "";
//     document.getElementById('pendings').innerHTML = listArray.length;
// }
// clear.addEventListener('click',clearAll)
// function clearAll() {
//     listArray = [];
//     localStorage.setItem('New Todo', JSON.stringify(listArray));
//     ol.innerHTML = "";
//     document.getElementById('pendings').innerHTML = listArray.length;
// }

// function deleteIcon(index){
//     let getItem = localStorage.getItem("New Todo");
//     let listArray = JSON.parse(getItem);
//     listArray.splice(index,1);
//     localStorage.setItem('New Todo', JSON.stringify(listArray));
//     showTasks();
// }
// function editIcon(index){
    
//     let getItem = localStorage.getItem("New Todo");
//     let listArray = JSON.parse(getItem);
//     listArray.splice(index,1);
//     localStorage.setItem('New Todo', JSON.stringify(listArray));
//     input.value = listArray;
//     showTasks();
// }

let input = document.querySelector('.inputBox input');
let addTask = document.querySelector('.inputBox button');
let ol = document.querySelector('.parent ol');
let clear = document.querySelector('footer button');



window.addEventListener('keydown',(e)=>{
    if(e.key == "Enter"){
        addTaskFun();
        input.value = "";
    }
})
input.addEventListener('keydown',()=> {
    let val = input.value;
    if(val.trim() != 0){
        addTask.classList.add('active');
    }else{
        addTask.classList.remove('active');
    }

})

addTask.addEventListener('click',addTaskFun);
function addTaskFun() {   
        let userData = input.value;
        let getItem = localStorage.getItem('New Todo List');
        if(getItem == null){
           arryList = [];
           console.log('array is empty')

        }else{
            arryList = JSON.parse(getItem);
        }
        arryList.push(userData)
        localStorage.setItem('New Todo List',JSON.stringify(arryList));
        // alert('working');
        showTodo();
}

function showTodo(){
    let userData = input.value;
        let getItem = localStorage.getItem('New Todo List');
        if(getItem == null){
           arryList = [];
           

        }else{
            arryList = JSON.parse(getItem);
        }
        // arryList.push(userData)
        // localStorage.setItem('New Todo List',JSON.stringify(arryList))
        // arryList.array.forEach((element,index) => {
        //     let newItem = `<li>${element} <span><i class="fa-solid fa-pencil" id="pencil"></i><i class="fa-solid fa-trash"></i></span></li>`
        // });
        // ol.innerHTML = newItem;
        let newLists = '';
    
        arryList.forEach((element,index) => {
            newLists += `<li>${element} <span><i class="fa-solid fa-trash" onClick="trash(${index})"></i></span></li>`
        });
        ol.innerHTML = newLists;
        input.value = "";
        document.getElementById('tasks').innerHTML = arryList.length
        
    
}


showTodo();
function trash(index){
    let getItem = localStorage.getItem('New Todo List');
    let arryList = JSON.parse(getItem) || []; // Initialize arryList with an empty array if getItem is null
    if (index >= 0 && index < arryList.length) { // Check if index is within the bounds of arryList
        arryList.splice(index, 1);
        localStorage.setItem("New Todo List", JSON.stringify(arryList));
        showTodo();
    } else {
        console.error("Invalid index or arryList is empty");
    }
}

clear.addEventListener('click',clearAll);
function clearAll() {
    arryList = [];
    localStorage.setItem('New Todo List', JSON.stringify(arryList))
    ol.innerHTML = "";
    showTodo()
}

