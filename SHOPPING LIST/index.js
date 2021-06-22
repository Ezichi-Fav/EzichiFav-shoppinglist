// input
//const addItemInput=
//document.querySelector(".addItemInput");
//const addItemButton=
//document.querySelector("button.addItemButton");
//let listItem = document.querySelectorAll("li")

//add item to list
//const input= document.querySelector(".input");
//const addBtn=
//document.querySelector("button.add-btn");


//delete item from list
/*const deleteItemButton=
document.querySelector("button.deleteItemButton");


//list items
const listItems=
document.getElementsByTagName("li");




addItemButton.addEventListener("click", () =>{
let list = document.querySelector("ul");
let li = document.createElement("li");
li.textContent= addItemInput.value;
let appendedItem= list.appendChild("li");


for(let i = 0; i< appendedItem.length; ++i){

}
addItemInput.value="";
});



deleteItemButton.addEventListener("click", () =>{

    let list = document.querySelector("ul");
    let li = document.querySelector("li:last-child");
    list.removeChild("li");;

});






/*const input= document.getElementById("input");
const addBtn= document.getElementById("add-btn");
const itemListContainer=document.getElementById("item-list-container");

function addItemHandler()
{const value=input.value;} */



//This is the right code

//ADD ITEM
/*const addItemInput=
document.querySelector('.addItemInput');
const addItemButton=
document.querySelector('button.addItemButton');
//Remove ITEM
const deleteItemButton=
document.querySelector('button.deleteItemButton');





addItemButton.addEventListener('click', () =>{
    let list = document.querySelector('ul');
    let li = document.createElement('li');
    li.textContent= addItemInput.value;
    let appendedItem= list.appendChild(li);
    
    for (let i = 0; i< appendedItem.length; ++i){
        appendedItem[i]
    }
    addItemInput.value='';
    });




    deleteItemButton.addEventListener('click', () =>{

        let list = document.querySelector('ul');
        let li = document.querySelector('li:last-child');
        list.removeChild(li);;
    
    });
deleteIndividualButton.addEventListener('click', () =>{
    let li = document.querySelector('li');
list.removeChild(li);

});*/




const addUnitInput=
document.querySelector('.addUnitInput');
const addUnitButton=
document.querySelector('button.addUnitButton');
//Remove ITEM
const deleteUnitButton=
document.querySelector('button.deleteUnitButton');





addUnitButton.addEventListener('click', () =>{
    let lister = document.querySelector('ul');
    let li = document.createElement('li');
    li.textContent= addUnitInput.value;
    let appendedUnit= lister.appendChild(li);
    
    for (let i = 0; i< appendedUnit.length; ++i){
        appendedUnit[i]
    }
    addUnitInput.value='';
    });




    deleteUnitButton.addEventListener('click', () =>{

        let lister = document.querySelector('ul');
        let li = document.querySelector('li:last-child');
        lister.removeChild(li);;
    
    });
deleteIndividualButton.addEventListener('click', () =>{
    let li = document.querySelector('li');
lister.removeChild(li);

});











const addQtyInput=
document.querySelector('.addQtyInput');
const addQtyButton=
document.querySelector('button.addQtyButton');
//Remove ITEM
const deleteQtyButton=
document.querySelector('button.deleteQtyButton');





addQtyButton.addEventListener('click', () =>{
    let listed = document.querySelector('ul');
    let li = document.createElement('li');
    li.textContent= addQtyInput.value;
    let appendedItem= listed.appendChild(li);
    
    for (let i = 0; i< appendedItem.length; ++i){
        appendedItem[i]
    }
    addQtyInput.value='';
    });




    deleteQtyButton.addEventListener('click', () =>{

        let listed = document.querySelector('ul');
        let li = document.querySelector('li:last-child');
        listed.removeChild(li);;
    
    });
deleteIndividualButton.addEventListener('click', () =>{
    let li = document.querySelector('li');
listed.removeChild(li);

});


//addBtn.addEventListener("click", additemHandler)