(function () {
	var _ua = navigator.userAgent;
	var trident = _ua.match(/Trident\/(\d.\d)/i);
	if( trident != null ){
		if( trident[1] < 6 ) {
			$('.notice--danger.align-center').removeClass('hidden');
		}
	}
	
	var imgOpen = document.getElementsByClassName('open-new'); 
	for (var x = 0; x < imgOpen.length; x++) {
	    imgOpen.item(x).onclick=function() {
	        window.open(this.src)
	    };
	}

})()
