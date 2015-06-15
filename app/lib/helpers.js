/*****************************************************************************/
/* Client and Server Helpers */
/*****************************************************************************/

// String helpers
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
String.prototype.capitalizeFirstLetter = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

function toTitleCase(string){
    return string.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}
String.prototype.toTitleCase  = function() {
    return this.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

// Math helpers
function to1Decimal(number){
	return Math.round(number * 10) / 10;
}
Number.prototype.to1Decimal = function(){
	return Math.round(this * 10) / 10;
}
function to2Decimals(number){
	return Math.round(number * 100) / 100;
}
Number.prototype.to2Decimals = function(){
	return Math.round(this * 100) / 100;
}

// Spacebars helpers
UI.registerHelper('equals', function(a, b) {
  return a == b;
});

UI.registerHelper('icon', function(options){
	// TO USE: {{{icon name="constants.svg.icon.name" }}} (from constants file)
	var settings = $.extend({}, constants.icons.svg[options.hash.name], options.hash);
	if (!settings.size){
		settings.size = 32;
	}
	var ratio = settings.width / settings.size;

	var $svg = $(document.createElement('svg'));
	$svg.attr({
		version: "1.1",
		id: settings.name,
		xmlns: "http://www.w3.org/2000/svg",
		"xmlns:xlink": "http://www.w3.org/1999/xlink",
		x: "0px",
		y: "0px",
		width: settings.size, 
		height: settings.height / ratio,
		viewBox: "0 0 " + settings.width + " " + settings.height,
		"xml:space": "preserve"
	});
	var path = '<g><path d="' + settings.path + '" fill-opacity="'+ settings.fillOpacity +'" stroke-width="'+ settings.strokeWeight +'" fill="'+ settings.fillColor +'" /></path></g>';
	$svg.wrap('<span class="' + constants.icons.svg.className + '"></span>').append(path);
  return $svg.closest('.' + constants.icons.svg.className)[0].outerHTML;
});

