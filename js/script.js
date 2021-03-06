/*
	Author: Jeremy Worboys <jeremy@complexcompulsions.com>
*/

Modernizr.load([
	{
	// Let's see if we need to load selectivizr
	test : Modernizr.borderradius,
	// Modernizr.load loads selectivizr and Respond.js for IE6-8
	nope : ['libs/selectivizr.min.js', 'libs/respond.min.js']
	}
]);


$("#navbar").scrollspy();

if (Modernizr.touch) {
	$(".iphone-demo").hide();
	$(".display-demo").show();
}


/*! A fix for the iOS orientationchange zoom bug.
 Script by @scottjehl, rebound by @wilto.
 MIT License.
*/
(function(w){

	// This fix addresses an iOS bug, so return early if the UA claims it's something else.
	if( !( /iPhone|iPad|iPod/.test( navigator.platform ) && navigator.userAgent.indexOf( "AppleWebKit" ) > -1 ) ){
		return;
	}

	var doc = w.document;

	if( !doc.querySelector ){ return; }

	var meta = doc.querySelector( "meta[name=viewport]" ),
		initialContent = meta && meta.getAttribute( "content" ),
		disabledZoom = initialContent + ",maximum-scale=1",
		enabledZoom = initialContent + ",maximum-scale=10",
		enabled = true,
		x, y, z, aig;

	if( !meta ){ return; }

	function restoreZoom(){
		meta.setAttribute( "content", enabledZoom );
		enabled = true;
	}

	function disableZoom(){
		meta.setAttribute( "content", disabledZoom );
		enabled = false;
	}

	function checkTilt( e ){
		aig = e.accelerationIncludingGravity;
		x = Math.abs( aig.x );
		y = Math.abs( aig.y );
		z = Math.abs( aig.z );

		// If portrait orientation and in one of the danger zones
		if( !w.orientation && ( x > 7 || ( ( z > 6 && y < 8 || z < 8 && y > 6 ) && x > 5 ) ) ){
			if( enabled ){
				disableZoom();
			}
		}
		else if( !enabled ){
			restoreZoom();
		}
	}

	w.addEventListener( "orientationchange", restoreZoom, false );
	w.addEventListener( "devicemotion", checkTilt, false );

})( this );

$('#shareme').sharrre({
	share: {
		twitter: true,
		facebook: true,
		googlePlus: true,
		digg: false,
		delicious: false,
		stumbleupon: false,
		linkedin: false,
		pinterest: false
	},
	buttons: {
		twitter: {
			count: 'horizontal',
			via: 'jeremyworboys'
		},
		facebook: {
			layout: 'button_count'
		},
		googlePlus: {
			size: 'medium'
		}
	},
	enableHover: false,
	enableCounter: false,
	enableTracking: true
});
