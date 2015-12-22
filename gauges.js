$(document).ready(function() {
	$(".gauge").each(function() {
		// If using shorthand, fill in
		if ($(this).children().length == 0) {
			var fVal = $(this).attr("data-value");
			var sUnits = $(this).attr("data-units");
				// Assume units if not provided
				if (typeof sUnits == "undefined") sUnits = "%";
			var fMax = $(this).attr("data-max");
				// Assume max if not provided
				if (typeof fMax == "undefined") fMax = 100.0;
			var fMin = $(this).attr("data-min");
				// Assume min if not provided
				if (typeof fMin == "undefined") fMin = 0.0;
			var sColor = $(this).attr("data-color");
				// Assume color if not provided
				if (typeof sColor == "undefined") sColor = $(this).css("color");
			var sBgColor = $(this).attr("data-bgcolor");
				// Assume background color if not provided
				if (typeof sBgColor == "undefined") sBgColor = $(this).css("background-color");
			var iRadius = $(this).attr("data-radius");
				// Assume radius if not provided
				if (typeof iRadius == "undefined") iRadius = 2*$(this).height();
			var iThickness = $(this).attr("data-thickness");
				// Assume thickness if not provided
				if (typeof iThickness == "undefined") iThickness = $(this).height()/5;
			var sAnimate = $(this).attr("data-animate");
				// Assume animate if not provided
				if (typeof sAnimate == "undefined") sAnimate = "0";
			var sNoText = $(this).attr("data-notext");
				// Assume notext if not provided
				if (typeof sNoText == "undefined") sNoText = "0";

			// Calculate percentage before assuming units
			var fPercentage = (fVal-fMin)/(fMax-fMin);

			// Construct gauge
			$(this).append('<div class="outer"><div class="inner"></div><div class="cover"></div><div class="value">'+fVal+sUnits+'</div></div>');

			// If specified custom radius, style radius, thickness, and size
			$(this).css({
				"height": (iRadius/2)+"px",
				"width": (iRadius)+"px"
			});
			$(this).children(".outer").css({
				"width": (iRadius)+"px",
				"height": (iRadius)+"px"
			});
			$(this).children(".outer").children(".inner").css({
				"width": (iRadius-(2*iThickness))+"px",
				"height": (iRadius-(2*iThickness))+"px",
				"top": (iThickness)+"px",
				"left": (iThickness)+"px"
			});
			$(this).children(".outer").children(".value").css({
				"font-size": ((iRadius-(2*iThickness))/5)+"px"
			});
			
			// With animate
			if (stringToBool(sAnimate)) {
				$(this).children(".outer").children(".cover").animate(
					{fakeNumericProp: (180*fPercentage)},
					{
						step: function(current, effect) {
							$(this).css({
								"-ms-transform": "rotate("+current+"deg)",
								"-webkit-transform": "rotate("+current+"deg)",
								"transform": "rotate("+current+"deg)"
							}); 
						},
						duration: 2000
					}
				);
			}
			// Without animate
			else {
				$(this).children(".outer").children(".cover").css("transform", "rotate("+(180*fPercentage)+"deg)");
			}

			// Style
			$(this).css({
				"background-color": sBgColor,
				"color": sColor
			});
			$(this).children(".outer").css({"background-color": sColor});
			$(this).children(".outer").children(".inner").css({"background-color": sBgColor});
			$(this).children(".outer").children(".cover").css({"background-color": sBgColor});

			// If notext, hide value display
			if (stringToBool(sNoText))
				$(this).children(".outer").children(".value").css({"display": "none"});
		}
	});
});

/**
 * Converts string values to a boolean
 */
function stringToBool(value) {
	return (value == "1" || value.toLowerCase() == "true") ? true : false;
}
