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
function round2Decimals(number){
	return ((number * 100) / 100);
}

// Spacebars helpers
UI.registerHelper('equals', function(a, b) {
  return a == b;
});