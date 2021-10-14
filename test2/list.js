const todo_input = document.querySelector('#myInput')
const btn_add = document.querySelector('.addBtn')
const lists = document.querySelector('ul')
const btn_edit = document.querySelector('#edit')
const lists_item = document.getElementsByTagName('li')
const date = document.querySelector('p')

var d = new Date();
    
var today = d.getDate();
var month = d.getMonth() + 1; // Since getMonth() returns month from 0-11 not 1-12
var year = d.getFullYear();
date.innerText = today + "/" + month + "/" + year;



todo_input.addEventListener('keyup',function(event){
    if (event.keyCode == 13){
        btn_add.click()
    }
})
btn_add.addEventListener('click', function add() {
    let li = document.createElement("li");
    li.innerHTML = `<label>${todo_input.value}</label> <input type="text"></input> `

    if (todo_input.value == "") {
        return alert('Chưa điền task')
    }
    else {
        lists.appendChild(li)
    }
    todo_input.value = ''

    // Tạo checkbox

    let span2 = document.createElement("span");
    span2.innerHTML = ` <input type="checkbox" >`;
    span2.className = "checked";
    li.prepend(span2)

    // Tạo nút xóa
    let span = document.createElement("span");
    span.innerHTML = "<button>Delete</button>";
    span.className = "delete";
    li.appendChild(span);

    // tạo nút edit
    let span1 = document.createElement("span");
    span1.innerHTML = "<button> Edit</button>";
    span1.className = "edit";
    li.appendChild(span1);

   

    // edit 
   

    for (let i = 0; i < edit.length; i++) {
        edit[i].onclick = function () {
            let listItem = this.parentNode;
            let editInput = listItem.querySelector('input[type=text]');
            var label = listItem.querySelector("label");
            let containsClass = listItem.classList.contains("editMode");
            if (containsClass) {
                label.innerText = editInput.value;
            } else {
                editInput.value = label.innerText;
            }
            listItem.classList.toggle("editMode");
        }}
        

    
    // xóa
    let remove = document.getElementsByClassName("delete");
    for (let i = 0; i < remove.length; i++) {
        remove[i].onclick = function () {
            let div = this.parentElement;
            div.style.display = "none";
            
        }
    }
})

for (let i = 0; i < lists_item.length; i++) {
    let span2 = document.createElement("span");
    span2.innerHTML = ` <input type="checkbox" >`;
    span2.className = "checked";
    lists_item[i].prepend(span2)
}

// tạo nút edit
for (let i = 0; i < lists_item.length; i++) {
    let span = document.createElement("span");
    span.innerHTML = "<button> Edit</button>"
    span.className = "edit";
    lists_item[i].appendChild(span);
}

// edit
let edit = document.getElementsByClassName("edit")
for (let i = 0; i < edit.length; i++) {
    edit[i].onclick = function () {
        var listItem = this.parentNode;

        let editInput = listItem.querySelector('input[type=text]');
        let label = listItem.querySelector("label");
        let containsClass = listItem.classList.contains("editMode");
        if (containsClass) {
            label.innerText = editInput.value;
        } else {
            editInput.value = label.innerText;
        }
        listItem.classList.toggle("editMode");
    }
}

// Tạo nút xóa
for (let i = 0; i < lists_item.length; i++) {
    let span = document.createElement("span");
    span.innerHTML = "<button>Delete</button>"
    span.className = "delete";
    lists_item[i].appendChild(span);
}
// xóa
let remove = document.getElementsByClassName("delete");
for (let i = 0; i < remove.length; i++) {
    remove[i].onclick = function () {
        let div = this.parentElement;
        div.style.display = "none";
    }
}



