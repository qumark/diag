$(document).ready(function() {

	$('.labirint').on('click', function() {
		var fndsrc = $(this).closest('li').data('imgsrc');
		var imgshop = $('<img class="imglab" src="'+fndsrc+'"/>');
		var info = $(this).closest('li').data('details');
		var infopaste = $('<p class="details detlab">'+info+'</p>');
		
		$(this).toggleClass('clicked');
		if($(this).hasClass('clicked')) {
		$('#imgzone').find('img').last().before(imgshop);
		$('li').last().after(infopaste);
		$('.details').slideDown();
			if($('.details').length > 2) {$('.details').last().remove()}
		} else {
		$('.imglab').remove();
		};
		
		
	});
	
	$('.bg').on('click', function() {
		var fndsrc = $(this).closest('li').data('imgsrc');
		var imgshop = $('<img class="imgbg" src="'+fndsrc+'"/>');
		var info = $(this).closest('li').data('details');
		var infopaste = $('<p class="details detbg">'+info+'</p>');
		
		$(this).toggleClass('clicked');
		if($(this).hasClass('clicked')) {
		$('#imgzone').find('img').last().before(imgshop);
		$('li').last().after(infopaste);
		$('.details').slideDown();
			if($('.details').length > 2) {$('.details').last().remove()}
		} else {
		$('.imgbg').remove();
		};
		
		
	});
	
	$('.chitai').on('click', function() {
		var fndsrc = $(this).closest('li').data('imgsrc');
		var imgshop = $('<img class="imgch" src="'+fndsrc+'"/>');
		var info = $(this).closest('li').data('details');
		var infopaste = $('<p class="details detch">'+info+'</p>');
		
		$(this).toggleClass('clicked');
		if($(this).hasClass('clicked')) {
		$('#imgzone').find('img').last().before(imgshop);
		$('li').last().after(infopaste);
		$('.details').slideDown();
			if($('.details').length > 2) {$('.details').last().remove()}
		} else {
		$('.imgch').remove();
		};
		
	});
	
	$('.ozon').on('click', function() {
		var fndsrc = $(this).closest('li').data('imgsrc');
		var imgshop = $('<img class="imgozon" src="'+fndsrc+'"/>');
		var info = $(this).closest('li').data('details');
		var infopaste = $('<p class="details detozon">'+info+'</p>');
		
		$(this).toggleClass('clicked');
		if($(this).hasClass('clicked')) {
		$('#imgzone').find('img').last().before(imgshop);
		$('li').last().after(infopaste);
		$('.details').slideDown();
			if($('.details').length > 2) {$('.details').last().remove()}
		} else {
		$('.imgozon').remove();
		};
		
	});
	
	$('.moskva').on('click', function() {
		var fndsrc = $(this).closest('li').data('imgsrc');
		var imgshop = $('<img class="imgmsk" src="'+fndsrc+'"/>');
		var info = $(this).closest('li').data('details');
		var infopaste = $('<p class="details detmsk">'+info+'</p>');
		
		$(this).toggleClass('clicked');
		if($(this).hasClass('clicked')) {
		$('#imgzone').find('img').last().before(imgshop);
		$('li').last().after(infopaste);
		$('.details').slideDown();
			if($('.details').length > 2) {$('.details').last().remove()}
		} else {
		$('.imgmsk').remove();
		};
		
	});
	
	$('.respublica').on('click', function() {
		var fndsrc = $(this).closest('li').data('imgsrc');
		var imgshop = $('<img class="imgrs" src="'+fndsrc+'"/>');
		var info = $(this).closest('li').data('details');
		var infopaste = $('<p class="details detrs">'+info+'</p>');
		
		$(this).toggleClass('clicked');
		if($(this).hasClass('clicked')) {
		$('#imgzone').find('img').last().before(imgshop);
		$('li').last().after(infopaste);
		$('.details').slideDown();
			if($('.details').length > 2) {$('.details').last().remove()}
		} else {
		$('.imgrs').remove();
		};
		
	});
	
	$('.mdk').on('click', function() {
		var fndsrc = $(this).closest('li').data('imgsrc');
		var imgshop = $('<img class="imgmdk" src="'+fndsrc+'"/>');
		var info = $(this).closest('li').data('details');
		var infopaste = $('<p class="details detmdk">'+info+'</p>');
		
		$(this).toggleClass('clicked');
		if($(this).hasClass('clicked')) {
		$('#imgzone').find('img').last().before(imgshop);
		$('li').last().after(infopaste);
		$('.details').slideDown();
			if($('.details').length > 2) {$('.details').last().remove()}
		} else {
		$('.imgmdk').remove();
		};
		
	});
	
});