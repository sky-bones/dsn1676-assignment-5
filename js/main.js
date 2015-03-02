
var $toDo = $('#to-do');
var $form = $('form');
var $listItem = $('.list-item');




$form.on('submit', function (e) {

	var $li = $('<li>');

	e.preventDefault();

	$li.append($toDo.val ());

	$listItem.append($li);


console.log($li)



});


$form.on('submit', function () {





});

