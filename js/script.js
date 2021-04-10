$(document).ready(function(){
	//alert
	$('#btn').click(function(){
	
	alert("hello there");

	});
    //hide
	$('#hide').click(function(){
		$('h2').hide("slow");

	});
    //show
	$('#show').click(function(){
		$('h2').show("slow");

	});
	//toggle
	$('#toggle').click(function(){
		$('h2').toggle("slow");

	});
	//fadeout
	$('#fadeout').click(function(){
		$('h2').fadeOut("slow");

	});	
	//fadein
	$('#fadein').click(function(){
		$('h2').fadeIn("slow");

	});	
	//fadetoggle
	$('#fadetoggle').click(function(){
		$('h2').fadeToggle("slow");

	});

	// accordian
	$('.panel').click(function(){
		$('.content').slideToggle("slow");
	});
});
