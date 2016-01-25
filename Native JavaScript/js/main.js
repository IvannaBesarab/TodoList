var Todo = (function(){
    const CLOSE = 'x';
    const TASK  = 'task';

    function init (params) {
        var button = params.rootElement.querySelector('button');
        button.addEventListener('click', function(){
            //as params.rootElement is used here, anonymous func is called.
            //I don't know yet if its possible to pass parameters into func
            //in case of button.addEventListener('click', addTask);
            var inputText = params.rootElement.querySelector('input').value;
            if (!inputText){
                return;
            }

            var list  = document.createElement('div');
            list.setAttribute('class', TASK);
            list.innerHTML = inputText + '<div class="delete">'+ CLOSE +'</div>';
            list.querySelector('.delete').addEventListener('click', deleteTask);

            params.placeToListTasks.appendChild(list);
            params.rootElement.querySelector('input').value = '';
        });
    }

    function deleteTask() {
        this.parentNode.remove();
    }
    
    return {
    	init : init
    };
})();
