var Todo = (function () {
    function init(params) {
        var arr = [];
        var button = params.rootElement.find('button');
        var className = params.placeToListTasks.attr('class');
        var taskFormat = '<div class="task">{0}<span class="delete pull-right">x</span></div>';

        if (localStorage[className]) {
            arr = JSON.parse(localStorage[className]);
            $.each(arr, function (index, value) {
                params.placeToListTasks.append(taskFormat.format(value));
                params.placeToListTasks.find('.delete').on('click', deleteHandler);
            })
        }

        $(button).on('click', function () {
            var inputText = params.rootElement.find('input').val();
            if (!inputText) {
                return;
            }
            arr.push(inputText);
            localStorage[className] = JSON.stringify(arr);
            params.placeToListTasks.append(taskFormat.format(inputText));
            params.rootElement.find('input').val('');
            params.placeToListTasks.find('.delete').on('click', deleteHandler)
        });

        function deleteHandler() {
            var text = $(this).closest('.task').text();
            // remove last element 'x' from text
            var slicedText = text.substring(0, text.length - 1);
            if (arr.indexOf(slicedText) === -1) {
                return;
            }
            arr.splice(arr.indexOf(slicedText), 1);
            localStorage[className] = JSON.stringify(arr);
            $(this).parent().remove();
        }
    }

    return {
        init: init
    }
})();