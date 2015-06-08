/*

Various distance conversions

*/

toKM = function(distance){ return distance * 0.001 };
toMi = function(distance){ return distance * 0.000621371 };
toFt = function(distance){ return distance * 3.28084 };
toBlocks = function(distance){ return distance * 0.012427423844746679 };
calculateDistance = function(distance){
	var distanceValue,
			distanceUnit;
	if (toMi(distance) <= 0.25){
		distanceValue = toFt(distance).to2Decimals();
		distanceUnit = 'ft';
	} else { 
		distanceValue = toMi(distance).to1Decimal();
		distanceUnit = 'mi';
	}
	return [distanceValue, distanceUnit];
};