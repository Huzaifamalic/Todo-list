var getul = document.getElementById('getUl');

function addtodo() {
    var getinp = document.getElementById('Inp');
    var cerataeli = document.createElement('li');
    var litext = document.createTextNode(getinp.value);
    cerataeli.appendChild(litext);
    getul.appendChild(cerataeli);
    getinp.value = "";

    var deltebtn = document.createElement('button');
    var txtbtn = document.createTextNode('Delete');
    deltebtn.appendChild(txtbtn);
    cerataeli.appendChild(deltebtn);
    deltebtn.setAttribute('onclick', "deltodo(this)");
    var editbtn = document.createElement('button');
    var editTxtBtn = document.createTextNode('Edit');
    editbtn.appendChild(editTxtBtn);
    cerataeli.appendChild(editbtn);
    editbtn.setAttribute('onclick', "edittodo(this)");
}


function deltodoall() {
    getul.innerHTML = "";
}

function deltodo(abc) {
    abc.parentNode.remove();
}
function edittodo(abc) {
    var newText = prompt("Enter new text:");
    if (newText !== null && newText !== "") {
        abc.parentNode.firstChild.nodeValue = newText;
    }
}