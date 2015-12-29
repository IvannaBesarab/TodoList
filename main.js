function init() {
  var text = document.getElementById("text");
  var button = document.getElementById("submit").addEventListener("click", addNewTask);
  text.style.color = 'green';
  

  function addNewTask() {
  	var newTask = documentElementById("newTask")
    console.log(newTask.value);
  }

}

init();
