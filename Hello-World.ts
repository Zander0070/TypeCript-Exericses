const DisplayButton = document.getElementById('addBtn');
const Display = document.getElementById('Header');
const Name = document.getElementById('text');

function HelloWorld(){
    if (Display && Name instanceof HTMLInputElement){
        Display.innerHTML = 'Hello ' + Name.value;
    }
}   

DisplayButton?.addEventListener('click', HelloWorld);
