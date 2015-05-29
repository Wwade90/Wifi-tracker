/*

Various distance conversions

*/

toKM = function(distance){ return Math.round(distance * 0.001) };
toMi = function(distance){ return distance * 0.00062137 };
toFt = function(distance){ return distance * 3.28084 };
toBlocks = function(distance){ return distance * 0.012427423844746679 };
calculateDistance = function(distance){
	if (Math.round(toMi(distance)) <= 0){
		return toBlocks(distance) <= 1 ? toFt(distance).to2Decimals() + " ft" : "~" +toBlocks(distance).to1Decimal()+ " blocks";
	} else { 
		return toMi(distance).to1Decimal() + " mi";
	}
};