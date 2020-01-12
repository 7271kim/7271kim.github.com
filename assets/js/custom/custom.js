(function () {
	var _ua = navigator.userAgent;
	var trident = _ua.match(/Trident\/(\d.\d)/i);
	if( trident != null ){
		if( trident[1] < 6 ) {
			$('.notice--danger.align-center').removeClass('hidden');
		}
	}
})()
