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

