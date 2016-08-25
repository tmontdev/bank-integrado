(function(){
	var inputSimulator = $("section#home .form-simulator .field-wrapper input.form-control")
	inputSimulator.keyup(function(){
		if($(this).val().length > 0)
			$(this).parent(".field-wrapper").find("label.form-identifier").addClass("have-characters");
		else
			$(this).parent(".field-wrapper").find("label.form-identifier").removeClass("have-characters");
	});
})();