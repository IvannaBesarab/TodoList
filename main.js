var Todo = (function(){
  	var TODO_LIST_ID = document.querySelector('#todoList');
  	var NEW_TASK_ID = document.querySelector('#newTask');
  			
  	function addNewTask(event) {
        event.preventDefault();
        if (!NEW_TASK_ID.value.length) {
        		 return;
        	}
        
        addItemToList(NEW_TASK_ID.value);
        NEW_TASK_ID.value = '';
    }

    function addItemToList(item) {
    	var LI = document.createElement('li');
    	LI.innerHTML = '<a href="">x</a>' + item;
    	LI.addEventListener('click', deleteTask);
    	TODO_LIST_ID.appendChild(LI);
    }
    
    function deleteTask(event) {
    	event.preventDefault();
        this.parentNode.removeChild(this);
    }
    			
    return {
    	createTask: addNewTask
    };
			
})();
	  
document.querySelector('#submit').addEventListener('click', Todo.createTask);