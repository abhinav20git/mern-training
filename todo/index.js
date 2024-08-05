let task=document.getElementById("taskInput")
let taskValue=task.value.trim();
console.log(taskValue);
    function addTask(){
        console.log(taskValue);
        document.getElementById("taskList").innerHTML=`${taskValue}`;
    }
  