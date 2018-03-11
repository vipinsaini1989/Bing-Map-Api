
var geoLocation = require("./geoLocation.js");

geoLocation.bingMapsLookup("bangalore",false, function(point,err){
	console.log(err);
	console.log(point);
});

// geoLocation.bingMapsLookup([20,77], true, function(point, err){
// 	console.log(err);
// 	console.log(point);
// });