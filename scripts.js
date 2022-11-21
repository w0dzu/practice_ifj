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
    let title = prompt("Enter column name: ");

    let newColumn = document.createElement("div");
    newColumn.classList.add("column");
    newColumn.setAttribute("ondrop", "drop(event)");
    newColumn.setAttribute("ondragover", "allowDrop(event)");

    let newPara = document.createElement("p");
    newPara.appendChild(document.createTextNode(title));
    newColumn.appendChild(newPara);

    document.getElementById("content").appendChild(newColumn);
}

function createTile() {
    let title = prompt("Enter tile name: ");
    let content = prompt("Enter content");

    let newTile = document.createElement("div");
    newTile.classList.add("tile");
    newTile.setAttribute("id", "tile#00");
    newTile.setAttribute("draggable", "true");
    newTile.setAttribute("ondragstart", "drag(event)");

    let newPara = document.createElement("p");
    newPara.appendChild(document.createTextNode(title));
    newTile.appendChild(newPara);

    newTile.appendChild(document.createTextNode(content));

    document.getElementById("default").appendChild(newTile);
}

function exportHTML() {
    let content = document.getElementById("content");
    
    $.ajax({
        type: "POST",
        url : "save-to-db.php",
        data: content,
        processData: false,
        success: function(){  
            console.log("Data send!");
            //window.location.href = "save-to-db.php";                        
        }
    });
}