(function(){
	$(window).scroll(function() {
        if($(this).scrollTop() > 70) {
            $('header').addClass('navbar-collapse');
            return 1;
       	}
		$('header').removeClass('navbar-collapse'); 
	});
})();