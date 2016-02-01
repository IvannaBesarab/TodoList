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
            });
        }

        $(button).on('click', function () {
            var inputText = params.rootElement.find('input').val();

            $.ajax({
                method: 'POST',
                data: JSON.stringify({inputText: inputText}),
                contentType: 'application/json',
                url: 'http://localhost:3030/input',
                success: function () {
                    arr.push(inputText);
                    localStorage[className] = JSON.stringify(arr);
                    params.placeToListTasks.append(taskFormat.format(inputText));
                    params.rootElement.find('input').val('');
                    params.placeToListTasks.find('.delete').on('click', deleteHandler);

                    params.rootElement.find('input').parent().removeClass('error');
                    params.rootElement.find('input').attr('placeholder', 'Type here');
                    params.rootElement.find('button').removeClass('btn-danger');
                },
                error: function () {
                    params.rootElement.find('input').parent().addClass('error');
                    params.rootElement.find('input').attr('placeholder', 'Input is empty');
                    params.rootElement.find('button').addClass('btn-danger');
                }
            });

        });

        function deleteHandler() {
            var text = $(this).closest('.task').text();
            //remove last element 'x' from text
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