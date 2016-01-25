$(document).ready(function() {
	var Todo = (function() {
		function init(params) {
			var arr = [];
			var button = params.rootElement.find('button');
			var className = params.placeToListTasks.attr('class');

			if (localStorage[className]) {
				arr = getFromLocalStorage(className)

				_.forEach(arr, function(value) {
					params.placeToListTasks.append('<div class="task">' + value +
						'<div class="delete">x</div></div>')

					$('.task').on('click', '.delete', deleteHandler)
				})
			}

			$(button).on('click', function() {
				var inputText = params.rootElement.find('input').val()
				//if (!inputText) {
					$.ajax({
						method: 'POST',
						data: JSON.stringify({inputText: inputText}),
				        contentType: 'application/json',
                        url: 'http://localhost:3030/input',
                        success: function(data) {
                            console.log('success');
                            console.log(JSON.stringify(data));
                        }
                    });

					//return
				//}
				arr.push(inputText)
				setToLocalStorage(arr, className)
				params.placeToListTasks.append('<div class="task">' + inputText +
					'<div class="delete">x</div></div>')

				params.rootElement.find('input').val('')

				$('.task').on('click', '.delete', deleteHandler)
			})

			function deleteHandler() {
				$(this).parent().remove()
				var text = $(this).closest('.task').text()
					// remove last element 'x' from text
				var slicedText = text.substring(0, text.length - 1)
				arr = _.without(arr, slicedText)

				setToLocalStorage(arr, className)
			}
		}

		function setToLocalStorage(arr, placeToListTasks) {
			var obj = {}
			arr.forEach(function(val, index) {
				obj[index] = val
			})
			localStorage[placeToListTasks] = JSON.stringify(obj)
		}

		function getFromLocalStorage(placeToListTasks) {
			var arr = []
			var obj = JSON.parse(localStorage[placeToListTasks])
			_.forEach(obj, function(value) {
				arr.push(value)
			})
			return arr
		}

		return {
			init: init
		}
	})()

	Todo.init({
		rootElement: $('.todoListOne'),
		placeToListTasks: $('.listOne')
	})

	Todo.init({
		rootElement: $('.todoListTwo'),
		placeToListTasks: $('.listTwo')
	})

})
