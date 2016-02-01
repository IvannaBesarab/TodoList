$(document).ready(function () {
    Todo.init({
        rootElement: $('.todoListOne'),
        placeToListTasks: $('.listOne')
    });

    Todo.init({
        rootElement: $('.todoListTwo'),
        placeToListTasks: $('.listTwo')
    })
});
