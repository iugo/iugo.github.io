(function($){
	
	$(document).ready(function() {
	
		if(typeof hljs != 'undefined') hljs.initHighlightingOnLoad();
	
		var sections = $('#content .main-content').find('h2');
		if(sections.length){
			$('body').addClass('has-sidebar');
			$('#content .main-content').scrollNav({
				sections: 'h2',
				fixedMargin: 50,
				animated: true,
				speed: 300,
				showHeadline: false,
				showTopLink: false,
				location: 'insertBefore'
			});
		} 

		$('#header .nav').dropit();
	});

})(window.jQuery);