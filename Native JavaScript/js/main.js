
var Todo = (function(){
    const CLOSE = 'x';

    function init (params) {
        var input;
        var list;
        var button = params.rootElement.querySelector('button');
        button.addEventListener('click', addTask);

        function addTask(event) {
            inputText = params.rootElement.querySelector('input').value;
            if (!inputText){
                return;
            }

            list  = document.createElement('div');
            list.setAttribute('class', 'task');
            list.innerHTML = inputText + '<div class="delete">'+ CLOSE +'</div>';
            list.querySelector('.delete').addEventListener('click', deleteTask);

            params.placeToListTasks.appendChild(list);
            params.rootElement.querySelector('input').value = '';

            function deleteTask(event) {
                this.parentNode.remove();
            }

        }
    }

    return {
    	init : init
    };
})();
