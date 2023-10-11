// const inputbox = document.getElementById("input-box");
// const listcontainer = document.getElementById("list-container");
// const addtask = document.getElementById('#add-task')

// function addTask()
// {
//     if(inputbox.value === '')
//     {
//         alert("You must write something!!");
//     }
//     else
//     {
//         let li = document.createElement("li");
//         li.innerHTML = inputbox.value;
//         listcontainer.appendChild(li);

//         let span = document.createElement("span");
//         span.innerHTML = "\u00d7";
//         li.appendChild(span);
//     }
//     inputbox.value = "";
//     //Add any task it will saved the updated task in the Browser
//     saveData()
// }

// //JavaScript for the click function
// listcontainer.addEventListener("click",function(e)
// {
//     console.log("clicked the button")
//     if(e.target.tagName === "LI")
//     {
//         e.target.classList.toggle("checked");
//         saveData();
//     }
//     else if(e.target.tagName === "SPAN")
//     {
//         e.target.parentElement.remove();
//         saveData();
//     }
// }, false);


// function saveData()
// {
//     localStorage.setItem("data",listcontainer.innerHTML);
// }

// //to display the data
// function showtask()
// {
//     listcontainer.innerHTML=localStorage.getItem("data");
// }
// showtask();


const inputbox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");
const addTaskButton = document.getElementById('add-task'); // Corrected the selection

addTaskButton.addEventListener("click", function() {
    if (inputbox.value === '') {
        alert("You must write something!!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listcontainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputbox.value = "";
    // Add any task it will save the updated task in the Browser
    saveData();
});

// JavaScript for the click function
listcontainer.addEventListener("click", function(e) {
    console.log("clicked the button");
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", listcontainer.innerHTML);
}

// To display the data
function showTask() {
    listcontainer.innerHTML = localStorage.getItem("data");
}
showTask();
