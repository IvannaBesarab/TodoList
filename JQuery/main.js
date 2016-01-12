$(document).ready(function(){
	var Todo = (function(){		
		function createTask (event){
			event.preventDefault();			
			var inputText = $(this).prev().val();
			
			if (inputText === ''){
				return;
			} 
			
			$(this).next().children('ul').length ? $(this).next().children('ul') :
								$(this).next().append('<ul></ul>');								
			$(this).next().find('ul').append('<li> <a>x</a>' + inputText + '</li>');			
			$(this).prev().val('');
		}
							
		$('.todoList').on('click', 'a', function(event){
			event.preventDefault();
				
			$(this).parent().remove();			
		});
		
		return {
			createTask : createTask
		}		
	})();	
	
	$('.todoList').on('click', 'button', Todo.createTask);
		
});
