window.setTimeout(function() {

    var toDos = ["Buy new turtle", "Save the world"];

    var input = prompt("What would you like to do?");

while(input !== "quit") {
//handle input
    if(input === "list") {
        listToDos();
    } else if(input === "new") {
        addToDo();
    } else if(input === "delete") {
        deleteToDo();
    }
//ask again for new input
var input = prompt("What would you like to do?");
}

console.log("OK, YOU QUIT THE APP");

//FUNCTIONS LISTED HERE//

function listToDos() {
    console.log("************")
        toDos.forEach(function(todol, i) {
            console.log(i + ": " + todol);
        });
        console.log("************")
}

function addToDo() {
    //ask for newToDo
    var newToDo = prompt("Enter your new task.");
    //add to toDos array
    toDos.push(newToDo);
    console.log("Added!")
}

function deleteToDo() {
    //ask for index of toDo to be deleted
    var index = prompt("Enter index of toDo to be deleted.");
    //delete toDo[i]
    toDos.splice(index,1);
    console.log("Deleted!")
}

}, 500);