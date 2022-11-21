function allowDrop(ev) {
    ev.preventDefault();
  }
    
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}
    
function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}

function createColumn() {
    let inputData = prompt("Enter column name: ");

    let newColumn = document.createElement("div");
    newColumn.classList.add("column");
    newColumn.setAttribute("ondrop", "drop(event)");
    newColumn.setAttribute("ondragover", "allowDrop(event)");

    let newPara = document.createElement("p");
    newPara.appendChild(document.createTextNode(inputData));
    newColumn.appendChild(newPara);

    document.getElementById("content").appendChild(newColumn);
}

function createTile() {
    let inputData = prompt("Enter column name: ");

    let newTile = document.createElement("div");
    newTile.classList.add("tile");
    newTile.setAttribute("id", "tile#00");
    newTile.setAttribute("draggable", "true");
    newTile.setAttribute("ondragstart", "drag(event)");

    let newPara = document.createElement("p");
    newPara.appendChild(document.createTextNode(inputData));
    newTile.appendChild(newPara);

    document.getElementById("default").appendChild(newTile);
}

function promptTest() {
    prompt("Please enter your name", "Harry Potter");
}