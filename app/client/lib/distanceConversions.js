/*

Various distance conversions

*/

toKM = function(distance){ return Math.round(distance * 0.001) };
toMi = function(distance){ return distance * 0.00062137 };
toFt = function(distance){ return distance * 3.28084 };
toBlocks = function(distance){ return distance * 0.012427423844746679 };
calculateDistance = function(distance){
	if (Math.round(toMi(distance)) <= 0){
		return toBlocks(distance) <= 1 ? toFt(distance).toDecimal() + " ft" : toBlocks(distance).toDecimal() + " blocks";
	} else { 
		return toMi(distance).toDecimal() + " mi";
	}
};