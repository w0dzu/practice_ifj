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
    let newColumn = document.createElement("div");
    newColumn.classList.add("column");
    newColumn.setAttribute("ondrop", "drop(event)");
    newColumn.setAttribute("ondragover", "allowDrop(event)");

    document.getElementById("content").appendChild(newColumn);
}

function createTile() {
    let newTile = document.createElement("div");
    newTile.classList.add("tile");
    newTile.setAttribute("id", "tile#00");
    newTile.setAttribute("draggable", "true");
    newTile.setAttribute("ondragstart", "drag(event)");

    document.getElementById("default").appendChild(newTile);
}