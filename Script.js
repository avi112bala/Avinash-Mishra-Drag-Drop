function onDragStart(event) {
  event.dataTransfer.setData("text/plain", event.target.id);

  event.currentTarget.style.backgroundColor = "yellow";
}

function onDragOver(event) {
  event.preventDefault();
}
function onDrop(event) {
  const id = event.dataTransfer.getData("text");
  const draggableElement = document.getElementById(id);
  const dropzone = event.target;
  dropzone.appendChild(draggableElement);
  event.dataTransfer.clearData();
}

function onDragOver(event) {
  event.preventDefault();
}


function removeAllItems() {
  const secondDiv = document.getElementById("second-div");

  // Remove all item
  while (secondDiv.firstChild) {
    secondDiv.removeChild(secondDiv.firstChild);
  }
}


//add new item

  function addItem() {
    const item = document.getElementById("inputItem").value;
    const newItemElement = document.createElement("div");
    newItemElement.textContent = item;
    newItemElement.style.color ="black";
    newItemElement.className = "example-draggable";
    

    newItemElement.draggable = true;
    newItemElement.id = "item" + Date.now();
    newItemElement.addEventListener("dragstart", onDragStart);

    const div1 = document.getElementById("first-div");
    div1.appendChild(newItemElement);

    document.getElementById("inputItem").value = "";
  }
