var Todo = (function(){
  	var UL = document.createElement('ul');
  	var LI = document.createElement('li');
  	function addNewTask(event) {
        event.preventDefault();
				
        if (!this.previousElementSibling.value.length) {
        		return;
        	}
			
  		  LI.innerHTML = '<a href="">x</a>' + this.previousElementSibling.value;
  		  LI.addEventListener('click', deleteTask);
      	UL.innerHTML += LI;
    	//UL.addEventListener('click', deleteTask);
    	  this.nextElementSibling.appendChild(UL);
		
        this.previousElementSibling.value = '';
    }
    
    function deleteTask(event) {
    	event.preventDefault();
    	if(event.target.tagName === 'A'){
			this.parentNode.removeChild(event.target.parentNode);
    	}   	
    }
    			
    return {
    	createTask: addNewTask
    };
			
})();
	  
document.querySelector('#submitOne').addEventListener('click', Todo.createTask);
document.querySelector('#submitTwo').addEventListener('click', Todo.createTask);