var Todo = (function(){
  	
  	function addNewTask(event) {
        event.preventDefault();
				
        if (!this.previousElementSibling.value.length) {
        		return;
        	}
			
		var UL = document.createElement('ul');
    	UL.innerHTML = '<li><a href="">x</a>' + this.previousElementSibling.value + '</li>';
    	UL.addEventListener('click', deleteTask);
    	this.nextElementSibling.appendChild(UL);
		
        this.previousElementSibling.value = '';
    }
    
    function deleteTask(event) {
    	event.preventDefault();
    	if(event.target.tagName === 'A'){
			this.parentNode.removeChild(this);
    	}   	
    }
    			
    return {
    	createTask: addNewTask
    };
			
})();
	  
document.querySelector('#submitOne').addEventListener('click', Todo.createTask);
document.querySelector('#submitTwo').addEventListener('click', Todo.createTask);