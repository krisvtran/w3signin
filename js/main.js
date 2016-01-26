$(document).ready(function(){

	$('.signin').on('click', function (){
		$('.modal').fadeIn(1000)
	});

	$('.close').on('click', function (){
		$('.modal').fadeOut(1000)
	});

	$('button.submit').click (function(){
		$('input').addClass("error")
	});

	$('input').click (function(){
		$(this).removeClass("error")
	});

	$('.modal').on('click', function (){
		$(this).fadeOut(1000)
	});	

	$('.getstarted').on('click', function (event){
  		event.stopPropagation()
	}); 

});